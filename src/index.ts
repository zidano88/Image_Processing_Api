import express from 'express';
import routes from './routes/index';

const app = express();
const port = 3000;

//this a router hander for get
app.use('/app', routes);

//this is the start of the express server
app.listen(port, () => {
  console.log(`server is working at port: ${port}`);
});

export default app;
