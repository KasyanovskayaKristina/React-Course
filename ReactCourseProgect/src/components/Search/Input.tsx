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
/*class InputForm extends React.Component {
  state = {
    InputVal: localStorage.getItem('InputVal') || '',
  };
  inputRef: React.RefObject<HTMLInputElement>;

  constructor(props: never) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentWillUnmount(): void {
    localStorage.setItem('InputVal', this.inputRef.current!.value);
  }

  handleFormSubmit = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ InputVal: e.currentTarget.value });
  };
  render() {
    const { InputVal } = this.state;
    return (
      <div className="search-cont">
        <div>
          <input
            ref={this.inputRef}
            onInput={this.handleFormSubmit}
            value={InputVal}
            className="search"
            type="text"
            placeholder="Search"
          />
          <button type="submit" className="button">
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default InputForm;*/
