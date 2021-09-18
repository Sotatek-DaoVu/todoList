import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
import FormUpdate from "../formUpdate";

function CardToDo({
  todoList,
  onRemove,
  getItemChecked,
  handleDetail,
  onSubmitUpdate,
}) {
  return todoList.map((item, index) => (
    <>
      <div className="card-container" key={index}>
        <div>
          <input
            className="check-box"
            type="checkbox"
            checked={item.isChecked}
            onChange={() => getItemChecked(item.id)}
          />
        </div>
        <div className="card-title">{item.title}</div>
        <button className="btn btn-blue" onClick={() => handleDetail(item.id)}>
          Detail
        </button>
        <button className="btn btn-red" onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </div>

      {item.isShowModal ? (
        <FormUpdate item={item} onSubmitUpdate={onSubmitUpdate} />
      ) : (
        ``
      )}
    </>
  ));
}

CardToDo.propTypes = {
  todoList: PropTypes.array,
};

export default CardToDo;
