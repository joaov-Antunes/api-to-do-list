import * as express from 'express';
import { Request, Response } from 'express-serve-static-core';
import { Usuario } from './entities/usuario';
import { bd } from './app-data-source';

bd
.initialize()
.then(() => {
    console.log('The database has been initialized');
})
.catch((err) => {
    console.log("The databse hasn't been initialized", err);
});

const app = express(); 
app.use(express.json()); 

app.get('/users', async(req: Request, res: Response) => {
    const response = await bd.getRepository(Usuario).find();
    res.send(response);
});

app.get('/users/:id', async(req: Request, res: Response) => {
    const response = await bd.getRepository(Usuario).findOneBy({
        Id: req.params.id,
    });
    res.send(response);
});

app.post('/users', async(req: Request, res: Response) => {
    const user = await bd.getRepository(Usuario).create(req.body);
    const results = await bd.getRepository(Usuario).save(user);
    res.send(results);
});

app.put('/users/:id', async(req: Request, res: Response) => {
    const response = await bd.getRepository(Usuario).findOneBy({
        Id: req.params.id
    });
    bd.getRepository(Usuario).merge(response, req.body);
    const results = await bd.getRepository(Usuario).save(response);
    res.send(results);
});

app.delete('/users/:id', async(req: Request, res: Response) => {
    const response = await bd.getRepository(Usuario).delete(req.params.id);
    res.send(response);
});

const port: number = 3000;
app.listen(port, () => { 
    console.log(`Servidor rodando na port ${port}`);
});