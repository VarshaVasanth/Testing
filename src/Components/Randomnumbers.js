// import React,{useState} from 'react';

// const Randomnumbers = () => {
//     let [random,setRandom] = useState(0);
//     let RandomNum =() => 
//     {
//         setRandom(Math.round(Math.random()*100));
//     }
//     return (
//         <div>
//             <h1>{random}</h1>
//             <button onClick={RandomNum}>Randomnumbers</button>
//         </div>
//     )
// };

// export default Randomnumbers


// =---------------------------------Classs Based Component---------------------------------------------
  import React, { Component } from 'react'

 class Randomnumbers extends Component {
    state={
        RandomNum:0,
    }
    RandomNum=()=>{
        this.setState({RandomNum : Math.round(Math.random()*100)});
    }
    render() {
        return (
            <div>
                <h1>{this.state.RandomNum}</h1>
                <button onClick={this.RandomNum}>Randomnumbers</button>
            </div>
        )
    }
}
export default Randomnumbers;