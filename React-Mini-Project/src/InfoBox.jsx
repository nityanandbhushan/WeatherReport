import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './InfoBox.css'
export default function InfoBox({info}){ 
  const RAIN_ULR="https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg?size=626&ext=jpg";
  const HOT_URL="https://as2.ftcdn.net/v2/jpg/05/18/43/73/1000_F_518437397_j4c3cOSYK54AjCis5muIjPaHw2KBTCeH.jpg";
  const COLD_URL="https://t3.ftcdn.net/jpg/03/03/51/22/240_F_303512228_PZ0wSwASud8r4Zs1pooBQhpWMwO09h2P.jpg";
    return(
        <div className='card'>
            <h2>WeatherInfo- {info.weather}</h2>
            <div className='card-container'>
            <Card sx={{ maxWidth: 345 }} className='card-Body' >
        <CardMedia
          sx={{ height: 140 }}
          image={ 
            info.humidity>80
            ?RAIN_URL
            :info.temp>20
            ?HOT_URL
            :COLD_URL
          }
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {info.city} { info.humidity>80
            ?<ThunderstormIcon/>
            :info.temp>20
            ?<WbSunnyIcon/>
            :<AcUnitIcon/>
            }
          </Typography>
          <Typography variant="body2" color="text.secondary" className='winfo' component={"span"}>
           <p> Temperature:{info.temp}&deg;C</p>
           <p>Min temp:{info.tempMin}&deg;C</p>
           <p>Max temp:{info.tempMax}&deg;C</p>
           <p>Humidy:{info.humidity}</p>
            <p>The weather can be described as {info.weather} and feels like {info.feelsLike}</p>
          </Typography>
        </CardContent>
       
      </Card>
            </div>
        
      </div>
    ); 
   
}