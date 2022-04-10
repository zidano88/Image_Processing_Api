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
const express_1 = __importDefault(require("express"));
const sharp_1 = __importDefault(require("../utilities/sharp"));
const cached_1 = __importDefault(require("../utilities/cached"));
const path_1 = __importDefault(require("path"));
const routes = express_1.default.Router();
routes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const title = req.query.title;
    const width = req.query.width;
    const height = req.query.height;
    if (parseInt(width) <= 0 || parseInt(height) <= 0) {
        res
            .status(400)
            .send({ message: 'width and height have to be larger than 0' });
        // res.send(error);
    }
    else if (isNaN(parseInt(width)) || isNaN(parseInt(height))) {
        console.log('nan entered');
        res.status(400).send({ message: 'width and height have to be numbers' });
        // res.send(error);
    }
    else {
        //calling cach function to check if image has been cached previously
        const caching = (0, cached_1.default)(title, width, height);
        if (caching) {
            //loading images if it was cached previously
            res.sendFile(path_1.default.join(__dirname, `../../images/output/out_${width}_${height}_${title}`));
        }
        else {
            //resizing the image if it has not been cached previously
            const imageDirectory = yield (0, sharp_1.default)(title, width, height);
            if (imageDirectory == 'failed') {
                console.log('source file does not exist or image was not processed');
            }
            else {
                res.sendFile(imageDirectory);
            }
        }
    }
}));
exports.default = routes;
