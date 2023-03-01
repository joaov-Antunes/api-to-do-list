import * as express from 'express';
import { Request, Response, NextFunction } from 'express-serve-static-core';
import { Tarefas, database, Urgencia, Concluida, Usuario } from './index';
import 'dotenv/config';
import * as jwt from 'jsonwebtoken';
import * as cors from 'cors';

database
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

const verifyJwt = ((req: Request, res: Response, next: NextFunction) => {
    const token: string  = req.headers['x-access-token'] || req.body.token;
    if(!token) return res.status(410).json({ auth: false, message: 'Nenhum token existente' });

    jwt.verify(token, process.env.SECRET, (err: Error, decoded: DecodeSuccessCallback) => {
        if(err) {
            return res.status(500).json({ auth: false, message: 'Failed to authenticate the token' })
        } else {
            console.log(token);
            next();
        }
    });
});

app.get('/tasks', verifyJwt, async(req: Request, res: Response) => {
    const response = await database.getRepository(Tarefas).find();
    res.send(response);
});

app.get('/numberoftasks', async(req: Request, res: Response) => {
    const response = await database.query("SELECT u.Nivel, COUNT(t.Nome) AS qtd FROM Tarefas t INNER JOIN urgencia u ON u.Nivel = t.Urgencia GROUP BY u.Nivel");
    res.send(response);
});

app.get('/tasks/:id', async(req: Request, res: Response) => {
    const response = await database.getRepository(Tarefas).findOneBy({
        Id: req.params.id,
    });
    res.send(response);
});

app.get('/tasks/search/:name', async(req: Request, res: Response) => {
    const response = await database.getRepository(Tarefas).findOneBy({
        Nome: req.params.name,
    });
    res.send(response);
    console.log("Fui chamada")
});

app.get('/urgency', async(req: Request, res: Response) => {
    const response = await database.getRepository(Urgencia).find();
    res.send(response);
});

app.get('/finish', async(req: Request, res: Response) => {
    const response = await database.getRepository(Concluida).find();
    res.send(response);
});

app.post('/tasks', async(req: Request, res: Response) => {
    const task = database.getRepository(Tarefas).create(req.body);
    const results = await database.getRepository(Tarefas).save(task);
    res.send(results);
});

app.post('/register', async(req: Request, res: Response) => {
    const user = await database.getRepository(Usuario).create(req.body);
    const response = await database.getRepository(Usuario).save(user);
    res.send(response);
});

app.post('/login', async(req: Request, res: Response) => {
    const response = await database.getRepository(Usuario).findOneBy({
        NomeUsuario: req.body.Nome,
        Senha: req.body.Senha
    });
    if (response != null) {
        const token = jwt.sign({ Id: response.Id }, process.env.SECRET, {
            expiresIn: 3000
        });
        return res.json({ auth: true, token: token, response: response});
    }

    return res.status(400).json({message: 'Login Invalido'});
});

app.put('/tasks/:id', async(req: Request, res: Response) => {
    const response = await database.getRepository(Tarefas).findOneBy({
        Id: req.params.id
    });
    database.getRepository(Tarefas).merge(response, req.body);
    const results = await database.getRepository(Tarefas).save(response);
    res.send(results);
});

app.delete('/tasks/:id', async(req: Request, res: Response) => {
    const response = await database.getRepository(Tarefas).delete(req.params.id);
    res.send(response);
});

app.post('/tasks/search', async(req: Request, res: Response) => {
    const response = await database.getRepository(Tarefas).findOneBy({
        Nome: req.body.Nome
    });
    res.send(response);
});

const port = process.env.PORT;
app.listen(port, () => { 
    console.log(`Servidor rodando na porta ${port}`);
});