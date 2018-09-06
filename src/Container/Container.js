import React, {Component} from 'react';
import axios from "axios";
import Post from '../Component/Tile/Tile';
import Header from '../Component/Header/Header';

const API_KEY = "b36522d6bf96adf429cd69da3dd7c4aa";

class Container extends Component{
    state = {
        posts:[],
        cityName:''
      }

      componentWillMount(){
        document.title = "Weather App";
        this.openweathermapRequest(this.state.cityName);
        
      }
      openweathermapRequest = (cityName) => {
        const URI = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
        axios.get(URI).then(response=>{
          this.setState({posts:response.data});
          var postsValue = response.data.list
          // console.log(postsValue);
        })
      }    
      changeCallback = (data) => {
        this.setState({cityName:data.target.value});
        // console.log('Data',data.target.value);
        if(data.target.value !== ''){
          this.openweathermapRequest(data.target.value);
        } else {
          this.setState({posts:[]});
        }
      }
    render(){
        let posts = <p style={{ color:'white',textAlign: 'center' }}>Fetching Data..!! Please check your network </p>
        if(this.state.posts.list !== undefined){
            posts = this.state.posts.list.map( (list,key) =>{
              return <Post 
              key={key}
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
            <div><Header keycity={this.state.cityName} changeCallback={this.changeCallback}/></div>
            <div>
                {posts}                
            </div>
          </div>

        )
    }
}

export default Container;