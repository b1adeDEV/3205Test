import { Repository } from 'typeorm';
import { appDataSource } from '../config/dataSource/dataSource';
import { ICreateUrl } from '../interfaces/url.interface';
import { Url } from '../entities/url';

class UrlRepo {
    private repo: Repository<Url>

    constructor() {
        this.repo = appDataSource.getRepository(Url);
    }

    async getUrl(shortUrl: string) {
        const fullUrl = await this.repo.findOne({
            where: { shortUrl }
        });
    
        if (!fullUrl) {
            throw new Error('URL не найден');
        }    
        fullUrl.clickCount += 1;
        await this.repo.save(fullUrl);
    
        return fullUrl.originalUrl;
    }

    async getUrlInfo(shortUrl: string) {
        const url = await this.repo.findOne({
            where: { shortUrl }
        });
    
        if (!url) {
            throw new Error('URL не найден');
        }
    
        const { originalUrl, createdAt, clickCount } = url;
        return { originalUrl, createdAt, clickCount };
    }

    async createUrl(data: ICreateUrl) {
        const { originalUrl, alias, expiresAt } = data;
    
        const existingUrl = await this.repo.findOne({
            where: [{ alias }, { shortUrl: alias }],
        });
        if(alias.length>20) {
            throw new Error('Alias превышает лимит в 20 символов');
        }
        if (existingUrl) {
            throw new Error('Alias или Short URL уже заняты.');
        }
        const shortUrl = alias || this.generateShortUrl();
    
        const newUrl = this.repo.create({
            originalUrl,
            alias: alias || null,
            shortUrl,
            expiresAt: expiresAt ? new Date(expiresAt) : null,
            clickCount: 0,
        } as Partial<Url>);
        await this.repo.save(newUrl)
        return {shortUrl};
    }

    private generateShortUrl(): string {
        return Math.random().toString(36).substr(2, 6);
    }

    async removeUrl(shortUrl: string) {
        const url = await this.repo.findOne({ where: { shortUrl } });
    
        if (!url) {
            throw new Error('URL не найден');
        }
        await this.repo.remove(url);
        return { message: 'Ссылка успешно удалена' };
    }
}

export const urlRepo = new UrlRepo();
