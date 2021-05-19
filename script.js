// get all the countries with population of less than 2lakh using filter function
var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var countrydata = JSON.parse(this.response);
    var country = countrydata.filter((ele)=>{
        return ele.population<=200000;
    
    });
    console.log(country);
};