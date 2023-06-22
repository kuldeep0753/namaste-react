import React from "react";

class ProfileCard extends React.Component {
  //for state and props we do inside the constructor
  constructor(props) {
    super(props);
    //here decleare the state and its a object
    this.state = {
      userInfo: {
        name: "Dummy",
        loaction: "Default",
        avatar_url: "http://dummy",
        count: 90
      }
    };
  }
  async componentDidMount() {
   this.timer= setInterval(()=>{console.log("Mount")},1000)
    const data = await fetch("https://api.github.com/users/kuldeep0753");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo:json
    });
  }
  componentDidUpdate(){


  }
  componentWillUnmount(){
    clearInterval(this.timer);
    console.log("ComponentWillUnmount");
  }
  render() {
    // const { count } = this.state; //Destructuring the object
    const { name, loaction, avatar_url, count } = this.state.userInfo;
    return (
      <div>
        <h1>Profile is class based component</h1>
        <p>Name:{this.props.person}</p>
        <img src={avatar_url} />
        {/* way to use the state  */}
        <p>State Value: {count}</p>
        <button
          onClick={() => {
            //We can't mutate state directly
            // this.setState({count:++count})
          }}
        >
          Click
        </button>
      </div>
    );
  }
}
export default ProfileCard;
