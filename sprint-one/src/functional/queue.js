var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var length = 0;

  someInstance.enqueue = function(value) {
    for ( var i = length - 1; i >= 0; i -- ) {
      storage[i + 1] = storage[i];
    }
    storage[0] = value;
    length ++;
  };

  someInstance.dequeue = function() {
    var result = storage[length - 1];
    if ( length > 0 ) {
      length --;  
    }
    return result;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
