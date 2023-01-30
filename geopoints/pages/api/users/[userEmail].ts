import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getUserData = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { userEmail } = req.query;
    if (userEmail && typeof userEmail === 'string') {
      const userData = await prisma.user.findUnique({
        where: { email: userEmail },
        include: {
          own_lists: true,
          liked_lists: true,
          liked_points: true,
        },
      });
      res.status(200).json(userData);
    } else {
      throw new Error('Incorrect email');
    }
  } catch (error) {
    console.error({ error });
    res.status(500).json({ error });
  }
};

export default getUserData;
