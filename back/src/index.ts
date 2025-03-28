import App from './app';
import logger from './middlewares/logger';
import cors from 'cors';
import { UrlRoute } from './routes/url.route';

const app = new App({
    port: 8000,
    middlewares: [logger(), cors()],
    controllers: [new UrlRoute()],
});

app.listen();
