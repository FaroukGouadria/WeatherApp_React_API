import React,{useState,useEffect} from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function WeatherSearch() {
    const [search, setSearch] = useState("london");
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");
    let componentMounted = true;

    useEffect(() => {

        const fetchWeather = async()=>{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=08f7533c8986d4d95ca5218a7246ef0b`);
            if(componentMounted){
                setData(await response.json());
                
            }
            return ()=>{
                componentMounted = false ;
            }
        }

        fetchWeather();
    }, [search]);

    let emoji = null;
    if(typeof data.main != "undefined"){
        if(data.weather[0].main == 'Clouds'){
            emoji="fa-cloud"
        }else if (data.weather[0].main == "Thunderstorm"){
            emoji = "fa-bolt"
        } else if (data.weather[0].main == "Drizzle") {
            emoji = "fa-cloud-rain"
        } else if (data.weather[0].main == "Rain") {
            emoji = "fa-cloud-shower-heavy"
        } else if (data.weather[0].main == "Snow") {
            emoji = "fa-snow-flake"
        }else{
            emoji = "fa-smog";
        }
    }else{
        return(
            <div className="container mt-5">
                <div className="row justify-content-center ">
                    <div className="col-md-4">
                            <Skeleton height={600} width={400} />
                     </div>   
                    </div>
            </div>
            
        )
    }

    //date 

        let d = new Date();
        let date = d.getDate();
        let year =  d.getFullYear();
        let month = d.toLocaleString("default",{month:'long'})
        let day = d.toLocaleString("default",{weekday:'long'})
    //time
    
    let time = d.toLocaleString([],{
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit"
    }); 

    let temp = (data.main.temp - 273.15).toFixed(2);
    let temp_min = (data.main.temp_min - 273.15).toFixed(2);
    let temp_max = (data.main.temp_max - 273.15).toFixed(2);

    const handleSubmit = (event)=>{
        event.preventDefault();
        setSearch(input);
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row justify-content-center ">
                    <div className="col-md-4">
                        <div className="card text-white text-center border-0">
                            <img src={`https://source.unsplash.com/600x900/?${data.weather[0].main}`} className="card-img" alt={data.name} />
                            <div className="card-img-overlay">
                                <form onSubmit={handleSubmit}>
                                    <div className="input-group mb-4 w-75 mx-auto">
                                        <input   
                                        type="search" 
                                        className="form-control" 
                                        placeholder="Search ..." 
                                        aria-label="search city" 
                                        aria-describedby="basic-addon2"
                                        name='search'
                                        value={input}
                                        onChange={(e)=>setInput(e.target.value)}
                                        required
                                        /> 
                                            <button type='submit' className="input-group-text" id="basic-addon2"><i className="fa fa-search"></i></button>
                                    </div>
                                </form>
                                <div className="bg-dark bg-opacity-50 py-3 ">
                                <h2 className="card-title">{data.name}</h2>
                                <p className="card-text lead">
                                    {day}, {date} {month},{year}
                                <br/>
                                {time}
                                    </p>
                                <hr/>
                                <i className={`fa ${emoji} fa-4x`}></i>
                                <h1 className="fw-bolder mb-5">{temp} &deg;C</h1>
                                    <p className="fw-bolder mb-0">{data.weather[0].main}</p>
                                <p className="lead">{temp_min}&deg;C | {temp_max}&deg;C</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherSearch;
