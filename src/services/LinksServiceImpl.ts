import {LinksService, ServiceResponse} from "../generated/services";
import {LinkDefDto, LinkDto} from "../generated/dto";
import { Request } from 'express';

export class LinksServiceImpl implements LinksService {
  createLink(request: Request, linkDto: LinkDto): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  createLinkDefinition(request: Request, linkDefDto: LinkDefDto): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  deleteLinkDefinition(request: Request, linkDefinitionId: number): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  disableLink(request: Request, linkId: number): Promise<ServiceResponse<null>> {
    return Promise.resolve(undefined);
  }

  editLink(request: Request, linkId: number): Promise<ServiceResponse<LinkDto>> {
    return Promise.resolve(undefined);
  }

  editLinkDefinition(request: Request, linkDefinitionId: number): Promise<ServiceResponse<LinkDefDto>> {
    return Promise.resolve(undefined);
  }

  getLinkById(request: Request, linkId: number): Promise<ServiceResponse<LinkDto>> {
    return Promise.resolve(undefined);
  }

  getLinkDefinitionById(request: Request, linkDefinitionId: number): Promise<ServiceResponse<LinkDefDto>> {
    return Promise.resolve(undefined);
  }

}