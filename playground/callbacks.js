const getUser=(id,cb)=>{
  var user={
    id:id,
    name:'Shivam'
  }
  setTimeout(()=>{
  cb(user)
},2000)

}
getUser(9,(user)=>{
  console.log(user);
})
