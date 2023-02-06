import * as express from 'express';
import * as cors from 'cors';
import { Request, Response } from 'express-serve-static-core';
import { Tasks } from './entities/Tasks';
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
app.use(cors());

app.get('/tasks', async(req: Request, res: Response) => {
    const response = await bd.getRepository(Tasks).find();
    res.send(response);
});

app.get('/tasks/:id', async(req: Request, res: Response) => {
    const response = await bd.getRepository(Tasks).findOneBy({
        Id: req.params.id,
    });
    res.send(response);
});

app.post('/tasks', async(req: Request, res: Response) => {
    const user = await bd.getRepository(Tasks).create(req.body);
    const results = await bd.getRepository(Tasks).save(user);
    res.send(results);
});

app.put('/tasks/:id', async(req: Request, res: Response) => {
   const done = await bd.getRepository(Tasks).findOneBy({
    Id: req.params.id
   });
   bd.getRepository(Tasks).merge(done, req.body);
   const response = await bd.getRepository(Tasks).save(done);
   res.send(response);
});

app.put('/tasks/:id', async(req: Request, res: Response) => {
    const response = await bd.getRepository(Tasks).findOneBy({
        Id: req.params.id
    });
    bd.getRepository(Tasks).merge(response, req.body);
    const results = await bd.getRepository(Tasks).save(response);
    res.send(results);
});

app.delete('/tasks/:id', async(req: Request, res: Response) => {
    const response = await bd.getRepository(Tasks).delete(req.params.id);
    res.send(response);
});

const port: number = 3000;
app.listen(port, () => { 
    console.log(`Servidor rodando na port ${port}`);
});