//
"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

//
let WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
//
export default function Home() {
  //
  const [place, setPlace] = useState("Pune");

  //
  const getWeatherData = async () => {
    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

    if (place && place.length > 0) {
      try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${WEATHER_API_KEY}`;
        let res = await fetch(url);
        let data = await res.json();
        console.log("GET WEATHER DATA RESPONSE ", data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    getWeatherData();
  }, []);
  //
  return (
    <div>
      <h1>Hey, Welcome to WeatherWise !!</h1>
    </div>
  );
}
