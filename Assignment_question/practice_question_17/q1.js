let arr=[1,2,3,4,5,6,7,8,9,10];
let sum=arr.reduce((acc,el)=>{
    return acc+(el*el);
})
console.log(sum/arr.length);