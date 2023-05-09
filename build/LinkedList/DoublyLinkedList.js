"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DoublyLinkedLidst {
    constructor(iterable) {
        this.head = null;
        this.tail = this.head;
        this.length = 0;
        if (iterable) {
            for (let item of iterable) {
                this.push(item);
            }
        }
    }
    push(value) {
        this.length += 1;
        const node = this.createNode(value);
        if (this.head == null || this.tail == null) {
            this.head = node;
            this.tail = this.head;
            return;
        }
        this.tail.next = node;
        node.previus = this.tail;
        this.tail = this.tail.next;
    }
    pop() {
        if (this.head == null || this.tail == null) {
            return undefined;
        }
        this.length -= 1;
        let cur = this.tail;
        if (cur.previus == null) {
            this.tail = null;
            this.head = this.tail;
            return cur.value;
        }
        this.tail = cur.previus;
        this.tail.next = null;
        cur.previus = null;
        return cur.value;
    }
    unshift(value) {
        this.length += 1;
        const node = this.createNode(value);
        if (this.head == null || this.tail == null) {
            this.head = node;
            this.tail = this.head;
            return;
        }
        node.next = this.head;
        this.head.previus = node;
        this.head = node;
    }
    shift() {
        if (this.head == null || this.tail == null)
            return undefined;
        this.length -= 1;
        let cur = this.head;
        if (this.length == 0) {
            this.head = null;
            this.tail = null;
            return cur.value;
        }
        this.head = cur.next;
        cur.next = null;
        this.head.previus = null;
        return cur.value;
    }
    [Symbol.iterator]() {
        let next = this.head;
        return {
            next: () => {
                if (next == null) {
                    return { value: null, done: true };
                }
                let cur = next;
                next = cur.next;
                return { value: cur.value, done: false };
            },
        };
    }
    createNode(value) {
        return { value, next: null, previus: null };
    }
}
exports.default = DoublyLinkedLidst;
