function addTogether(...values) {
    if (values.length === 1 && typeof values[0] === 'number') {
      return (value) => typeof value === 'number' ? value + values[0] : undefined;
    } else if(typeof values[0] !== 'number' || typeof values[1] !== 'number') {
      return undefined;
    }
      return values.reduce((sum, num) => sum + num);
  }
  addTogether(2,3);
  
  // Intermediate Algorithm Scripting: Arguments Optional
  // Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
  
  // For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
  
  // Calling this returned function with a single argument will then return the sum:
  
  // var sumTwoAnd = addTogether(2);
  
  // sumTwoAnd(3) returns 5.
  
  // If either argument isn't a valid number, return undefined.