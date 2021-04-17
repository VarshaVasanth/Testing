// import React,{Component} from 'react';
// // import Functionalbasedcomponent from "./Components/FunctionBasedComponent"
// // import ClassBasedComponents from "./Components/ClassBasedComponents"
// // import Classbasedcomponentcounter from "./Components/Classbasedcomponentcounter"
// // import Randomnumbers from "./Components/Randomnumbers"
// import Randomimages from "./Components/Randomimages"
// class App extends Component{
//     render(){
//          return <Randomimages/>
//         // <div>
//         // {/* <Functionalbasedcomponent/>
//         // <ClassBasedComponents/> 
//         // <Classbasedcomponentcounter/>
//         // <Randomnumbers/> */}
//         // <Randomimages/>
//         // </div>
//         // );
//     }
// }
// export default App;



import React, { Component } from 'react'
import Childcomponent from "./Components/Childcomponent"
 class App extends Component 
{
    render()
    {
        return (
            <div className="flexbox">
<Childcomponent users={{"varsha",company:"Testyantra"}}>
            <p>
                vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvaaaaaaaaaaaaaaaaaaaaaaaaaaaaarrrrrrrrrrrrrrrrrrrrrrrrssssssssssssssssssssssssssshhhhhhhhhhhhhhhhhhhhhhhhhhhaaaaaaaaaaaaaaaa
            </p>
         </Childcomponent>
<Childcomponent users={{username:"mani",company:"XYZ"}}/> 
<Childcomponent users={{username:"manu",company:"XaZ"}}/> 
<Childcomponent users={{username:"anu",company:"XYmZ"}}/> 
<Childcomponent users={{username:"var",company:"XYZAD"}}/>         
<hr/>
</div>

export default App;
