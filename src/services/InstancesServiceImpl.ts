import {InstancesService, ServiceResponse} from "../generated/services";
import {InstanceDataDto, InstanceDto} from "../generated/dto";
import { Request } from 'express';

export class InstancesServiceImpl implements InstancesService {
  createInstance(request: Request, instanceDto: InstanceDto): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  createInstanceData(request: Request, instanceId: number, instanceDataDto: InstanceDataDto): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  deleteInstance(request: Request, instanceId: number): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  deleteInstanceData(request: Request, instanceId: number): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  editInstance(request: Request, instanceId: number): Promise<ServiceResponse<InstanceDto>> {
    return Promise.resolve(undefined);
  }

  getInstanceById(request: Request, instanceId: number): Promise<ServiceResponse<InstanceDataDto>> {
    return Promise.resolve(undefined);
  }

  getInstanceData(request: Request, instanceId: number): Promise<ServiceResponse<InstanceDataDto>> {
    return Promise.resolve(undefined);
  }

}