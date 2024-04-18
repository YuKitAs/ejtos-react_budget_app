import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, currency, remaining, dispatch } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const handleBudgetChange = (event) => {
    let change = event.target.value;
    if (remaining === 0 && change < budget) {
      alert("You cannot reduce the budget value lower than the spending ");
      return;
    }

    setNewBudget(change);

    dispatch({
      type: "SET_BUDGET",
      payload: change,
    });
  };

  return (
    <div className="alert alert-secondary">
      <span>
        <span>Budget: {currency}</span>
        <input
          style={{ width: "60%" }}
          type="number"
          step="10"
          value={newBudget}
          onChange={handleBudgetChange}
        ></input>
      </span>
    </div>
  );
};

export default Budget;
