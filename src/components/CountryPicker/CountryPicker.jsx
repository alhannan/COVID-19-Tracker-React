import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./CountryPicker.module.css";

import { fetchCountries } from "../../api";

const CountryPicker = () => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    fetchCountries().then((countries) => setFetchedCountries(countries));
  }, [setFetchedCountries]);

  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect>
        {/* <h1>{fetchCountries}</h1> */}
        <option value="global">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
