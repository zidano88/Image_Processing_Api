"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sharp = require('sharp');
const sharpapi = express_1.default.Router();
sharpapi.get('/', (req, res) => {
    res.send('sharp api route');
    console.log(req.query.title + " & " + req.query.width + " & " + req.query.height);
});
// sharp('input.jpg')
//     .resize(300, 200)
//     .toFile('output.jpg', function (err: unknown) {
//         // output.jpg is a 300 pixels wide and 200 pixels high image
//         // containing a scaled and cropped version of input.jpg
//     });
exports.default = sharpapi;
