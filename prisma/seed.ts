// npx prisma db seed
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      id: "usertestertestid",
      email: "test@example.com",
      firstName: "Tester",
      lastName: "Tester",
      password: await bcrypt.hash("tester", 10),
      emailVerified: null,
      image: null,
      boards: {
        create: [
          {
            ownerId: "usertestertestid",
            slug: "TST",
          },
        ],
      },
    },
  });

  await prisma.user.create({
    data: {
      id: "useradmintestid",
      email: "admin@example.com",
      firstName: "Admin",
      lastName: "Admin",
      password: await bcrypt.hash("admin", 10),
      emailVerified: null,
      image: null,
      boards: {
        create: {
          ownerId: "useradmintestid",
          slug: "ADM",
        },
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
