// lib/prisma.ts
// @ts-nocheck
import { PrismaClient } from '@prisma/client';
import { users, points, tags, lists } from './data';

const prisma = new PrismaClient();

(async () => {
  try {
    await prisma.list.deleteMany();
    console.log('Deleted records in lists table');

    await prisma.user.deleteMany();
    console.log('Deleted records in users table');

    await prisma.point.deleteMany();
    console.log('Deleted records in points table');

    await prisma.tag.deleteMany();
    console.log('Deleted records in tags table');

    //------

    // await prisma.$queryRaw`ALTER TABLE User AUTO_INCREMENT = 1`;
    // console.log('reset User auto increment to 1');

    // await prisma.$queryRaw`ALTER TABLE Point AUTO_INCREMENT = 1`;
    // console.log('reset Points auto increment to 1');

    // await prisma.$queryRaw`ALTER TABLE Tag AUTO_INCREMENT = 1`;
    // console.log('reset Tags auto increment to 1');

    // await prisma.$queryRaw`ALTER TABLE List AUTO_INCREMENT = 1`;
    // console.log('reset List auto increment to 1');

    //------

    await prisma.user.createMany({
      data: users,
    });
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
