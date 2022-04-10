//this function checks if imagename has been cached previously and if not it adds the new image name to caching array
let cachedArr: string[] = [];

const cached = (title: string, width: string, height: string): boolean => {
  let imageName = `out_${width}_${height}_${title}`;
  if (cachedArr.includes(imageName)) {
    return true;
  } else {
    cachedArr.push(imageName);
    return false;
  }
};

export default cached;
