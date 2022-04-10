import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The Weather in ${response.data.name} is ${response.data.main.temp}°C`
    );
  }

  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=bcec07f4d24f0897e35b27235c1cbd67&units=metric`;
  axios.get(apiURL).then(handleResponse);

  return <h2>It's loading...</h2>;
}
