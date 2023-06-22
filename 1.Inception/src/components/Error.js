import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      OOPS Something Went wrong
      <h1>
        {err.status}:{err.error.message}
      </h1>
    </div>
  );
};

export default Error;
