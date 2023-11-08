import { Router } from 'express';

export const userRouter = Router();

const router = Router();

userRouter.use('/user', router);

router.get('/tokiro', (req, res) => {
  res.send('Você está na logica do user');
});
router.get('/:nome', (req, res) => {
  res.send('Você está na logica do nome');
});
