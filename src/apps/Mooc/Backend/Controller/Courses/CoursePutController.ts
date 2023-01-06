import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { CourseCreator } from '../../../../../Contexts/Mooc/Courses/Application/CourseCreator';
import { Controller } from '../Controller';

type CoursePutRequest = Request & {
  body: {
    id: string;
    name: string;
    duration: string;
  };
};

export class CoursePutController implements Controller {
  constructor(private courseCreator: CourseCreator) {}

  async run(req: CoursePutRequest, res: Response): Promise<void> {
    const { id, name, duration } = req.body;

    await this.courseCreator.run({
      id,
      name,
      duration,
    });

    res.sendStatus(httpStatus.CREATED).send();
  }
}
