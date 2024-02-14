import React, { Component } from 'react'

export default class App extends Component {
  componentDidMount(){
    setInterval(
        ()=>{
            this.setState({timer:this.state.timer+1})
        },1000)
    }    
    state={
        person:{
            fullName:"GO MY CODE",
            bio:"GMC",
            imgSRC:"",
        },
        shows:false
    ,timer:0
        }
  render() {
    return (
      <div>
        <h1>Timer:{this.state.timer}</h1>
        <button onClick={()=>{
            this.setState({shows:!this.state.shows})
            console.log(this.state.shows)
        }}>shows</button>
{this.state.shows && <h2>{this.state.person.fullName}</h2>}
      </div>
    )
  }
}
