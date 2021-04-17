// import React,{useState} from 'react';
// import faker from "faker/locale/en_IND";
// const Randomimages = () => {

//     let[image,setImage]=useState(faker.image.avatar());
//     let RandomImg=()=>
//     {
//         setImage(faker.image.avatar());
//     };
//     return (
//         <div>
//           <p>
//               <img src={image} alt="img"/>
//               <button onClick={RandomImg}>Random Images</button>
//               </p>            
//         </div>
//     )
// }

// export default Randomimages;


// // -------------------------------------CLass Based Component--------------------------------
// import React,{Component} from 'react';
// import faker from "faker/locale/en_IND";

// class Randomimages extends Component
// {
//     state={
//         Randomimg: faker.image.avatar(),
//     };
//     GetRandomImg = () => {
//         this.setState({Randomimg:faker.image.avatar()});
//     };
//     render()
//     {
//         return(
//             <div>
//                 <img src={this.state.Randomimg} alt="images"/>
//                 <button onMouseEnter={this.GetRandomImg}>RandomImages</button>
//             </div>
//         )
//     }
// }
// export default Randomimages;




import React, { Component } from 'react'
import faker from "faker/locale/en_IND";


class Randomimages extends Component {
    state={
        Randomimages :faker.image.food()
    };
    GetRandomimages = () => {
        this.setState({Randomimages:faker.image.food()})
    };

    render() {
        return (
            <div>
                <img src={this.state.Randomimages} alt="image"/>
                <button onClick={this.GetRandomimages}>Random Images</button>
            </div>
        )
    }
}


export default Randomimages