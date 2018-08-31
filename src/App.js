import React, {Component} from 'react';
import axios from "axios";
import Post from './Component/Tile/Tile';
import Header from './Component/Header/Header';
const API_KEY = "b36522d6bf96adf429cd69da3dd7c4aa";
const CityName = "Bangalore"

class App extends Component {
  state = {
    posts:[],
    cityName:[]
  }

  componentWillMount(){
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${CityName}&appid=${API_KEY}&units=metric`).then(response=>{
      this.setState({posts:response.data});
      console.log(response.data.list);
    })
    
  }
  render() {
    let posts = <p style={{ textAlign: 'center' }}>Oops! Something went wrong</p>;
    let cityName='';
    // let date = this.state.posts.list.dt_txt
    // console.log(this.state.posts.list)
    if(this.state.posts.list !== undefined){
      posts = this.state.posts.list.map( (list) =>{
        return <Post 
        temp={list.main.temp}
        humidity={list.main.humidity}
        dt_txt={list.dt_txt}
        weather={list.weather[0].id}
        description={list.weather[0].description}            
        />
      })
    }
    return (
        <div>
        <Header/>
        {posts}
        </div>
      );
  }
};

export default App;