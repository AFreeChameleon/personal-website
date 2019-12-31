"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const bodyParser = __importStar(require("body-parser"));
const path_1 = __importDefault(require("path"));
// Routes
const home_1 = require("./routes/home");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'dist/views');
app.use('/', home_1.router);
app.listen(3000, () => console.log('Server running...'));
