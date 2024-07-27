export interface UserRepository {
    authenticate(email: string, password: string): Promise<string>;
    getSomeData(token: string): Promise<any>;
  }
  