"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Stack {
    constructor(iterable) {
        this.stack = [];
        if (iterable) {
            for (let item of iterable) {
                this.push(item);
            }
        }
    }
    push(value) {
        this.stack.push(value);
    }
    pop() {
        return this.stack.pop();
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }
    isEmpty() {
        return this.stack.length == 0;
    }
    size() {
        return this.stack.length;
    }
    clear() {
        this.stack = [];
    }
}
exports.default = Stack;
