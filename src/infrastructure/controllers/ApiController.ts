import { Router, Request, Response } from 'express';
import { ExternalApiUserRepository } from '../repositories/ExternalApiUserRepository';

export class ApiController {
  public router: Router;
  private userRepository: ExternalApiUserRepository;

  constructor() {
    this.router = Router();
    this.userRepository = new ExternalApiUserRepository();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/some-endpoint', this.getSomeData);
  }

  getSomeData = async (req: Request, res: Response) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Token missing' });
    }

    try {
      const data = await this.userRepository.getSomeData(token);
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch data', error });
    }
  };
}
