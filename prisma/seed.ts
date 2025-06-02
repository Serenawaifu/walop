import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.anime.create({
    data: {
      title: "Attack on Titan",
      description: "Humans vs Titans.",
      posterUrl: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
      genres: ["Action", "Drama"],
      tags: ["Shounen", "Dark"],
      type: "anime",
      episodes: {
        create: [
          {
            title: "To You, in 2000 Years",
            videoUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            number: 1,
          },
        ],
      },
    },
  });
}

main().finally(() => prisma.$disconnect());
