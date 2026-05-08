import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const categories = await prisma.categories.findMany({
            orderBy: { name: "asc" }
        });
        return Response.json(categories);
    } catch (error) {
        console.error(error);
        return Response.json({ error: "Failed to fetch categories" }, { status: 500 });
    }
}
