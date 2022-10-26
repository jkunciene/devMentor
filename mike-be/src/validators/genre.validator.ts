import { query } from 'express-validator';


const genreRules = [
  
  query('genres').optional().matches(/^\d+((,\d+)+)*$/),
  ];

  export { genreRules }