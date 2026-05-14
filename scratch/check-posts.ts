import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const postsCount = await prisma.posts.count();
  console.log('Posts count:', postsCount);
  const posts = await prisma.posts.findMany({
    take: 1,
    include: {
      users: true,
      _count: {
        select: { likes: true, comments: true }
      }
    }
  });
  console.log('Sample post:', JSON.stringify(posts, null, 2));
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
