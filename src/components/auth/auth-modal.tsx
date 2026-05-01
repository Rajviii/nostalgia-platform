"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

import { LoginForm } from "./login-form";
import { RegisterForm } from "./register-form";

interface AuthModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  defaultMode?: "login" | "register";
}

export function AuthModal({
  isOpen,
  onOpenChange,
  defaultMode = "login",
}: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "register">(defaultMode);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px] p-8">
        <div className="bg-red-500 text-white p-2 text-center font-bold mb-4 hidden">
          MODAL RENDERED
        </div>
        <DialogTitle className="text-center mb-6">
          {mode === "login" ? "Welcome Back" : "Join Aiglatson"}
        </DialogTitle>

        <DialogDescription className="sr-only">
          {mode === "login"
            ? "Login to your account"
            : "Create a new account"}
        </DialogDescription>

        {mode === "login" ? (
          <LoginForm
            onSuccess={() => onOpenChange(false)}
            onToggleRegister={() => setMode("register")}
          />
        ) : (
          <RegisterForm
            onSuccess={() => onOpenChange(false)}
            onToggleLogin={() => setMode("login")}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}