import { AuthService, ServiceResponse } from '../generated/services';
import { LoginDto } from '../generated/dto';
import { Request } from 'express';

export class AuthServiceImpl implements AuthService {
  login(request: Request, loginDto: LoginDto): Promise<ServiceResponse<string>> {
    return Promise.resolve(undefined);
  }
}