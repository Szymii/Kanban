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
                    name: "To Do",
                  },
                  {
                    name: "In Progress",
                  },
                  {
                    name: "Done",
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
                  name: "To Do",
                },
                {
                  id: "1232",
                  name: "In Progress",
                },
                {
                  id: "1233",
                  name: "For Tests",
                },
                {
                  id: "1234",
                  name: "Testing",
                },
                {
                  id: "1235",
                  name: "Done",
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
      member: {
        connect: {
          email: "admin@example.com",
        },
      },
      type: Type.TASK,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
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
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
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
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
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
