import { Router } from 'express';

export const productRouter = Router();

const router = Router();

productRouter.use('/product', router);

router.get('/:processadores', (req, res) => {
  res.send('Ta carin mas ta bão kkk');
});
