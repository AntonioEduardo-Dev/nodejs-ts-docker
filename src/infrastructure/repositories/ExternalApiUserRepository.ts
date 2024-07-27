import axiosClient from '../axios/axiosClient';
import { UserRepository } from '../../domain/repositories/UserRepository';

export class ExternalApiUserRepository implements UserRepository {
  async authenticate(email: string, password: string): Promise<string> {
    const response = await axiosClient.post('/auth', { email, password });
    return response.data.token;
  }

  async getSomeData(token: string): Promise<any> {
    const response = await axiosClient.get('/some-endpoint', {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  }
}
