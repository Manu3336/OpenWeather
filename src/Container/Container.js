import React, {Component} from 'react';
import axios from "axios";
import Post from '../Component/Tile/Tile';
import Header from '../Component/Header/Header';

const API_KEY = "b36522d6bf96adf429cd69da3dd7c4aa";

class Container extends Component{
    state = {
        posts:[],
        cityName:'Mumbai',
        cityNameHeader:'Mumbai',
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
        }).catch((error) => {
          this.setState({posts:[]});
        })
      }    

      handleOnChange = (data)=>{
        this.setState({cityName:data.target.value});
      }
      changeCallback = (data) => {
        this.setState({cityName:data.target.value});
        
      }
      onclickCallback = (e) => {
        this.openweathermapRequest(this.state.cityName);
        this.setState({cityNameHeader:this.state.cityName});
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
            <div><Header keycity={this.state.cityName} cityNameHeader={this.state.cityNameHeader} changeCallback={this.changeCallback} onclickCallback={this.onclickCallback}/></div>
            <div>
                {posts}                
            </div>
          </div>

        )
    }
}

export default Container;