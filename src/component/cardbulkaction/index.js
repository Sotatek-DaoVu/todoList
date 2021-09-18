import React from "react";
import "./style.css";

function CardBulkAction({ onRemoveAllChecked }) {
  return (
    <div className="card-bulk-container">
      <div className="bulk">Bulk action:</div>
      <button className="btn btn-done">Done</button>
      <button className="btn btn-remove" onClick={() => onRemoveAllChecked()}>
        Remove
      </button>
    </div>
  );
}

export default CardBulkAction;
