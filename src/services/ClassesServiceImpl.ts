import {ClassesService, ServiceResponse} from "../generated/services";
import {ClassDto, IdArrayInputDto, PropertyDto} from "../generated/dto";
import { Request } from 'express';

export class ClassesServiceImpl implements ClassesService {
  addPropertyToClass(request: Request, classId: number, idArrayInputDto: IdArrayInputDto): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  createClass(request: Request, classDto: ClassDto): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  deletePropertiesFromClass(request: Request, classId: bigint, idArrayInputDto: IdArrayInputDto): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  disableClass(request: Request, classId: number): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  editClass(request: Request, classId: number): Promise<ServiceResponse<ClassDto>> {
    return Promise.resolve(undefined);
  }

  getClassById(request: Request, classId: number): Promise<ServiceResponse<ClassDto>> {
    return Promise.resolve(undefined);
  }

  getClasses(request: Request): Promise<ServiceResponse<ClassDto>> {
    return Promise.resolve(undefined);
  }

  listPropertiesByClass(request: Request, classId: number): Promise<ServiceResponse<PropertyDto[]>> {
    return Promise.resolve(undefined);
  }

}