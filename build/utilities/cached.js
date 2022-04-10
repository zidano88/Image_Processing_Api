"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//this function checks if imagename has been cached previously and if not it adds the new image name to caching array
let cachedArr = [];
const cached = (title, width, height) => {
    let imageName = `out_${width}_${height}_${title}`;
    if (cachedArr.includes(imageName)) {
        return true;
    }
    else {
        cachedArr.push(imageName);
        return false;
    }
};
exports.default = cached;
