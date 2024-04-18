import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export const currencies = new Map([
  ["$", "Dollar"],
  ["£", "Pound"],
  ["€", "Euro"],
  ["₹", "Ruppee"],
]);

const Currency = () => {
  const { dispatch } = useContext(AppContext);
  const [currency, setCurrency] = useState("£");

  const styles = {
    label: {
      marginLeft: "1rem",
      backgroundColor: "#7eec94",
      color: "white",
    },
    select: {
      backgroundColor: "#7eec94",
      color: "white",
      border: "none",
    },
    option: {
      color: "black",
    },
  };

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <label
          style={styles.label}
          className="input-group-text"
          htmlFor="inputGroupSelect01"
        >
          Currency
          <select
            style={styles.select}
            className="custom-select"
            id="currencySelect"
            onChange={(event) => {
              setCurrency(event.target.value);
              dispatch({
                type: "CHG_CURRENCY",
                payload: event.target.value,
              });
            }}
          >
            <option style={styles.option} value="$">
              $ Dollar
            </option>
            <option style={styles.option} value="£" selected>
              £ Pound
            </option>
            <option style={styles.option} value="€">
              € Euro
            </option>
            <option style={styles.option} value="₹">
              ₹ Ruppee
            </option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Currency;
