"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const homeController = __importStar(require("../controllers/home"));
exports.router = express_1.Router();
exports.router.get('/', homeController.GetHome);
exports.router.get('/cv', homeController.GetCV);
exports.router.post('/contact', homeController.PostEmail);
