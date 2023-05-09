"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SinglyLinkedList {
    constructor(iterable) {
        this.length = 0;
        this.head = null;
        if (iterable) {
            for (let item of iterable) {
                this.push(item);
            }
        }
    }
    push(value) {
        this.length += 1;
        let node = this.createNode(value);
        if (!this.head) {
            this.head = node;
            return;
        }
        let cur = this.head;
        while (cur.next) {
            cur = cur.next;
        }
        cur.next = node;
    }
    pop() {
        if (this.head == null)
            return undefined;
        this.length -= 1;
        if (this.length == 0) {
            let cur = this.head;
            this.head = null;
            return cur.value;
        }
        let prev = null;
        let cur = this.head;
        while (cur.next) {
            prev = cur;
            cur = cur.next;
        }
        prev.next = null;
        return cur.value;
    }
    unshift(value) {
        this.length += 1;
        let node = this.createNode(value);
        node.next = this.head;
        this.head = node;
    }
    shift() {
        if (this.head == null)
            return undefined;
        this.length -= 1;
        let cur = this.head;
        this.head = cur.next;
        cur.next = null;
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
        return { value, next: null };
    }
}
exports.default = SinglyLinkedList;
