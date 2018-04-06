const request=require('request')

var weather=(address,callback)=>{
const description={
  api_key:'f5ea9346042c4087b6c801e156b675db',
  lat:address.latitude,
  lng:address.longitude
}

request({
  url:'https://api.darksky.net/forecast/'+description.api_key+'/'+description.lat+','+description.lng,
  json:true

},(error,response,body)=>{
//console.log(body.currently.temperature);
  if(error){

    callback('unable to connect to google server');
  }
  else if(body.statusCode===400){
    callback('unable to fetch the weather');
  }
  else{
  callback(undefined,{
    Address:address.Address,
  weather:body.currently.temperature
  });
  }
})
}
module.exports.weather=weather;
