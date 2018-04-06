const yargs=require('yargs')
const geocode=require('./geocode/geocode')
const weather=require('./weather/weather-search')
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
geocode.geocodeAddress(argv.address,(err,result)=>{
  if(err){
    console.log(err);
  }
  else{
    console.log('lat,long fetched successfully');
  //  console.log(JSON.stringify(result,undefined,2));
    weather.weather(result,(err,res)=>{
      if(err){
        console.log(err);
      }
      else {
        console.log(JSON.stringify(res,undefined,2));
      }
    })

  }
})
