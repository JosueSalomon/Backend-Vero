"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const imagekit_1 = __importDefault(require("imagekit"));
const imagekit = new imagekit_1.default({
    publicKey: "public_1Mo+od5K9c/4J5IYss88pjczhLQ=",
    privateKey: "private_w4FJDE+JkbJjlyrNeP5A6yfJRhI=",
    urlEndpoint: "https://ik.imagekit.io/zvju4sp4d",
});
exports.default = imagekit;
