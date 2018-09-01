import React, {Component} from 'react';
import axios from "axios";
import Post from '../Component/Tile/Tile';


const API_KEY = "b36522d6bf96adf429cd69da3dd7c4aa";
const CityName = "Mumbai"

class Container extends Component{
    state = {
        posts:[],
        cityName:[]
      }

      componentWillMount(){
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${CityName}&appid=${API_KEY}&units=metric`).then(response=>{
          this.setState({posts:response.data});
          var postsValue = response.data.list
          console.log(postsValue);
        })
        
      }    
    render(){
        let posts = <p style={{ color:'white',textAlign: 'center' }}>Fething Data.. Please check your networkfir</p>;
        let cityName='';
        if(this.state.posts.list !== undefined){
            posts = this.state.posts.list.map( (list) =>{
              return <Post 
              temp={list.main.temp}
              humidity={list.main.humidity}
              weather={list.weather[0].id}
              time={list.dt_txt}
              description={list.weather[0].description}            
              />
            })
          }
        return(
            <div>
                {posts}>
            </div>
        )
    }
}

export default Container;