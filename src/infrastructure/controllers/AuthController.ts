import { Request, Response } from 'express';
import { AuthenticateUser } from '../../application/use-cases/AuthenticateUser';
import { ExternalApiUserRepository } from '../repositories/ExternalApiUserRepository';

export class AuthController {
  private authenticateUser: AuthenticateUser;

  constructor() {
    const userRepository = new ExternalApiUserRepository();
    this.authenticateUser = new AuthenticateUser(userRepository);
  }

  authenticate = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
      const token = await this.authenticateUser.execute(email, password);
      res.json({ token });
    } catch (error) {
      res.status(401).json({ message: 'Authentication failed', error });
    }
  };
}
