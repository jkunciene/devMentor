import { query } from 'express-validator';

const titleRules = [
    query('title').optional().matches(/^[0-9a-zA-Z. -]+$/),
  ];

  export { titleRules }