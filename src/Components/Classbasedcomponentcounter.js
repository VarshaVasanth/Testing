import React, { Component } from 'react'
 class Classbasedcomponentcounter extends Component {
     state={
         count:0,
     };
     //updating the count value we make use of increment and setState()
     Increment = () => {
         this.setState({ count:this.state.count + 1})} //updating state by using setstate
     Decrement =() => {
         this.setState({count:this.state.count- 1})}
     Reset = () => {
         this.setState({count:0})} 
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.Increment}>Increment</button>
                <button onClick={this.Decrement}>Decrement</button>
                <button onClick={this.Reset}>Reset</button>
            </div>
        );
    }
};


export default Classbasedcomponentcounter;


