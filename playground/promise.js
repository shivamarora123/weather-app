var asyncAdd=(a,b)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(typeof a==='number' && typeof b==='number'){
        resolve(a+b);
        }
        else{
          reject('Arguments must be numbers')
        }


    })
  },1500)
}
asyncAdd(5,7).then((res)=>{
  console.log('Result:'+res);
  return asyncAdd(res,33);
},(error)=>{
  console.log(error);
}).then((res)=>{
  console.log('should be 45: '+res);
}).catch((error)=>{
  console.log(error);
})

// var somePromise=new Promise((resolve,reject)=>{
// setTimeout(()=>{
//   resolve('Hey it works')   //resolve or reject only one action we can do  //either success or failure
//
//   //reject('unable to fetch the data')
// })
//
//
// })
// somePromise.then((message)=>{
//   console.log('success:'+message);
// },(error)=>{
//   console.log('error:'+error);
// })
