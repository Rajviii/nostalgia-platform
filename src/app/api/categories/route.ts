import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const categories = await prisma.categories.findMany({
            orderBy: { name: "asc" }
        });
        return Response.json(categories);
    } catch (error: any) {
        console.error(error);
        return Response.json({ error: error.message || "Failed to fetch categories" }, { status: 500 });
    }
}
