import { RequestHandler } from 'express';

const logger = (): RequestHandler => (req, res, next) => {
  console.log(`Request logged: ${req.method}, ${req.url}`);
  next();
};

export default logger;
