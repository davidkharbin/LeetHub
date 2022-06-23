const MinStack = function() {
    this.storage = []
    this.mins = []
}

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.storage.push(val)
    
    if (this.mins.length === 0 || val <= this.mins.at(-1)){
        this.mins.push(val)
    } else if (val < this.mins.at(-1)){
            this.mins.push(val)
    } 
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.top() === this.mins.at(-1)) {
        this.mins.pop()
    }
    
    this.storage.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.storage.at(-1)
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.mins.at(-1)
}

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */