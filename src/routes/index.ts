import express from 'express';
import resizeImage from '../utilities/sharp';
import cach from '../utilities/cached';
import path from 'path';
import { error } from 'console';

const routes = express.Router();

routes.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    const title = req.query.title as string;
    const width = req.query.width as string;
    const height = req.query.height as string;
    if (parseInt(width) <= 0 || parseInt(height) <= 0) {
      res
        .status(400)
        .send({ message: 'width and height have to be larger than 0' });
      // res.send(error);
    } else if (isNaN(parseInt(width)) || isNaN(parseInt(height))) {
      console.log('nan entered');
      res.status(400).send({ message: 'width and height have to be numbers' });
      // res.send(error);
    } else {
      //calling cach function to check if image has been cached previously
      const caching: boolean = cach(title, width, height);
      if (caching) {
        //loading images if it was cached previously
        res.sendFile(
          path.join(
            __dirname,
            `../../images/output/out_${width}_${height}_${title}`
          )
        );
      } else {
        //resizing the image if it has not been cached previously
        const imageDirectory = await resizeImage(title, width, height);
        if (imageDirectory == 'failed') {
          console.log('source file does not exist or image was not processed');
        } else {
          res.sendFile(imageDirectory);
        }
      }
    }
  }
);

export default routes;
