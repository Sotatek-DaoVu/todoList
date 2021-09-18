import React, { useState } from "react";
import "./style.css";

function FormUpdate({ item, onSubmitUpdate }) {
  const [titleUpdate, setTitleUpdate] = useState(item.title);
  const [desUpdate, setDesUpdate] = useState(item.des);
  const [dateUpate, setDateUpdate] = useState(item.date);
  const [priorityUpate, setPriorityUpdate] = useState(item.priority);
  const [id, setId] = useState(item.id);

  const handleChangeTitle = (e) => {
    setTitleUpdate(e.target.value);
  };
  const handleChangeDes = (e) => {
    setDesUpdate(e.target.value);
  };
  const handleChangePriority = (e) => {
    setPriorityUpdate(e.target.value);
  };
  const handleChangeDate = (e) => {
    setDateUpdate(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    onSubmitUpdate({
      id: id,
      titleUpdate: titleUpdate,
      desUpdate: desUpdate,
      dateUpate: dateUpate,
      priorityUpate: priorityUpate,
    });
  };

  return (
    <form className="form-update" onSubmit={handleUpdate}>
      <div className="form-element">
        <input type="text" value={titleUpdate} onChange={handleChangeTitle} />
      </div>

      <div className="form-element">
        <label htmlFor="">Description</label>
        <textarea
          value={desUpdate}
          onChange={handleChangeDes}
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>

      <div className="form-date form-element">
        <div className="ngu">
          <label htmlFor="">Due date</label>
          <input type="date" value={dateUpate} onChange={handleChangeDate} />
        </div>
        <div className="ngu ngu1">
          <div htmlFor="">Piority</div>
          <select value={priorityUpate} onChange={handleChangePriority}>
            <option value="normal">normal</option>
            <option value="low">low</option>
            <option value="high">high</option>
          </select>
        </div>
      </div>
      <button>UPDATE</button>
    </form>
  );
}

export default FormUpdate;
