import React, { useState, useEffect } from "react";
import "../todo/style.css";
import Form from "../form";
import CardToDo from "../cardtodo";
import CardBulkAction from "../cardbulkaction";

function TodoList() {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todoList")
      ? JSON.parse(localStorage.getItem("todoList"))
      : []
  );
  const [isCheckedList, setIsCheckedList] = useState([]);
  const [isCheckedFilterList, setIsCheckedFilterList] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    checkTrue(todoList);
  }, [todoList]);

  useEffect(() => {
    sortDate(todoList);
  }, [todoList]);

  const sortDate = (todoList) => {
    let sortedDateArr = todoList.sort(
      (a, b) => new Date(...a.date.split("-")) - new Date(...b.date.split("-"))
    );
    setTodoList(sortedDateArr);
  };

  const addTodo = (todoItem) => {
    if (!todoItem.title) {
      alert("title is require!");
      return;
    }
    const newTodoList = [...todoList];
    newTodoList.push(todoItem);
    setTodoList(newTodoList);
  };

  //localStorage
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const onRemove = (itemId) => {
    const removedArr = [...todoList].filter((item) => item.id !== itemId);
    setTodoList(removedArr);

    let newMovedAllFilterList = [...filterList].filter(
      (item) => item.id !== itemId
    );
    setFilterList(newMovedAllFilterList);
    setFilterName("");
  };

  const getItemChecked = (id) => {
    const newTodoList = [...todoList];
    newTodoList.map((item) => {
      if (item.id === id) {
        item.isChecked = !item.isChecked;
      }
    });
    setTodoList(newTodoList);
  };
  const handleDetail = (id) => {
    const newTodoList = [...todoList];
    newTodoList.map((item) => {
      if (item.id === id) {
        item.isShowModal = !item.isShowModal;
      }
    });
    setTodoList(newTodoList);
  };

  const checkTrue = (todoList) => {
    let newCheckedList = [...todoList].filter(
      (item) => item.isChecked === true
    );
    setIsCheckedList(newCheckedList);
  };

  useEffect(() => {
    checkFilterTrue(filterList);
  }, [filterList]);

  const checkFilterTrue = (filterList) => {
    let newCheckedList = [...filterList].filter(
      (item) => item.isChecked === true
    );
    setIsCheckedFilterList(newCheckedList);
  };

  const onRemoveAllChecked = () => {
    let newMovedAllFilterList = [...filterList].filter(
      (item) => item.isChecked !== true
    );
    setFilterList(newMovedAllFilterList);

    let newMovedAllList = [...todoList].filter(
      (item) => item.isChecked !== true
    );
    setTodoList(newMovedAllList);
    setFilterName("");
  };

  const update = (it) => {
    let newTodoListUpdate = [...todoList];
    newTodoListUpdate.map((item) => {
      if (item.id === it.id) {
        item.title = it.titleUpdate;
        item.des = it.desUpdate;
        item.date = it.dateUpate;
        item.priority = it.priorityUpate;
        item.isShowModal = !item.isShowModal;
      }
    });
    setTodoList(newTodoListUpdate);
  };

  const handleSearch = (e) => {
    setFilterName(e.target.value);
  };
  useEffect(() => {
    setFilterList(
      todoList.filter((item) =>
        item.title.toLowerCase().includes(filterName.toLowerCase())
      )
    );
  }, [filterName, todoList]);

  return (
    <div className="container-list">
      <div className="container-container">
        <Form onSubmit={addTodo} />

        <div className="todo-list">
          <h3 className="title">To Do List</h3>
          <input
            type="text"
            onChange={handleSearch}
            value={filterName}
            placeholder="Search..."
          />
          {filterList.map((item, index) => (
            <CardToDo
              key={index}
              item={item}
              onRemove={onRemove}
              getItemChecked={getItemChecked}
              handleDetail={handleDetail}
              onSubmitUpdate={update}
            />
          ))}

          <div className="bulkk">
            {isCheckedList.length > 0 || isCheckedFilterList.length > 0 ? (
              <CardBulkAction onRemoveAllChecked={onRemoveAllChecked} />
            ) : (
              ``
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
