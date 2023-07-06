import React, { useState } from "react";
import "./App.css";
import { BiListPlus, BiTrash, BiSun, BiSolidSun } from "react-icons/bi";

function App() {
  const [isDark, setDark] = useState(false);
  const [state, setState] = useState("all");
  const [list, setList] = useState([
    { isDone: false, content: "장보기" },
    { isDone: true, content: "미용실 가기" },
    { isDone: false, content: "커밋하기" },
  ]);

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length) {
      setList((state) => [...state, { isDone: false, content: value }]);
      setValue("");
    } else {
      alert("내용을 작성해주세요");
    }
    console.log(list);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const removeItem = (element) => {
    setList((state) => state.filter((item) => item.content !== element.content));
  };

  const handleChecked = (index) => {
    const updatedList = list.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          isDone: !item.isDone,
        };
      }
      return item;
    });
    setList(updatedList);
  };

  return (
    <>
      {!isDark ? (
        <img
          alt="bg"
          className="background"
          src="https://images.unsplash.com/photo-1634655377962-e6e7b446e7e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2728&q=80"
        />
      ) : (
        <img
          alt="bg"
          className="background"
          src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80"
        />
      )}

      <div className={`wrapper ${isDark ? "dark" : "light"}`}>
        <div className={`container ${isDark ? "dark" : "light"}`}>
          <div className={`header ${isDark ? "dark" : "light"}`}>
            <div className={`headerFront ${isDark ? "dark" : "light"}`}>
              <button
                className={`headerBtn ${isDark ? "dark" : "light"}`}
                onClick={() => {
                  setState("all");
                }}
              >
                All
              </button>
              <button
                className={`headerBtn ${isDark ? "dark" : "light"}`}
                onClick={() => {
                  setState("progress");
                }}
              >
                in Progress
              </button>
              <button
                className={`headerBtn ${isDark ? "dark" : "light"}`}
                onClick={() => {
                  setState("done");
                }}
              >
                Done
              </button>
            </div>
            <button className="headerBtn" onClick={() => setDark((state) => !state)}>
              {!isDark ? (
                <BiSun className={`darkIcon ${isDark ? "dark" : "light"}`} />
              ) : (
                <BiSolidSun className={`darkIcon ${isDark ? "dark" : "light"}`} />
              )}
            </button>
          </div>
          <div className={`body ${isDark ? "dark" : "light"}`}>
            {state === "all" &&
              list.map((element, idx) => {
                return (
                  <>
                    <div className="item" key={idx}>
                      <div className="itemFront">
                        <input
                          className="checkbox"
                          type="checkbox"
                          checked={element.isDone}
                          onChange={() => handleChecked(idx)}
                        ></input>
                        <span>{element.content}</span>
                      </div>
                      <div className="itemBack">
                        <button
                          className={`buttonRemove ${isDark ? "dark" : "light"}`}
                          onClick={() => {
                            removeItem(element);
                          }}
                        >
                          <BiTrash />
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
            {state === "progress" &&
              list
                .filter((element) => element.isDone === false)
                .map((element, idx) => {
                  return (
                    <>
                      <div className="item" key={idx}>
                        <div className="itemFront">
                          <input
                            className="checkbox"
                            type="checkbox"
                            checked={element.isDone}
                            onChange={() => handleChecked(idx)}
                          ></input>
                          <span>{element.content}</span>
                        </div>
                        <div className="itemBack">
                          <button
                            className={`buttonRemove ${isDark ? "dark" : "light"}`}
                            onClick={() => {
                              removeItem(element);
                            }}
                          >
                            <BiTrash />
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })}
            {state === "done" &&
              list
                .filter((element) => element.isDone === true)
                .map((element, idx) => {
                  return (
                    <>
                      <div className="item" key={idx}>
                        <div className="itemFront">
                          <input
                            className="checkbox"
                            type="checkbox"
                            checked={element.isDone}
                            onChange={() => handleChecked(idx)}
                          ></input>
                          <span>{element.content}</span>
                        </div>
                        <div className="itemBack">
                          <button
                            className={`buttonRemove ${isDark ? "dark" : "light"}`}
                            onClick={() => {
                              removeItem(element);
                            }}
                          >
                            <BiTrash />
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })}
          </div>
          <div className={`footer ${isDark ? "dark" : "light"}`}>
            <form className="formAdd" onSubmit={handleSubmit}>
              <input
                className="inputAdd"
                value={value}
                onChange={handleChange}
                name="addItem"
                type="text"
                placeholder="추가할 일정을 작성해주세요"
              ></input>
              <button name="addItem" className="buttonAdd">
                <BiListPlus className="addIcon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
