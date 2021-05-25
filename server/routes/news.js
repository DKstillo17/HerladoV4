import express from 'express';

import { getNews, createNews } from '../controllers/news.js';

const router = express.Router();

router.get('/', getNews);
router.post('/create-news', createNews);

export default router;