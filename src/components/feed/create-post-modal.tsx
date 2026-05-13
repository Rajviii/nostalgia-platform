"use client";

import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";
import { toast } from "sonner";
import { Loader2, Image as ImageIcon, Smile, MapPin, Hash, Globe, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import TextareaAutosize from "react-textarea-autosize";
import { cn } from "@/lib/utils";

const postSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(100, "Title is too long"),
  content: z.string().min(10, "Share a bit more about this memory..."),
  image: z.string().optional(),
  is_public: z.boolean(),
  tags: z.string().optional(),
});

type PostValues = z.infer<typeof postSchema>;

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  initialData?: {
    id: number;
    title: string;
    content: string;
    image: string | null;
  } | null;
}

export function CreatePostModal({ isOpen, onClose, onSuccess, initialData }: CreatePostModalProps) {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [isPublic, setIsPublic] = useState(true);
  const [categories, setCategories] = useState<{ id: number, name: string }[]>([]);
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<number[]>([]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [showAllTags, setShowAllTags] = useState(false);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<PostValues>({
    resolver: zodResolver(postSchema),
    defaultValues: initialData ? {
      title: initialData.title,
      content: initialData.content,
      image: initialData.image || "",
      is_public: true,
      tags: ""
    } : {
      title: "",
      content: "",
      image: "",
      is_public: true,
      tags: ""
    }
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/categories");
        if (res.ok) {
          const data = await res.json();
          setCategories(data);
        }
      } catch (err) {
        console.error("Failed to fetch categories", err);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (initialData && isOpen) {
      setValue("title", initialData.title);
      setValue("content", initialData.content);
      setValue("image", initialData.image || "");
      setImagePreview(initialData.image || null);
      // Fetch post categories if editing
      const fetchPostCategories = async () => {
        try {
          const res = await fetch(`/api/posts/${initialData.id}`);
          if (res.ok) {
            const data = await res.json();
            if (data.post_categories) {
              setSelectedCategoryIds(data.post_categories.map((pc: any) => pc.category_id));
            }
          }
        } catch (err) {
          console.error(err);
        }
      };
      fetchPostCategories();
    } else if (!initialData && isOpen) {
      reset();
      setIsPublic(true);
      setSelectedCategoryIds([]);
      setImagePreview(null);
    }
  }, [initialData, isOpen, setValue, reset]);

  const toggleCategory = (id: number) => {
    setSelectedCategoryIds(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image is too large. Max 5MB allowed.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setValue("image", base64String);
        setImagePreview(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: PostValues) => {
    if (!user) {
      toast.error("You must be logged in to post.");
      return;
    }

    setIsLoading(true);
    try {
      const isEditing = !!initialData;
      const url = "/api/posts";
      const method = isEditing ? "PUT" : "POST";

      const payload = {
        title: data.title,
        content: data.content,
        image: data.image,
        user_id: user.id,
        tags: data.tags,
        categoryIds: selectedCategoryIds,
        ...(isEditing && { id: initialData.id })
      };

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(isEditing ? "Failed to update post" : "Failed to create post");
      }

      toast.success(isEditing ? "Memory updated successfully." : "Memory preserved successfully.");
      reset();
      onClose();
      if (onSuccess) onSuccess();
      router.refresh();
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] max-h-[95vh] bg-card text-foreground border border-border/40 shadow-xl rounded-[2.5rem] p-0 overflow-hidden gap-0 flex flex-col">
        <div className="p-8 pb-4 flex-shrink-0">
          <h2 className="text-2xl font-bold font-serif tracking-tight">
            {initialData ? "Edit Memory" : "Write a Memory"}
          </h2>
        </div>

        <div className="flex-1 overflow-y-auto px-8 pb-4 custom-scrollbar">
          <form id="post-form" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                id="title"
                placeholder="Title"
                className="w-full bg-transparent text-2xl font-bold font-serif placeholder:text-muted-foreground/50 border-none outline-none focus:ring-0 px-0"
                {...register("title")}
              />
              {errors.title && <p className="text-xs text-destructive mt-1">{errors.title.message}</p>}
            </div>

            <div>
              <TextareaAutosize
                id="content"
                placeholder="What's on your mind?"
                minRows={4}
                className="w-full bg-transparent text-[15px] resize-none placeholder:text-muted-foreground/50 border-none outline-none focus:ring-0 px-0 leading-relaxed"
                {...register("content")}
              />
              {errors.content && <p className="text-xs text-destructive mt-1">{errors.content.message}</p>}
            </div>

            {imagePreview && (
              <div className="relative w-full max-w-[320px] rounded-2xl overflow-hidden border border-border/40 group mb-4">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-auto max-h-[300px] object-contain bg-muted/20"
                />

                <button
                  type="button"
                  onClick={() => {
                    setImagePreview(null);
                    setValue("image", "");
                    if (imageInputRef.current) imageInputRef.current.value = "";
                  }}
                  className="absolute top-2 right-2 bg-black/50 text-white p-1.5 rounded-full hover:bg-black transition-colors opacity-0 group-hover:opacity-100"
                >
                  <Lock className="w-4 h-4 rotate-45" />
                </button>
              </div>
            )}

            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={imageInputRef}
              onChange={handleImageChange}
            />

            <div className="space-y-3">
              <div className="flex items-center gap-2 border border-border/40 rounded-full px-4 py-2 max-w-sm">
                <Hash className="w-4 h-4 text-muted-foreground" />
                <input
                  placeholder="Add tags (comma separated)..."
                  className="bg-transparent border-none outline-none text-sm w-full focus:ring-0 placeholder:text-muted-foreground/60"
                  {...register("tags")}
                />
              </div>

              {categories.length > 0 && (
                <div className="flex flex-wrap gap-2 items-center">
                  {(showAllTags ? categories : categories.slice(0, 5)).map(cat => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => toggleCategory(cat.id)}
                      className={cn(
                        "px-3 py-1 rounded-full text-xs font-medium border transition-all",
                        selectedCategoryIds.includes(cat.id)
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-secondary text-muted-foreground border-border/40 hover:border-border"
                      )}
                    >
                      {cat.name}
                    </button>
                  ))}
                  {categories.length > 5 && (
                    <button
                      type="button"
                      onClick={() => setShowAllTags(!showAllTags)}
                      className="text-xs font-bold text-primary hover:underline px-2 py-1"
                    >
                      {showAllTags ? "Show less" : `+${categories.length - 5} more`}
                    </button>
                  )}
                </div>
              )}
            </div>
          </form>
        </div>

        <div className="bg-secondary/50 px-6 py-5 sm:px-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between border-t border-border/40 flex-shrink-0 gap-4">
          <div className="flex items-center justify-between sm:justify-start gap-4 text-muted-foreground">
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                type="button"
                onClick={() => imageInputRef.current?.click()}
                className="hover:text-foreground transition-colors p-2 rounded-full hover:bg-muted"
              >
                <ImageIcon className="w-5 h-5" />
              </button>
              <button type="button" className="hover:text-foreground transition-colors p-2 rounded-full hover:bg-muted">
                <Smile className="w-5 h-5" />
              </button>
              <button type="button" className="hover:text-foreground transition-colors p-2 rounded-full hover:bg-muted">
                <MapPin className="w-5 h-5" />
              </button>
            </div>
            
            <div className="h-6 w-px bg-border/60 mx-1 hidden sm:block" />
            
            <button
              type="button"
              onClick={() => {
                const newValue = !isPublic;
                setIsPublic(newValue);
                setValue("is_public", newValue);
              }}
              className={`flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-colors px-3 py-1.5 rounded-full ${isPublic ? 'text-primary bg-primary/20' : 'text-muted-foreground bg-muted'}`}
            >
              {isPublic ? <Globe className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
              {isPublic ? 'Public' : 'Private'}
            </button>
          </div>

          <div className="flex items-center justify-end gap-3 border-t sm:border-none border-border/20 pt-4 sm:pt-0">
            <Button type="button" variant="ghost" onClick={onClose} disabled={isLoading} className="font-medium hover:bg-transparent hover:underline text-muted-foreground text-sm">
              Cancel
            </Button>
            <Button
              type="submit"
              form="post-form"
              className="rounded-full px-8 bg-[#222] hover:bg-black text-white font-medium shadow-xl text-sm py-5"
              disabled={isLoading}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {initialData ? "Save Changes" : "Share Memory"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
