import React, {useState,useEffect} from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment'
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';

const backchange = (description) =>{
  if (description ==="Few clouds"
  ||
  description ==="Scattered clouds"
  ||
  description ==="Broken clouds"
  ||
  description ==="Overcast clouds"
  ) {
    return 'Overcast-clouds';
  }
   else if (description ==="Thunderstorm with light rain"
    || 
    description ==="Thunderstorm with rain"
    ||
    description ==="Thunderstorm with heavy rain"
    ||
    description ==="Thunderstorm with light drizzle"
    ||
    description ==="Thunderstorm with drizzle"
    ||
    description ==="Thunderstorm with heavy drizzle"
    ||
    description ==="Thunderstorm with Hail") {
      return 'Thunderstorm-with-light-rain';
      
    }
    else if (description ==="Light Drizzle"
    ||
    description ==="Drizzle"
    ||
    description ==="Heavy Drizzle"
    ||
    description ==="Light Rain"
    ||
    description ==="Moderate Rain"
    ||
   description ==="Heavy Rain"
    ||
    description ==="Freezing rain"
    ) {
      return 'Light-Drizzle';
    }
    else if (description ==="Light shower rain"
    ||
    description ==="Shower rain"
    ||
    description ==="Heavy shower rain"
    ||
    description ==="Light snow"
    ||
    description ==="Snow"
    ||
    description ==="Heavy Snow"
    ||
    description ==="Mix snow/rain"
    ||
    description ==="Sleet"
    ||
    description ==="Heavy sleet"
    ||
    description ==="Snow shower"
    ||
    description ==="Heavy snow shower"
    ||
    description ==="Flurries"
    ) {
      return 'Light-snow';
    }
    else if (description ==="Mist"
    ||
    description ==="Smoke"
    ||
    description ==="Haze"
    ||
    description ==="Sand/dust"
    ||
    description ==="Fog"
    ||
    description ==="Freezing Fog"
    ||
    description ==="Mix snow/rain"
    ) {
      return 'Freezing-Fog';
    }
    else if (description ==="Clear sky"
    
    ) {
      return 'Clear-sky';
    }
   
 
 }

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 100,
    width:100,
    paddingTop: 10, // 16:9
    alignContent: 'center'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function App() {
  const api = {
    key: "e0b3d83f5334432ea6f5522dac4052da",
    base: "https://api.weatherbit.io/v2.0/"

  };

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [query, setQuary] = useState('');
  const [weather, setweather] = useState({});
  const [jsondata, setjsondata] = useState({});

   const searchButtonPress = (e) =>{
    removeError();
    addLoader();
     e.preventDefault();
    fetch(`${api.base}forecast/daily?city=${query}&days=7&key=${api.key}`)
    .then(res => res.json())
    .then(result =>{ 
      setweather(result);
      removeLoder();
      setjsondata(result.data[0].weather);
      setQuary('');
    })
    .catch((error) => {
      console.error('error:', error);
      addError();
      removeLoder();
    });
   };
   useEffect(() => {
    removeError()
    addLoader();
    fetch(`${api.base}forecast/daily?city=colombo&days=7&key=${api.key}`)
    .then(res => res.json())
    .then(result =>{ 
      setweather(result);
      removeLoder();
      setjsondata(result.data[0].weather);
      setQuary('');
    })
    .catch((error) => {
      console.error('error:', error);
      addError();
      removeLoder();

    });
  },[]);
  const removeLoder  = () =>{
    var element = document.getElementById("loader");
    element.classList.add("display-off");
  }
  const addLoader = () =>{
    var element = document.getElementById("loader");
    element.classList.remove("display-off");
  }

  const removeError  = () =>{
    var element = document.getElementById("error-text");
    element.classList.add("display-off");
  }
  const addError = () =>{
    var element = document.getElementById("error-text");
    element.classList.remove("display-off");
  }
  
    
 
     
  const data = weather.data?weather.data.map(e => e.temp):[];
   const weather_description = weather.data?weather.data.map(e =>(
      e.weather
   )):[];
 
  const weatherData = {...weather_description[0]};
  const dateNow = Date();
  //console.log(jsondata.description);
  
 const iconurl = `https://www.weatherbit.io/static/img/icons/${weatherData.icon}.png`;


const weatherImage = backchange(jsondata.description)
 

 let myclassNAme ;
 if ((jsondata.description)) {
   if ((weatherImage === 'Thunderstorm-with-light-rain')) {
    myclassNAme = 'Thunderstorm-with-light-rain';
   }
   else if ((weatherImage === 'Light-Drizzle')) {
    myclassNAme = 'Light-Drizzle';
   }
   else if ((weatherImage === 'Overcast-clouds')) {
    myclassNAme = 'Overcast-clouds';
   }
   else if ((weatherImage === 'Freezing-Fog')) {
    myclassNAme = 'Freezing-Fog';
   }
   else if ((weatherImage === 'Clear-sky')) {
    myclassNAme = 'Clear-sky';
   }
   else if ((weatherImage === 'Light-snow')) {
    myclassNAme = 'Light-snow';
   }
 }else {
  myclassNAme = 'card-root';
 }

  return (
    <div className="App">
      <main className="main-body">
    <Card className={ myclassNAme}>
      <CardHeader className="Card-headder"
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            W
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon  color="secondary"/>
          </IconButton>
        }
        title={
          <div className="topic">Weather Forecast</div>
        }
        
      />
      <CardContent className="Card-content">
        <div className="search-bar">
          <Paper component="form" className="">
            <InputBase
              className="search-input"
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search google maps' }}
              onChange={e => setQuary(e.target.value)}
              value={query}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={(e) => searchButtonPress(e)}>
              <SearchIcon />
            </IconButton>
            <Divider className={classes.divider} orientation="vertical" />
           
            </Paper>
        </div>
        <div className="paper">
          <Paper className="paper-body" elevation={3}>
          <Typography paragraph id="error-text" className="error-text display-off">Search Results Not Available </Typography>
          <CircularProgress id="loader" color="secondary" />
          <Typography paragraph className="city-text">{weather.city_name}</Typography>
          <Typography paragraph className="date-text">{moment(dateNow).format('LL')}</Typography>
           {data[0]}°C
              <CardMedia
                className="media"
                image={iconurl}
                title="Paella dish"
              />
          
            
            <div className="weather">
              {weatherData.description}
            </div>
          </Paper>
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon color="secondary"/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon color="secondary"/>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          color="secondary"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className="item-body">
        <div>
        {
          weather.data?weather.data.map(e => 
            <div key={e.sunset_ts} className="item-content">
              <Card className={classes.root}>
                <div className={classes.details}>
                  <CardContent className="classes-content">
                    <div className="classes-control-1">
                      {e.valid_date}
                    </div>
                    <div className="classes-control-1">
                    {e.temp}°C
                    </div>
                    <div className="classes-control-1">
                    <CardMedia
                        className="classes-control-media"
                        image={`https://www.weatherbit.io/static/img/icons/${e.weather.icon}.png`}
                        title="Paella dish"
                    />
                    </div>
                  </CardContent>
                </div>
                </Card>
            </div>
          ):[]
        }
        </div>
          
        </CardContent>
      </Collapse>
    </Card>
      </main>
      
    </div>
  );
}

export default App;
