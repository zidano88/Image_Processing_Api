"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//this function calls the sharp api using image name and width and height required
const sharp = require('sharp');
const path_1 = __importDefault(require("path"));
const resizeImage = (title, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    let fullTitle = './images/' + title;
    let fullWidth = parseInt(width);
    let fullHeight = parseInt(height);
    let directory = '';
    yield sharp(fullTitle)
        .resize(fullWidth, fullHeight)
        .toFile(`images/output/out_${width}_${height}_${title}`)
        .catch(() => {
        console.error('error occured');
        return 'failed';
    })
        .then(() => {
        directory = path_1.default.join(__dirname, `../../images/output/out_${width}_${height}_${title}`);
    });
    return directory;
});
exports.default = resizeImage;
