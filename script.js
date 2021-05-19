//- Get all the countries from Asia continent /region using Filter function
var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var countrydata = JSON.parse(this.response);
    var countriesFromAsia = countrydata.filter((x)=>x.region =='Asia');
    console.log(countriesFromAsia);
}
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
// - Print the following details name, capital, flag using forEach function 
var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data = JSON.parse(this.response);
    var result = data.forEach((item)=>{
        console.log(item.name,item.capital,item.flag);
    });
    
};
// -  Print the total population of countries using reduce function 
var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var countrydata = JSON.parse(this.response);
    var country = countrydata.reduce((acc,country)=>{
        return acc+country.population;
    },0);
    console.log(country);
};
//- Print the country which use US Dollars as currency
var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
var data = JSON.parse(this.response);
var countriesUsimgUsDollars = data.filter((x)=>{
    for(var curr in x.currencies){
        if(x.currencies[curr].code == 'USD'){
            return true;
        }
    }

}).map(x => console.log(x.name));
};
