import React, { useState } from "react";
import ExpanseDate from "./ExpanseDate";
import "./ExpanseItem.css";
import Card from "../UI/Card";

function ExpanseItem(props) {
  //  const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle("Updated!");
  //   console.log(title);
  // };

  return (
    <Card className="expense-item">
      <ExpanseDate date={props.date} />

      <div className="expense-item__description">
        {/* <h2>{title}</h2> */}
        <h2> props.title</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
}

export default ExpanseItem;
