"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
const port = 3000;
//this a router hander for get
app.use('/app', index_1.default);
//this is the start of the express server
app.listen(port, () => {
    console.log(`server is working at port: ${port}`);
});
exports.default = app;
