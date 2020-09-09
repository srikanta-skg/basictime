import React from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
import Header from './Header';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        minutes: 0,
        seconds: 0,
        title : "React timer",
        icon_Click : true,
         show_Number : true
      }
      this.myChangeHandler = this.myChangeHandler.bind(this)
    }

    componentWillUnmount() {
      clearInterval(this.myInterval)
    }

    myChangeHandler2 = (event) => {
      console.log(event.target.value)
      var value = event.target.value
      console.log("i am value :", value)
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    myChangeHandler = () => {

      if (this.state.minutes <= 0) {
        alert("enter value greater then 1")
        return;
      }
      this.setState({
        icon_Click: false
      })
      this.setState({
        show_Number: false
      })

      this.myInterval = setInterval(() => {
        const {
          seconds,
          minutes
        } = this.state
        if (seconds > 0) {
          this.setState(({
            seconds
          }) => ({
            seconds: seconds - 1
          }))
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(this.myInterval)
          } else {
            this.setState(({
              minutes
            }) => ({
              minutes: minutes - 1,
              seconds: 59
            }))
          }
        }
      }, 1000)
    }
    componentDidUpdate() {
      console.log("updated")
    }
    myChangeHandler3 = () => {
      clearInterval(this.myInterval)
      this.setState({
        icon_Click: true
      })
      this.setState({
        show_Number: true
      })
    }

  render() {
      const { minutes, seconds ,icon_Click , show_Number } = this.state

      return (
        <div className = "container" >

       <Header titles ={this.state.title} />
  
        <form  > 
        <div className = "number" >  
          
             <div>
             <p className = "text_color small"> {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p> 


            { show_Number == true ?  <input type="number"  name = "minutes" className = "input_taker" placeholder = 'Enter Number' onChange={this.myChangeHandler2} ></input> : 
            
            
            <div>  { minutes === 0 && seconds === 0  ? <h1 className = "text_color">0</h1> : <h1 className = "text_color">Time: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1> } </div>  }


            
<div> <br></br> <br></br><br></br></div>
             </div>


            <div className = "icons">  
            
 { icon_Click == true ? <input className = "start_button" type="button" onClick  = {this.myChangeHandler} /> : 

 <input className = "pause_button"  type="button"  value = " " onClick  = {this.myChangeHandler3} />     }           

            <label onSubmit={this.myChangeHandler}>
             <button className = "restart_button" ></button> </label>       
             <div> <br></br> </div>
             
           </div>

        </div>
        
          </form>
           
            </div>
      )
  }
}

export default App;
