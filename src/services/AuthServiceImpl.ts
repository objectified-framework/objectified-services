import {AuthService, ServiceResponse} from "../generated/services";
import {LoginDto} from "../generated/dto";
import { Request } from 'express';

export class AuthServiceImpl implements AuthService {
  editLogin(request: Request, loginDto: LoginDto): Promise<ServiceResponse<string>> {
    return Promise.resolve(undefined);
  }

  login(request: Request, loginDto: LoginDto): Promise<ServiceResponse<string>> {
    return Promise.resolve(undefined);
  }

  logout(request: Request): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  refreshLogin(request: Request): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

}