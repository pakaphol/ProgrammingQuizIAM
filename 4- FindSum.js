const findSum = (num) => {
  
   var result = 0
   for(var i = 1;i <= num;i++) {
     result = result + Math.pow(i, i)
   }

 return result
}

findSum(3)