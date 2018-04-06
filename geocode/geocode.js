const request=require('request')
var geocodeAddress=(address,callback)=>{``
var url=encodeURIComponent(address)
request({

  url:'http://maps.googleapis.com/maps/api/geocode/json?address='+url,
  json:true,
  key:'AIzaSyD5DbGbZb9ejiyn5ECFLClIiUHbdQc6aYE'
},(error,response,body)=>{
  //console.log(body)
  if(error){
    callback('Unable to connect the google servers');
  }
  else if(body.status==='ZERO_RESULTS'){
    callback('unable to find the address');
  }
  else if(body.status==='OK'){
  //this callback can be tricky
  callback(undefined,{

    Address:body.results[0].formatted_address,
    latitude:body.results[0].geometry.location.lat,
    longitude:body.results[0].geometry.location.lng
  });

} //else if over
}) //request over
}// var geocodeAddress overs
module.exports.geocodeAddress=geocodeAddress
