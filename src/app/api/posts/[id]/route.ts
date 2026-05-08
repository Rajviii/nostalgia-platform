import { prisma } from "@/lib/prisma";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        const post = await prisma.posts.findUnique({
            where: { id: Number(id) },
            include: {
                post_categories: {
                    include: {
                        categories: true
                    }
                }
            }
        });

        if (!post) {
            return Response.json(
                { error: "Post not found" },
                { status: 404 }
            );
        }

        return Response.json(post);

    } catch (error) {
        console.error(error);

        return Response.json(
            { error: "Failed to fetch post" },
            { status: 500 }
        );
    }
}