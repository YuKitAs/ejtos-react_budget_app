import React, { useContext, useEffect, useState } from "react";
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

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          Currency ({currency} {currencies.get(currency)} )
        </label>
      </div>

      <select
        className="custom-select"
        id="inputGroupSelect02"
        onChange={(event) => {
          setCurrency(event.target.value);
          dispatch({
            type: "CHG_CURRENCY",
            payload: event.target.value,
          });
        }}
      >
        <option value="$" name="dollar">
          $ Dollar
        </option>
        <option value="£" name="pound" selected>
          £ Pound
        </option>
        <option value="€" name="euro">
          € Euro
        </option>
        <option value="₹" name="ruppee">
          ₹ Ruppee
        </option>
      </select>
    </div>
  );
};

export default Currency;
