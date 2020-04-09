import React, { useState, useEffect } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  const handleCountryChange = (country) => {
    fetchData(country).then((data) => {
      setData(data);
      setCountry(data);
    });
  };

  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, []);

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country}/>
    </div>
  );
};

export default App;
