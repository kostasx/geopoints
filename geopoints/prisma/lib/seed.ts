// lib/prisma.ts
import { PrismaClient, Prisma } from '@prisma/client';
import { getMaxListeners } from 'process';
import { users, points, tags, lists } from './data';

const prisma = new PrismaClient();

(async () => {
  try {
    const user: Prisma.UserCreateInput = {
      email: 'test1@test.com',
      user_name: 'test1',
    };
    await prisma.list.deleteMany();
    console.log('Deleted records in lists table');

    await prisma.user.deleteMany();
    console.log('Deleted records in users table');

    await prisma.point.deleteMany();
    console.log('Deleted records in points table');

    await prisma.tag.deleteMany();
    console.log('Deleted records in tags table');

    // const userOne = await prisma.user.create({
    //   data: {
    //     email: 'userOne@test.com',
    //     user_name: 'userOne',
    //     own_lists: {
    //       create: {
    //         title: 'hunting spots bruv',
    //         tags: {
    //           create: {
    //             name: 'hunt',
    //           },
    //         },
    //         points: {
    //           create: {
    //             title: 'hunting spot 1',
    //             tags: {
    //               create: {
    //                 name: 'hunt',
    //               },
    //             },
    //           },
    //         },
    //       },
    //     },
    //   },
    // });
    console.log('Added user data');

    // await prisma.point.createMany({
    //   data: points,
    // });
    // console.log('Added point data');

    // await prisma.tag.createMany({
    //   data: tags,
    // });
    // console.log('Added tag data');

    // await prisma.list.createMany({
    //   data: lists,
    // });
    // console.log('Added list data');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();

export default prisma;
