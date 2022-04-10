"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cached_1 = __importDefault(require("../utilities/cached"));
describe('Test caching response', () => {
    let title = 'santamonica.jpg';
    let width = '750';
    let height = '450';
    it('image has not been cached for first time call', () => {
        expect((0, cached_1.default)(title, width, height)).toBeFalsy();
    });
    it('image was cached on second time call', () => {
        expect((0, cached_1.default)(title, width, height)).toBeTruthy();
    });
});
