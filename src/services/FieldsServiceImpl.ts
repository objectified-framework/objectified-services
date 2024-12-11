import {FieldsService, ServiceResponse} from "../generated/services";
import {FieldDto} from "../generated/dto";
import { Request } from 'express';

export class FieldsServiceImpl implements FieldsService {
  createField(request: Request, fieldDto: FieldDto): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  disableField(request: Request, fieldId: number): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  editField(request: Request, fieldId: number): Promise<ServiceResponse<FieldDto>> {
    return Promise.resolve(undefined);
  }

  getFieldById(request: Request, fieldId: number): Promise<ServiceResponse<FieldDto>> {
    return Promise.resolve(undefined);
  }

}