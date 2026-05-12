import { prisma } from "@/lib/prisma";

export async function GET() {
    const posts = await prisma.posts.findMany({
        include: { users: true, },
        orderBy: { created_at: "desc", },
    });

    return Response.json(posts);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { title, content, user_id, image, tags, categoryIds } = body;

        if (!title || !content || !user_id) {
            return Response.json(
                { error: "Title, content and user_id are required", },
                { status: 400, }
            );
        }

        // Image Validation
        if (image) {
            // Check if it's a data URL
            if (!image.startsWith('data:image/')) {
                return Response.json({ error: "Invalid image format. Must be a data URL." }, { status: 400 });
            }

            // Check size (approximate for Base64)
            const sizeInBytes = (image.length * 3) / 4;
            const sizeInMB = sizeInBytes / (1024 * 1024);
            if (sizeInMB > 5) {
                return Response.json({ error: "Image too large. Maximum size is 5MB." }, { status: 400 });
            }
        }

        // Process Tags and Category IDs
        let allCategoryIds: number[] = categoryIds || [];

        if (tags && typeof tags === "string") {
            const tagNames = tags.split(",").map(t => t.trim().toLowerCase()).filter(t => t.length > 0);

            for (const name of tagNames) {
                const slug = name.replace(/\s+/g, '-').replace(/[^\w-]/g, '');
                const category = await prisma.categories.upsert({
                    where: { slug },
                    update: {},
                    create: { name, slug }
                });
                if (!allCategoryIds.includes(category.id)) {
                    allCategoryIds.push(category.id);
                }
            }
        }

        const newPost = await prisma.posts.create({
            data: {
                title,
                content,
                user_id,
                image,
                post_categories: {
                    create: allCategoryIds.map(id => ({
                        category_id: id
                    }))
                }
            },
            include: {
                post_categories: {
                    include: {
                        categories: true
                    }
                }
            }
        });

        return Response.json(newPost, { status: 201, });
    } catch (error: any) {
        console.error(error);
        return Response.json({ error: error.message || "Something went wrong" }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const body = await request.json();
        const { id, title, content, user_id, image, tags, categoryIds } = body;

        if (!id || !title || !content || !user_id) {
            return Response.json(
                { error: "Post ID, title, content, and user_id are required", },
                { status: 400, }
            );
        }

        // Image Validation
        if (image && image.startsWith('data:image/')) {
            const sizeInBytes = (image.length * 3) / 4;
            const sizeInMB = sizeInBytes / (1024 * 1024);
            if (sizeInMB > 5) {
                return Response.json({ error: "Image too large. Maximum size is 5MB." }, { status: 400 });
            }
        }

        const existingPost = await prisma.posts.findUnique({
            where: { id: Number(id) }
        });

        if (!existingPost) {
            return Response.json({ error: "Post not found" }, { status: 404 });
        }

        if (existingPost.user_id !== user_id) {
            return Response.json({ error: "Unauthorized" }, { status: 401 });
        }

        // Process Tags and Category IDs
        let allCategoryIds: number[] = categoryIds || [];

        if (tags && typeof tags === "string") {
            const tagNames = tags.split(",").map(t => t.trim().toLowerCase()).filter(t => t.length > 0);
            for (const name of tagNames) {
                const slug = name.replace(/\s+/g, '-').replace(/[^\w-]/g, '');
                const category = await prisma.categories.upsert({
                    where: { slug },
                    update: {},
                    create: { name, slug }
                });
                if (!allCategoryIds.includes(category.id)) {
                    allCategoryIds.push(category.id);
                }
            }
        }

        const updatedPost = await prisma.posts.update({
            where: { id: Number(id) },
            data: {
                title,
                content,
                image,
                post_categories: {
                    deleteMany: {}, // Clear existing relations
                    create: allCategoryIds.map(id => ({
                        category_id: id
                    }))
                }
            },
            include: {
                post_categories: {
                    include: {
                        categories: true
                    }
                }
            }
        });

        return Response.json(updatedPost, { status: 200, });
    } catch (error: any) {
        console.error(error);
        return Response.json({ error: error.message || "Something went wrong" }, { status: 500 });
    }
}