const request=require('request')
const yargs=require('yargs')
const argv=yargs
.options({
a:{
  demand:true,
  alias:'address',
  description:'Address to fetch weather for',
  string:true
}
})
.help()
.alias('help','h')
.argv;
//console.log(argv);
var url=encodeURIComponent(argv.address)

request({

  url:'http://maps.googleapis.com/maps/api/geocode/json?address='+url,
  json:true,
  key:'AIzaSyD5DbGbZb9ejiyn5ECFLClIiUHbdQc6aYE'
},(error,response,body)=>{
  //console.log(body)
  if(error){
    console.log('Unable to connect the google servers');
  }
  else if(body.status==='ZERO_RESULTS'){
    console.log('unable to find the address');
  }
  else if(body.status==='OK'){
  //  console.log(JSON.stringify(body,undefined,2));

  console.log('Address: '+body.results[0].formatted_address);
  console.log('latitude: '+body.results[0].geometry.location.lat);
console.log('longitude: '+body.results[0].geometry.location.lng);
}
})
