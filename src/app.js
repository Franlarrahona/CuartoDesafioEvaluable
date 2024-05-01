import express from  'express';
import handlebars from 'express-handlebars';
import initSocket from './sockets.js';
import config from './config.js';

import productsRouter from './routes/products.routes.js';
import CartsRouter from './routes/carts.routes.js';
import viewsRouter from './routes/views.routes.js';

const app = express();

const httpServer = app.listen(config.PORT, () => {
    console.log(`server activo en puerto: ${config.PORT}`);
});
const socketServer = initSocket(httpServer);
app.set('socketServer', socketServer);

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.engine('handlebars', handlebars.engine());
app.set('views', `src/views`);
app.set('view engine', 'handlebars');

app.use('/api/products', productsRouter);
app.use('/api/carts',CartsRouter);
app.use('/', viewsRouter);


