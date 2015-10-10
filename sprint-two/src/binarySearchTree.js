var BinarySearchTree = function(value) {
  var binarysearch = Object.create(bstMethods);
  binarysearch.left = null;
  binarysearch.right = null;
  binarysearch.value = value;
  binarysearch.BFS = [];
  binarysearch.BFSLog = [];

  return binarysearch;
};

var bstMethods = {};
bstMethods.insert = function (val) {
  // Base Case: if this.value = null 
    // this.value = new BinarySearchTree(val)
  // Recursive Case: 
    // else if val =< this.value
    //   insert(this.left);
    // else 
      // insert(this.right);
  if (val <= this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  } else {
    if (this.right === null) {
      this.right = BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  }
};
bstMethods.contains = function(val) {
  // Recursion
  // Base case: if this.value = val
  //   return true 
  // Termination condition: else if this.right && this.left === null
  //   return false
  // Recursive case: else 
  //   return this.contains(this.left) || this.contains(this.right)
  if ( this.value === val ) {
    return true;
  }
  else if ( this.right === null && this.left === null) {
    return false;
  }
  else {
    if ( val < this.value ) {
      return this.left.contains(val);
    }
    else {
      return this.right.contains(val);
    }
  }
};

bstMethods.depthFirstLog = function(func) {
  func(this.value);
  if ( this.right === null && this.left === null ) {
    return false;
  }
  else {
    return ( (this.left === null ? false : this.left.depthFirstLog(func)) || (this.right === null ? false : this.right.depthFirstLog(func) ) );
  }

};

bstMethods.breadthFirstLog = function (func) {
  var queue = [], traversal, result = [];
  queue.push(this);
  while (queue.length > 0) {
    traversal = queue[0];
    console.log(traversal.left);
    if (traversal.left !== null) {
      queue.push(traversal.left);
    }
    if (traversal.right !== null) {
      queue.push(traversal.right);
    }
    result.push(queue.shift().value);
  }
  return result.slice(1);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
