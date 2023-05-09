"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Stack_1 = __importDefault(require("./Stack"));
describe('Stack', () => {
    test('push, pop, peek, isEmpty, size, and clear operations', () => {
        const stack = new Stack_1.default();
        expect(stack.isEmpty()).toBe(true);
        expect(stack.size()).toBe(0);
        stack.push(1);
        expect(stack.peek()).toBe(1);
        expect(stack.isEmpty()).toBe(false);
        expect(stack.size()).toBe(1);
        stack.push(2);
        expect(stack.peek()).toBe(2);
        expect(stack.isEmpty()).toBe(false);
        expect(stack.size()).toBe(2);
        const popped = stack.pop();
        expect(popped).toBe(2);
        expect(stack.peek()).toBe(1);
        expect(stack.isEmpty()).toBe(false);
        expect(stack.size()).toBe(1);
        stack.clear();
        expect(stack.peek()).toBeUndefined();
        expect(stack.isEmpty()).toBe(true);
        expect(stack.size()).toBe(0);
    });
    test('constructor with iterable', () => {
        const iterable = [1, 2, 3];
        const stack = new Stack_1.default(iterable);
        expect(stack.isEmpty()).toBe(false);
        expect(stack.size()).toBe(3);
        expect(stack.peek()).toBe(3);
        stack.pop();
        expect(stack.peek()).toBe(2);
        expect(stack.size()).toBe(2);
    });
});
