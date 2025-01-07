"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = void 0;
var dotenv_1 = require("dotenv");
dotenv_1.default.config({ path: '.env' });
exports.PORT = process.env.PORT || 3000;
