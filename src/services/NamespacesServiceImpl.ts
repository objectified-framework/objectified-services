import {NamespacesService, ServiceResponse} from "../generated/services";
import { Request } from 'express';
import {ClassDto, DataTypeDto, FieldDto, IdArrayInputDto, NamespaceDto, PropertyDto} from "../generated/dto";

export class NamespacesServiceImpl implements NamespacesService {
  addClassesToNamespace(request: Request, namespaceId: number, idArrayInputDto: IdArrayInputDto): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  addDataTypesToNamespace(request: Request, namespaceId: number, idArrayInputDto: IdArrayInputDto): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  addFieldsToNamespace(request: Request, namespaceId: number, idArrayInputDto: IdArrayInputDto): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  addGroupsToNamespace(request: Request, namespaceId: bigint, idArrayInputDto: IdArrayInputDto): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  addPropertiesToNamespace(request: Request, namespaceId: number, idArrayInputDto: IdArrayInputDto): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  addUsersToNamespace(request: Request, namespaceId: bigint, idArrayInputDto: IdArrayInputDto): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  createNamespace(request: Request, namespaceDto: NamespaceDto): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  deleteClassesFromNamespace(request: Request, namespaceId: bigint, idArrayInputDto: IdArrayInputDto): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  deleteDataTypesFromNamespace(request: Request, namespaceId: bigint, idArrayInputDto: IdArrayInputDto): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  deleteFieldsFromNamespace(request: Request, namespaceId: bigint, idArrayInputDto: IdArrayInputDto): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  deletePropertiesFromNamespace(request: Request, namespaceId: bigint, idArrayInputDto: IdArrayInputDto): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  deleteUsersFromNamespace(request: Request, namespaceId: bigint, idArrayInputDto: IdArrayInputDto): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  disableNamespace(request: Request, namespaceId: number): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  editNamespace(request: Request, namespaceId: number, namespaceDto: NamespaceDto): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  getNamespaceById(request: Request, namespaceId: number): Promise<ServiceResponse<NamespaceDto>> {
    return Promise.resolve(undefined);
  }

  listClassesByNamespace(request: Request, namespaceId: number): Promise<ServiceResponse<ClassDto[]>> {
    return Promise.resolve(undefined);
  }

  listDataTypesForNamespace(request: Request, namespaceId: number): Promise<ServiceResponse<DataTypeDto[]>> {
    return Promise.resolve(undefined);
  }

  listFields(request: Request, namespaceId: number): Promise<ServiceResponse<FieldDto[]>> {
    return Promise.resolve(undefined);
  }

  listNamespaces(request: Request): Promise<ServiceResponse<NamespaceDto[]>> {
    return Promise.resolve(undefined);
  }

  listPropertiesByNamespace(request: Request, namespaceId: number): Promise<ServiceResponse<PropertyDto[]>> {
    return Promise.resolve(undefined);
  }

  removeGroupsFromNamespace(request: Request, namespaceId: bigint, idArrayInputDto: IdArrayInputDto): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

}