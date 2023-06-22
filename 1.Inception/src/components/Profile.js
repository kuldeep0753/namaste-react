import ProfileCard from "./ProfileClass";
import { useState } from "react";
export const Profile = ({ name }) => {
  let [count, setCount] = useState(0);
  return (
    <div>
      <h1>Profile working here!!</h1>
      <p>{name}</p>
      <h3>{count}</h3>
      <button
        onClick={() => {
        //   count++;
          console.log("count");
          setCount(++count);
        }}
      >
        Click Me!!
      </button>
      <ProfileCard person={"ksk"} />
    </div>
  );
};
