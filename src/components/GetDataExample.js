import React from "react";
import useJsonFetch from "../hooks/useJsonFetch";

export default function GetDataExample({ url }) {
  const [data, isLoading, error] = useJsonFetch(url);

  if (data !== undefined) {
    return <h2>{"Data loaded: "+JSON.stringify(data)}</h2>;
  } else if (isLoading) {
    return <h2>Loading example...</h2>
  } else if (error) {
    return <h2>Error example: "{error.toString()}"</h2>
  } else {
    return null
  };
};