import express from 'express';
import { AuthController } from '../controllers/AuthController';
import { ApiController } from '../controllers/ApiController';

const app = express();
const port = 3000;

app.use(express.json());

const authController = new AuthController();
const apiController = new ApiController();

app.post('/login', authController.authenticate);
app.use('/api', apiController.router);

app.get('/', (req, res) => {
    res.send("Hello world!!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
