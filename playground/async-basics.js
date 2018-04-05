console.log('Starting app')

setTimeout(()=>{
  console.log('Inside the callback');
},2000)

setTimeout(()=>{
  console.log('second the callback');
},0)
console.log('Finishing Up');
