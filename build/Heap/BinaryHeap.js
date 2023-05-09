"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BinaryHeap {
    constructor(comparison) {
        this.queue = [];
        this.comparison = comparison;
    }
    swap(indexOne, indexTwo) {
        const temp = this.queue[indexOne];
        this.queue[indexOne] = this.queue[indexTwo];
        this.queue[indexTwo] = temp;
    }
    insert(value) {
        let index = this.queue.length;
        this.queue.push(value);
        let parentIndex = Math.floor((index - 1) / 2);
        let parent = this.queue[parentIndex];
        while (index > 0 && parent && this.comparison(parent, value) < 0) {
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
            parent = this.queue[parentIndex];
        }
    }
    extract() {
        this.swap(0, this.queue.length - 1);
        const returnValue = this.queue.pop();
        const curent = this.queue[0];
        let curentIndex = 0;
        let childOneIndex = curentIndex * 2 + 1;
        let childTwoIndex = curentIndex * 2 + 2;
        let childOne = this.queue[childOneIndex];
        let childTwo = this.queue[childTwoIndex];
        let childOneComparedValue = this.comparison(curent, childOne);
        let childTwoComparedValue = this.comparison(curent, childTwo);
        while ((childOne !== undefined && childOneComparedValue < 0) ||
            (childTwo !== undefined && childTwoComparedValue < 0)) {
            if ((childOne !== undefined &&
                childOneComparedValue < childTwoComparedValue) ||
                childTwo === undefined) {
                this.swap(curentIndex, childOneIndex);
                curentIndex = childOneIndex;
            }
            else {
                this.swap(curentIndex, childTwoIndex);
                curentIndex = childTwoIndex;
            }
            childOneIndex = curentIndex * 2 + 1;
            childTwoIndex = curentIndex * 2 + 2;
            childOne = this.queue[childOneIndex];
            childTwo = this.queue[childTwoIndex];
            childOneComparedValue = this.comparison(curent, childOne);
            childTwoComparedValue = this.comparison(curent, childTwo);
        }
        return returnValue;
    }
    isEmpty() {
        return this.queue.length == 0;
    }
    peek() {
        return this.queue[0];
    }
    size() {
        return this.queue.length;
    }
    clear() {
        this.queue = [];
    }
}
exports.default = BinaryHeap;
