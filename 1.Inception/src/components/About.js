// import { Outlet } from "react-router-dom";
// import { Profile } from "./Profile";
import ProfileClass from "./ProfileClass";
import {Component} from "react";
import Users from "./Users";
// export const About = () => {
//   return (
//     <div>
//       <h2>About Page</h2>
//       <Profile name={"kuldeeps"}/>
//       {/* <ProfileClass/> */}
//       {/* <Outlet/> */}
//     </div>
//   );
// };

export class About extends Component {
  constructor(props){
    super(props);
    this.state={}
    // console.log("Parent-Constr")
  }
   componentDidMount(){
    //Best place to make an API call;
    // const data=await fetch("");
    // const json = await data.json();
    // console.log("Parent -ComonentDidMount");
  }

  render(){
    console.log("Parent-render");
    return <div>
        <h1>About Us</h1>
        <p>class component</p>
        <ProfileClass name={"Child"}/>
        <Users/>
    </div>
  }
}