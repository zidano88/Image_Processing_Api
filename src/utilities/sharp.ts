//this function calls the sharp api using image name and width and height required
const sharp = require('sharp');
import path from 'path';

const resizeImage = async (
  title: string,
  width: string,
  height: string
): Promise<string> => {
  let fullTitle: string = './images/' + title;
  let fullWidth: number = parseInt(width);
  let fullHeight: number = parseInt(height);
  let directory: string = '';
  await sharp(fullTitle)
    .resize(fullWidth, fullHeight)
    .toFile(`images/output/out_${width}_${height}_${title}`)
    .catch(() => {
      console.error('error occured');
      return 'failed';
    })
    .then(() => {
      directory = path.join(
        __dirname,
        `../../images/output/out_${width}_${height}_${title}`
      );
    });

  return directory;
};

export default resizeImage;
