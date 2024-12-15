import { ServiceResponse, SessionService } from "../generated/services";
import { SessionDto } from "../generated/dto";
import { Request } from 'express';

export class SessionServiceImpl implements SessionService {
  getSession(request: Request): Promise<ServiceResponse<SessionDto>> {
    return Promise.resolve(undefined);
  }

  postSession(request: Request, sessionDto: SessionDto): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  deleteSession(request: Request): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }
}