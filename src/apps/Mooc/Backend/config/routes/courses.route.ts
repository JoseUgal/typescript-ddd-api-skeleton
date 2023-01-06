import { Router, Request, Response } from 'express';
import { body } from 'express-validator';
import { CoursePutController } from '../../Controller/Courses/CoursePutController';
import container from '../dependency-injection';
import { validateReqSchema } from './';

export const register = (router: Router) => {
  const reqSchema = [
    body('id').exists().isString(),
    body('name').exists().isString(),
    body('duration').exists().isString(),
  ];
  const coursePutController: CoursePutController = container.get('Apps.Mooc.Controller.Courses.CoursePutController');
  router.put('/courses/:id', reqSchema, validateReqSchema, (req: Request, res: Response) =>
    coursePutController.run(req, res),
  );
};
