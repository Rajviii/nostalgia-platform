"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface User {
  id: number;
  username: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Try localStorage first for instant render (non-sensitive display data)
    const cached = localStorage.getItem("aiglatson_user");
    if (cached) {
      try {
        setUser(JSON.parse(cached));
      } catch {
        localStorage.removeItem("aiglatson_user");
      }
    }

    // Always validate against the real server-side cookie
    fetch("/api/auth/me")
      .then((res) => {
        if (!res.ok) throw new Error("Not authenticated");
        return res.json();
      })
      .then(({ user: serverUser }) => {
        setUser(serverUser);
        localStorage.setItem("aiglatson_user", JSON.stringify(serverUser));
      })
      .catch(() => {
        // Cookie is missing or invalid — clear any stale client data
        setUser(null);
        localStorage.removeItem("aiglatson_user");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const login = (userData: User) => {
    // Cookie is already set by the login API route.
    // We just sync the client state and cache.
    setUser(userData);
    localStorage.setItem("aiglatson_user", JSON.stringify(userData));
  };

  const logout = async () => {
    // Clear the HTTP-only cookie on the server
    await fetch("/api/auth/logout", { method: "POST" });

    // Clear client-side state
    setUser(null);
    localStorage.removeItem("aiglatson_user");

    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
