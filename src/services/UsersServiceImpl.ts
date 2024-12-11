import {ServiceResponse, UsersService} from "../generated/services";
import {UserDto} from "../generated/dto";
import { Request } from 'express';

export class UsersServiceImpl implements UsersService {
  createUser(request: Request, userDto: UserDto): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  disableUser(request: Request, userId: bigint): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  editUser(request: Request, userId: bigint, userDto: UserDto): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  getUserById(request: Request, userId: bigint): Promise<ServiceResponse<UserDto>> {
    return Promise.resolve(undefined);
  }

  listUsers(request: Request): Promise<ServiceResponse<UserDto[]>> {
    return Promise.resolve(undefined);
  }

}