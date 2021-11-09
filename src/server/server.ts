import express from 'express';
import bodyParser from 'body-parser';
import dotEnv from 'dotenv';
import { GetUser, SaveUser, UpdateUser, DeleteUser } from '../controllers/user.controller';

dotEnv.config();
const PORT = 8080;

const app = express();
app.use(bodyParser.json());

app.get('/api', async(req, res)=>{
  await res.json('API Files clients');
});

app.get('/api/users/:id', GetUser);
app.post('/api/users', SaveUser);
app.patch('/api/users', UpdateUser);
app.delete('/api/users/:id', DeleteUser);

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});

export default app;
