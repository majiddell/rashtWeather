import react from "react";
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends react.Component {

    state = {     
        temperature : 0,
        humidity : 0,
        description : '',
        link : ''

    }


componentDidMount(){

        this.fetchdata();

}

        fetchdata = () => {
        const url = "https://api.openweathermap.org/data/2.5/weather?q=rasht&appid=ec3e58b8b45bed5279cdf3095203d001&units=metric"

        axios.get(url)
          .then((Response) => {
            //const rashtWeatherData = JSON.parse(Response)
            console.log(Response);
            const rashtWeatherData = Response.data;

            console.log(rashtWeatherData);


            const description = rashtWeatherData.weather[0].description;
            const temperature = rashtWeatherData.main.temp;
            const humidity = rashtWeatherData.main.humidity;
            const icon = rashtWeatherData.weather[0].icon;
            
            const link = "http://openweathermap.org/img/wn/"+ icon +"@2x.png"

            console.log(description + "    humidity : " + humidity + "    temperature : "+ temperature)


            this.setState({

        temperature,
        humidity ,
        description ,
                link


            })
           

          })

          .catch((Error) =>{
              console.log(Error);
          }
          )

        }


    render (){

const { temperature } =this.state;
const { humidity } = this.state;
const { link } = this.state;
        return(

            <div className="App">
                <div className="card container">
                    <div className="card-body">
                        <img src = {link} alt="img" className="weatherimg"></img>
                        <h1>Hi babe, temperature is {temperature} and humidity is {humidity} g</h1>
                        
  
                    </div>
                </div>


            </div>
           
        )
    }
}


export default App;