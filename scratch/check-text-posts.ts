
import { PrismaClient } from "@/generated/prisma";
const prisma = new PrismaClient();

async function main() {
  const textPostsCount = await prisma.posts.count({
    where: {
      OR: [
        { image: null },
        { image: "" }
      ]
    }
  });
  console.log('Text posts count:', textPostsCount);
  const posts = await prisma.posts.findMany({
    where: {
      OR: [
        { image: null },
        { image: "" }
      ]
    },
    take: 3,
    include: {
      users: true,
      _count: {
        select: { likes: true, comments: true }
      }
    }
  });
  console.log('Sample text posts:', JSON.stringify(posts, null, 2));
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
