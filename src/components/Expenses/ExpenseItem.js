import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
// import { useState } from "react";

const ExpenseItem = ({ date, title, amount }) => {
  const [itemTitle, setTitle] = useState(title);

  const clickHandler = () => {
    setTitle('Updated!');
    console.log(itemTitle); // For checking
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{itemTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      {/* <button onClick={() => {console.log('Clicked!')}}>Change Title</button>*/}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
