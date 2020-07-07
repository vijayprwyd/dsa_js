function swap(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

function PriorityQueue(heap = [], comparator = (a, b) => a < b) {

    this.heap = [0, ...heap];
    this.comparator = comparator;
    this.buildHeap();
}

PriorityQueue.prototype.remove = function() {

    let element = this.heap[1];
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.length--;
    this.heapify(1);
    return element;
}

PriorityQueue.prototype.peek = function() {
    return this.heap[1];
}

PriorityQueue.prototype.add = function(ele) {

    this.heap.push(ele)
    let index = this.heap.length - 1;
    let parent = Math.floor(index/2);

    while(index > 1 && this.comparator(this.heap[parent], this.heap[index])) {
        
        swap(this.heap, parent, index);
        index = Math.floor(index/2);
        parent = Math.floor(index/2);
    }
}

PriorityQueue.prototype.buildHeap = function() {

    for(let i = Math.floor(this.heap.length/2); i > 0; i--) {
        this.heapify(i);
    }
}

PriorityQueue.prototype.heapify = function (index) {

    let left = 2 * index, right = 2 * index + 1, maxIndex = index;

    if (left < this.heap.length && this.comparator(this.heap[maxIndex], this.heap[left])) {
        maxIndex = left;
    }

    if(right < this.heap.length && this.comparator(this.heap[maxIndex], this.heap[right])) {
        maxIndex = right;
    }

    if (index !== maxIndex) {
        swap(this.heap, index, maxIndex);
        index = maxIndex;
        this.heapify(maxIndex)
    }
}

PriorityQueue.prototype.isEmpty = function() {
    return this.heap.length <= 1;
}

module.exports = PriorityQueue;