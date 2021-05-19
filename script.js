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