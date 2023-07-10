import React, { useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const Navigate = useNavigate();
  const [text, setText] = useState("");

  const handleClick = () => {
    setText("");
    Navigate("/");
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length) {
      setText("");
      Navigate(`/videos/${text}`);
    } else {
      alert("검색어를 입력해주세요");
    }
  };

  return (
    <nav className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4 gap-10 bg-dp text-white">
      <div onClick={handleClick} className="flex items-end gap-2 cursor-pointer text-3xl">
        <BsYoutube />
        <h1 className="text-2xl font-bold">Youtube</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" id="search" value={text} placeholder={"Search.."} onChange={handleChange}></input>
          <button name="search">
            <BsSearch />
          </button>
        </form>
      </div>
    </nav>
  );
}
