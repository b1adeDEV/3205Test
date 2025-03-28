import { RequestHandler } from 'express';
import { UrlService } from '../services/url.service';

export class UrlController {
    private service: UrlService;

    constructor() {
        this.service = new UrlService();
    }

    getUrl:RequestHandler = async(req, res) => {
        const id = req.params.url;
        try {
            const url = await this.service.getUrl(id);
            res.status(301).redirect(url)
        } catch (error) {
            if (error instanceof Error) {
                res.status(404).json({ message: error.message, status: 404 });
            }
        }

    }
    getUrlInfo:RequestHandler = async(req, res) => {
        try {
            const id = req.params.url;
            const url = await this.service.getUrlInfo(id);
            res.send(url)
        } catch (error) {
            if (error instanceof Error) {
                res.status(404).json({ message: error.message, status: 404 });
            }
        }
    }

    createUrl: RequestHandler = async (req, res) => {
        try {
            const url = await this.service.createUrl(req.body);
            res.send(url);
        } catch (error) {
            if (error instanceof Error) {
                res.status(404).json({ message: error.message, status: 404 });
            }
        }
    };


    removeUrl: RequestHandler = async (req, res) => {
        try {
            const id = req.params.url;   
            const url = await this.service.removeUrl(id);
            res.send(url);
        } catch (error) {
            if (error instanceof Error) {
                res.status(404).json({ message: error.message, status: 404 });
            }
        }
    };
}
