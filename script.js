//- Get all the countries from Asia continent /region using Filter function
var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var countrydata = JSON.parse(this.response);
    var countriesFromAsia = countrydata.filter((x)=>x.region =='Asia');
    console.log(countriesFromAsia);
}