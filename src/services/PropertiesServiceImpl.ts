import {PropertiesService, ServiceResponse} from "../generated/services";
import {IdArrayInputDto, PropertyDto} from "../generated/dto";
import { Request } from 'express';

export class PropertiesServiceImpl implements PropertiesService {
  addObjectToProperty(request: Request, propertyId: number, idArrayInputDto: IdArrayInputDto): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  createProperty(request: Request, propertyDto: PropertyDto): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  deletePropertiesFromObject(request: Request, propertyId: number, idArrayInputDto: IdArrayInputDto): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  deleteProperty(request: Request, propertyId: number): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  editProperty(request: Request, propertyId: number, propertyDto: PropertyDto): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  getPropertyById(request: Request, propertyId: number): Promise<ServiceResponse<PropertyDto>> {
    return Promise.resolve(undefined);
  }

  getPropertyByObjectId(request: Request, propertyId: number): Promise<ServiceResponse<PropertyDto>> {
    return Promise.resolve(undefined);
  }

}