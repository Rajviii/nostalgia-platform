"use client";

import { PostCard } from "@/components/feed/post-card";
import { Loader2, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState, use } from "react";
import { Button } from "@/components/ui/button";

interface Post {
    id: number;
    title: string;
    content: string;
    image: string | null;
    created_at: string;
    user: { id: number; username: string; isFollowing?: boolean } | null;
    commentsCount: number;
    likesCount: number;
    categories?: string[];
}

export default function PostsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();

    const [post, setPost] = useState<Post | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchPost = async () => {
        try {
            setIsLoading(true);
            const res = await fetch(`/api/posts/${id}`);
            if (!res.ok) throw new Error("Failed to fetch post");
            const data = await res.json();
            
            // Format data for PostCard
            const formattedPost: Post = {
                ...data,
                user: data.users,
                categories: data.post_categories?.map((pc: any) => pc.categories.name) || [],
                commentsCount: data.commentsCount || 0,
                likesCount: data.likesCount || 0,
            };
            
            setPost(formattedPost);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            fetchPost();
        }
    }, [id]);

    return (
        <div className="w-full max-w-2xl mx-auto p-4 pt-8">
            <Button 
                variant="ghost" 
                onClick={() => router.back()}
                className="mb-6 rounded-full gap-2 text-muted-foreground hover:text-foreground"
            >
                <ArrowLeft className="w-4 h-4" />
                Back
            </Button>

            {isLoading ? (
                <div className="flex h-64 items-center justify-center">
                    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
            ) : error ? (
                <div className="p-6 text-center text-destructive">
                    <p>{error}</p>
                    <button onClick={() => fetchPost()} className="mt-4 underline">Try again</button>
                </div>
            ) : !post ? (
                <div className="p-12 text-center text-muted-foreground">
                    <p className="text-lg">This memory could not be found.</p>
                </div>
            ) : (
                <div className="flex flex-col gap-6">
                    <PostCard post={post} />
                </div>
            )}
        </div>
    );
}