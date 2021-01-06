import react from "react";
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends react.Component {

    state = {     
        temperature : 0,
        humidity : 0,
        description : '',
        link : '',
        feelslike : ''
        
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
            const feelslike = rashtWeatherData.main.feels_like;
            const link = "http://openweathermap.org/img/wn/"+ icon +"@2x.png"

            console.log(description + "    humidity : " + humidity + "    temperature : "+ temperature)


            this.setState({

        temperature,
        humidity ,
        description ,
        link,
        feelslike


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
const { feelslike } = this.state
const { description } = this.state

        return(
//d-flex justify-content-center
            <div className="App">
                <div className="container d-flex justify-content-center col-lg-6 col-sm-8">

                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-auto justify-content-center">
                            <img src = {link} alt="img" className="weatherimg"></img>
                            
                            <h3 className="font-weight-light text-muted d"> {description} </h3> 

                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-auto ">
                        
                        <h2 className="text-center font-weight-bold">Rasht</h2>

                        <div className="text justify-content-center">

                            <h1 className="font-weight-light">temperature : {temperature}</h1>
                            <h1 className="font-weight-light">humidity : {humidity} </h1> 
                            <h1 className="font-weight-light">feels like : {feelslike} </h1> 
                        </div>
                        </div>
                    </div>
            </div>
        </div>
        )
    }
}


export default App;