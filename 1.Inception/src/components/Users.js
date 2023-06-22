import {useState,useEffect} from "react";

const User=()=>{
    const [count,setCount]=useState(0);
    const [count2,setCount2]= useState(1);

    useEffect(()=>{
        //API CALL HERE

    },[]);
    async function getUserInfo(){
        // const data=await
    }

    return (<div>
<h1>Count={count}</h1>
<h1>Count2={count2}</h1>
<h2>name:Ksk</h2>
<h3>Location:Temp</h3>
<h4>contact:@ksk</h4>
    
    </div>)
}
export default User;