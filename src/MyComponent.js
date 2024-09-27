"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/MyComponent.tsx
var react_1 = __importDefault(require("react"));
var MyComponent = function (_a) {
    var message = _a.message;
    return react_1.default.createElement("div", null, message);
};
exports.default = MyComponent;
