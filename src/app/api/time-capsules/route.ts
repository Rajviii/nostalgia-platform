import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
        return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    try {
        const capsules = await prisma.time_capsules.findMany({
            where: {
                OR: [
                    { user_id: Number(userId) },
                    { is_public: true }
                ]
            },
            include: {
                users: {
                    select: {
                        id: true,
                        username: true
                    }
                }
            },
            orderBy: { unlock_at: "asc" }
        });

        // Filter content for locked capsules
        const now = new Date();
        const safeCapsules = capsules.map(capsule => {
            const isLocked = new Date(capsule.unlock_at) > now;
            if (isLocked && capsule.user_id !== Number(userId)) {
                // If it's someone else's public but locked capsule, hide content
                return {
                    ...capsule,
                    content: "Locked until " + capsule.unlock_at,
                    media_url: null,
                    title: capsule.title || "Locked Capsule",
                    is_locked: true
                };
            }
            return { ...capsule, is_locked: isLocked };
        });

        return NextResponse.json(safeCapsules);
    } catch (error: any) {
        console.error("Fetch capsules error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { userId, title, content, mediaUrl, unlockAt, isPublic, allowComments, mood } = body;

        if (!userId || !content || !unlockAt) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const capsule = await prisma.time_capsules.create({
            data: {
                user_id: Number(userId),
                title,
                content,
                media_url: mediaUrl,
                unlock_at: new Date(unlockAt),
                is_public: isPublic ?? false,
                allow_comments: allowComments ?? true,
                mood
            }
        });

        return NextResponse.json(capsule);
    } catch (error: any) {
        console.error("Create capsule error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
