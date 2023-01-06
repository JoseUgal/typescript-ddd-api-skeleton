import { Router, Request, Response } from 'express';
import { StatusGetController } from '../../Controller/Status/StatusGetController';

import container from '../dependency-injection';

export const register = (router: Router) => {
  const statusGetController: StatusGetController = container.get('Apps.Mooc.Controller.Status.StatusGetController');

  router.get('/status', async (req: Request, res: Response) => statusGetController.run(req, res));
};
