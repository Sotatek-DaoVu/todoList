import React, { useState } from "react";
import "./style.css";

function Form(props) {
  var curr = new Date();
  curr.setDate(curr.getDate());
  var curDate = curr.toISOString().substr(0, 10);

  const { onSubmit } = props;
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [date, setDate] = useState(curDate);
  const [priority, setPriority] = useState("normal");

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeDes = (e) => {
    setDes(e.target.value);
  };
  const handleChangePriority = (e) => {
    setPriority(e.target.value);
  };
  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };
  const handleSummit = (e) => {
    e.preventDefault();
    onSubmit({
      isChecked: false,
      id: Math.floor(Math.random() * 10000),
      title: title,
      des: des,
      date: date,
      priority: priority,
      isShowModal: false,
    });
    setTitle("");
    setDes("");
    setDate(curDate);
    setPriority("normal");
  };

  return (
    <div className="form-container">
      <form className="form-body" onSubmit={handleSummit}>
        <h3 className="title">New Task</h3>
        <div className="form-element">
          <input
            // className =
            type="text"
            value={title}
            onChange={handleChangeTitle}
            placeholder="Add new task..."
          />
        </div>

        <div className="form-element">
          <div htmlFor="">Description</div>
          <textarea
            value={des}
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={handleChangeDes}
          ></textarea>
        </div>

        <div className="form-date form-element">
          <div className="ngu">
            <div htmlFor="">Due date</div>
            <input
              type="date"
              onChange={handleChangeDate}
              value={date}
              min={curDate}
            />
          </div>

          <div className="ngu ngu1">
            <div htmlFor="">Piority</div>
            <select value={priority} onChange={handleChangePriority}>
              <option value="normal">normal</option>
              <option value="low">low</option>
              <option value="high">high</option>
            </select>
          </div>
        </div>
        <button>Add</button>
      </form>
    </div>
  );
}

export default Form;
