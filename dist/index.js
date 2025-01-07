"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const express_1 = __importDefault(require("express"));
const secrets_1 = require("./secrets");
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
app.use(express_1.default.json());
exports.prisma = new client_1.PrismaClient({
    log: ['query'],
});
app.listen(secrets_1.PORT, () => {
    console.log(`Server is running on http://localhost:${secrets_1.PORT}`);
});
