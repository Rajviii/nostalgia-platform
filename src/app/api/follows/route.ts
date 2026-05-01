import { prisma } from "@/lib/prisma";

// export async function GET() {
//     const follows = await prisma.follows.findMany();

//     return Response.json(follows);
// }


export async function GET() {
    const follows = await prisma.follows.findMany({
        include: {
            users_follows_follower_idTousers: true,
            users_follows_following_idTousers: true,
        },
    });

    return Response.json(follows);
}