import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`weather in ${props.city} is ${response.data.main.temp}`);
  }
  let apiKey = "094780c710fa4efd669f0df8c3991927";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);

  return <h1>hello</h1>;
}
