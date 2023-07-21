import React, { useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const Navigate = useNavigate();
  const [text, setText] = useState('');

  const handleClick = () => {
    setText('');
    Navigate('/');
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length) {
      setText('');
      Navigate(`/videos/${text}`);
    } else {
      alert('검색어를 입력해주세요');
    }
  };

  return (
    <nav className="w-full flex content-center items-center p-4 text-2xl mb-4  bg-white border-b border border-dp">
      <div onClick={handleClick} className="flex items-center cursor-pointer text-3xl text-dp">
        <BsYoutube className="text-4xl" />
        <h1 className="text-3xl font-bold">Youtube</h1>
      </div>
      <form onSubmit={handleSubmit} className="w-full flex justify-center gap-3">
        <input
          className="w-7/12 p-2 outline-none bg-dp rounded-full px-5 text-white"
          type="text"
          id="search"
          value={text}
          placeholder={'Search..'}
          onChange={handleChange}
        ></input>
        <button name="search">
          <BsSearch className="text-dp" />
        </button>
      </form>
    </nav>
  );
}
