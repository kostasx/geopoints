// lib/prisma.ts
import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const NUMBER_OF_FAKE_USERS = 7;

(async () => {
  try {
    await prisma.user.deleteMany();
    console.log('Deleted records in users table');

    await prisma.list.deleteMany();
    console.log('Deleted records in lists table');

    await prisma.point.deleteMany();
    console.log('Deleted records in points table');

    await prisma.tag.deleteMany();
    console.log('Deleted records in tags table');

    for (let i = 0; i < NUMBER_OF_FAKE_USERS; i++) {
      await prisma.user.create({
        data: {
          email: faker.internet.email(),
          userName: faker.internet.userName(),
          name: faker.name.fullName(),
          bio: faker.lorem.sentence(),
          imagePath: faker.image.avatar(),
          ownLists: {
            create: {
              title: faker.company.catchPhrase(),
              description: faker.lorem.sentence(),
              imagePath: faker.image.nature(),
              tags: {
                create: {
                  name: faker.random.word(),
                },
              },
              points: {
                create: {
                  title: faker.company.bsNoun(),
                  lng: Number(faker.address.longitude()),
                  lat: Number(faker.address.latitude()),
                  imagePaths: faker.image.nature(),
                },
              },
            },
          },
        },
      });
    }
    //create user with your email. Set .env to your email.
    await prisma.user.create({
      data: {
        email: process.env.MY_EMAIL!,
        userName: faker.internet.userName(),
        name: faker.name.fullName(),
        bio: faker.lorem.sentence(),
        imagePath: faker.image.avatar(),
        ownLists: {
          create: {
            title: faker.company.catchPhrase(),
            description: faker.lorem.sentence(),
            imagePath: faker.image.nature(),
            tags: {
              create: {
                name: faker.random.word(),
              },
            },
            points: {
              create: {
                title: faker.company.bsNoun(),
                lng: Number(faker.address.longitude()),
                lat: Number(faker.address.latitude()),
                imagePaths: faker.image.nature(),
              },
            },
          },
        },
      },
    });

    console.log('Added data ✨');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();

export default prisma;
