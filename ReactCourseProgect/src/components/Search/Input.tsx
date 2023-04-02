import React, { useEffect, useState } from 'react';
import './Input.css';

const InputForm = () => {
  const [searchValue, setSearchValue] = useState(() => {
    const saved = localStorage.getItem('searchValue')!;
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  });
  useEffect(() => {
    localStorage.setItem('searchValue', JSON.stringify(searchValue));
  }, [searchValue]);
  return (
    <div className="search-cont">
      <div>
        <p>{searchValue}</p>
        <input
          className="search"
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
        {searchValue && (
          <button type="submit" className="button" onClick={() => setSearchValue('')}>
            Search
          </button>
        )}
      </div>
    </div>
  );
};
export default InputForm;
