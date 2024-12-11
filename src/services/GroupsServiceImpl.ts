import {GroupsService, ServiceResponse} from "../generated/services";
import {GroupDto, IdArrayInputDto} from "../generated/dto";
import { Request } from 'express';

export class GroupsServiceImpl implements GroupsService {
  addUsersToGroup(request: Request, groupId: bigint, idArrayInputDto: IdArrayInputDto): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  createGroup(request: Request, groupDto: GroupDto): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  deleteGroupById(request: Request, groupId: bigint): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  deleteUsersFromGroup(request: Request, groupId: bigint[], idArrayInputDto: IdArrayInputDto): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  editGroupById(request: Request, groupId: bigint, groupDto: GroupDto): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  getGroupById(request: Request, groupId: bigint): Promise<ServiceResponse<GroupDto>> {
    return Promise.resolve(undefined);
  }

  listGroups(request: Request): Promise<ServiceResponse<GroupDto[]>> {
    return Promise.resolve(undefined);
  }

}