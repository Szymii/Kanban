// npx prisma db seed
import { PrismaClient, Type } from "@prisma/client";
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
            statuses: {
              createMany: {
                data: [
                  {
                    name: "to do",
                  },
                  {
                    name: "in progress",
                  },
                  {
                    name: "done",
                  },
                ],
              },
            },
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
          statuses: {
            createMany: {
              data: [
                {
                  id: "1231",
                  name: "to do",
                },
                {
                  id: "1232",
                  name: "in progress",
                },
                {
                  id: "1233",
                  name: "for tests",
                },
                {
                  id: "1234",
                  name: "testing",
                },
                {
                  id: "1235",
                  name: "done",
                },
              ],
            },
          },
        },
        connect: {
          slug: "TST",
        },
      },
    },
  });

  await prisma.task.create({
    data: {
      board: {
        connect: {
          slug: "ADM",
        },
      },
      status: {
        connect: {
          id: "1231",
        },
      },
      type: Type.TASK,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  });

  await prisma.task.create({
    data: {
      board: {
        connect: {
          slug: "ADM",
        },
      },
      status: {
        connect: {
          id: "1232",
        },
      },
      member: {
        connect: {
          email: "admin@example.com",
        },
      },
      type: Type.STORY,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  });

  await prisma.task.create({
    data: {
      board: {
        connect: {
          slug: "ADM",
        },
      },
      type: Type.BUG,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
