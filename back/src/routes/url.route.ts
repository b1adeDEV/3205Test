import { Router } from 'express';
import { IRoute } from '../interfaces/IRoute.interface';
import { UrlController } from '../controllers/url.contoller';

export class UrlRoute implements IRoute {
  public path = '/';
  public router = Router();
  private controller: UrlController; 

  constructor() {
    this.controller = new UrlController();
    this.init();
  }
  
  private init() {
    this.router.get('/:url',this.controller.getUrl);
    this.router.get('/info/:url',this.controller.getUrlInfo);
    this.router.post("/shorten",this.controller.createUrl);
    this.router.delete("/delete/:url",this.controller.removeUrl);
  }
}
