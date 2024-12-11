import {DataTypesService, ServiceResponse} from "../generated/services";
import {DataTypeDto} from "../generated/dto";
import { Request } from 'express';

export class DataTypesServiceImpl implements DataTypesService {
  createDataType(request: Request, dataTypeDto: DataTypeDto): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  disableDataType(request: Request, dataTypeId: number): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  editDataType(request: Request, dataTypeId: number): Promise<ServiceResponse<DataTypeDto>> {
    return Promise.resolve(undefined);
  }

  getDataTypeById(request: Request, dataTypeId: number): Promise<ServiceResponse<DataTypeDto>> {
    return Promise.resolve(undefined);
  }

}