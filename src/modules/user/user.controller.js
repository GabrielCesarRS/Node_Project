import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

export const userRouter = Router();

const router = Router();

userRouter.use('/user', router);

router.get('/tokiro', async (req, res) => {
  const prisma = new PrismaClient();
  const users = await prisma.user.findMany();
  console.log('users', users);
  res.send('Você está na logica do user');
});
router.get('/:nome', (req, res) => {
  res.send('Você está na logica do nome');
});
