import { UserRepository } from '../../domain/repositories/UserRepository';

export class AuthenticateUser {
  constructor(private userRepository: UserRepository) {}

  async execute(email: string, password: string): Promise<string> {
    return this.userRepository.authenticate(email, password);
  }
}
