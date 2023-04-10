import React, { useLayoutEffect, useRef, useState } from 'react';
import './Input.css';

const InputForm = () => {
  const input = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');
  useLayoutEffect(() => {
    const unmount = () => {
      localStorage.setItem('searchValue', input.current!.value || '');
    };
    return () => {
      unmount();
    };
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.currentTarget.value);
  };

  return (
    <div className="search-cont">
      <div>
        <p>{searchValue}</p>
        <input
          className="search"
          type="text"
          placeholder="Search"
          value={searchValue}
          ref={input}
          onInput={handleInput}
        />
        <button type="submit" className="button">
          Search
        </button>
      </div>
    </div>
  );
};
export default InputForm;
