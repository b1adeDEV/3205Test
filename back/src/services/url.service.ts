import { ICreateUrl } from "../interfaces/url.interface"
import { urlRepo } from "../repositories/url.repository"


export class UrlService {

    async getUrl(id:string) {
        return await urlRepo.getUrl(id)
    }
    async getUrlInfo(id:string) {
        return await urlRepo.getUrlInfo(id)
    }

    async createUrl(data:ICreateUrl) {
        return await urlRepo.createUrl(data)
    }
    async removeUrl(shortUrl:string) {
        return await urlRepo.removeUrl(shortUrl)
    }
}
