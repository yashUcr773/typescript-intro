import { Router, type Request, type Response } from 'express';

const employeesRouter = Router();

employeesRouter.get('/', (req: Request, res: Response) => {
  res.send('Employees router');
});

export default employeesRouter;
