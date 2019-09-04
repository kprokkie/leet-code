/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.first = [];
    this.last = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
   const length = this.first.length
    for (let i = 0; i < length; i++) {
        this.last.push(this.first.pop());
    }
    this.last.push(x);
    return this; 
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    const length = this.last.length
    for (let i = 0; i < length; i++) {
        this.first.push(this.last.pop());
    }
    return this.first.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
     return this.last.length ? this.last[0] : this.first[this.first.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.last.length && !this.first.length;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */