const express = require("express");
const https = require("https");


const app = express();


app.get("/", function(req, res){

    const url = "https://api.openweathermap.org/data/2.5/weather?q=rasht&appid=ec3e58b8b45bed5279cdf3095203d001&units=metric"
    https.get(url, function(respons){

        respons.on("data", function(data){
            const rashtWeatherData = JSON.parse(data)

            const description = rashtWeatherData.weather[0].description;
            const temp = rashtWeatherData.main.temp;
            console.log( description);
            console.log("temperature : "+temp); 
           
            const icon = rashtWeatherData.weather[0].icon;
            console.log(icon)
            const link = "http://openweathermap.org/img/wn/"+ icon +"@2x.png"
            console.log(link)


            res.write("<p>" + description + "<p>")
            res.write("<p1>temperature : <p1>" + temp)
			res.write('<img src = ' + link + '>')


            res.send();
        })


    })



    //res.send("server runqs")



})




app.listen(3000, function(){

     console.log("server is up")
})