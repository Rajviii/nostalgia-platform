"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/auth-context";
import { toast } from "sonner";
import { Loader2, Image as ImageIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const postSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(100, "Title is too long"),
  content: z.string().min(10, "Share a bit more about this memory..."),
  image_url: z.string().url("Must be a valid URL").optional().or(z.literal("")),
});

type PostValues = z.infer<typeof postSchema>;

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export function CreatePostModal({ isOpen, onClose, onSuccess }: CreatePostModalProps) {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PostValues>({
    resolver: zodResolver(postSchema),
  });

  const onSubmit = async (data: PostValues) => {
    if (!user) {
      toast.error("You must be logged in to post.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          user_id: user.id,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      toast.success("Memory preserved successfully.");
      reset();
      onClose();
      if (onSuccess) onSuccess();
      router.refresh(); // Refresh the page to show new post
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[525px] glass border border-border">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">Pen a Memory</DialogTitle>
          <DialogDescription>
            Share a moment, a thought, or a piece of history.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="e.g., Summer of '99"
              className="bg-background/50"
              {...register("title")}
            />
            {errors.title && <p className="text-xs text-destructive">{errors.title.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">The Story</Label>
            <Textarea
              id="content"
              placeholder="I remember when..."
              className="min-h-[150px] resize-none bg-background/50"
              {...register("content")}
            />
            {errors.content && <p className="text-xs text-destructive">{errors.content.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="image_url" className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4" /> Optional Image URL
            </Label>
            <Input
              id="image_url"
              placeholder="https://example.com/image.jpg"
              className="bg-background/50"
              {...register("image_url")}
            />
            {errors.image_url && <p className="text-xs text-destructive">{errors.image_url.message}</p>}
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-border/50">
            <Button type="button" variant="ghost" onClick={onClose} disabled={isLoading}>
              Cancel
            </Button>
            <Button type="submit" className="rounded-full px-6" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Publish
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
