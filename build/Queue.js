"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DoublyLinkedList_1 = __importDefault(require("./LinkedList/DoublyLinkedList"));
class Queue {
    constructor(iterable) {
        if (iterable) {
            this.queue = new DoublyLinkedList_1.default(iterable);
        }
        else {
            this.queue = new DoublyLinkedList_1.default();
        }
    }
    enqueue(value) {
        this.queue.push(value);
    }
    dequeue() {
        return this.queue.shift();
    }
    peek() {
        var _a;
        return (_a = this.queue.head) === null || _a === void 0 ? void 0 : _a.value;
    }
    isEmpty() {
        return this.queue.length == 0;
    }
    size() {
        return this.queue.length;
    }
    clear() {
        this.queue = new DoublyLinkedList_1.default();
    }
}
exports.default = Queue;
