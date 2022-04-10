"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imageviewer = express_1.default.Router();
let title, width, height;
imageviewer.get('/', (req, res) => {
    res.send('image viewer api route');
    // console.log(req.query.title + " & " + req.query.width + " & " + req.query.height);
    title = req.query.title;
    width = req.query.width;
    height = req.query.height;
    console.log(`${title} & ${width} & ${height}`);
});
exports.default = imageviewer;
