import { Router, Request, Response, NextFunction } from 'express';
import { PipeService } from '../services/pipe-service';
import { CreatePipeRequest, UpdatePipeRequest } from '../models/requests';

const router = Router();

// GET /pipe
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const resources = PipeService.getAll();
    res.json(resources);
  } catch (error) {
    next(error);
  }
});

// GET /pipe/:id
router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const resource = PipeService.getById(req.params.id);

    if (!resource) {
      return res.status(404).json({ error: 'Resource not found' });
    }

    res.json(resource);
  } catch (error) {
    next(error);
  }
});

// POST /pipe
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newResource = PipeService.create(req.body as CreatePipeRequest);
    res.status(201).json(newResource);
  } catch (error) {
    next(error);
  }
});

// PUT /pipe/:id
router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedResource = PipeService.update(req.params.id, req.body as UpdatePipeRequest);

    if (!updatedResource) {
      return res.status(404).json({ error: 'Resource not found' });
    }

    res.json(updatedResource);
  } catch (error) {
    next(error);
  }
});

// DELETE /pipe/:id
router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const deleted = PipeService.delete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ error: 'Resource not found' });
    }

    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

export default router;
