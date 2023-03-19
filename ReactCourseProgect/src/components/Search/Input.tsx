import React from 'react';
import './Input.css';
// eslint-disable-next-line @typescript-eslint/ban-types
export default class InputForm extends React.Component<{}, { [key: string]: string }> {
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = { value: localStorage.getItem('value') || '' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }

  handleFormSubmit = () => {
    const { value } = this.state;
    localStorage.setItem('value', value);
    console.log(value);
  };

  render() {
    return (
      <form onInput={this.handleFormSubmit}>
        <label>
          <div className="label">{this.state.value}</div>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Find:"
          />
        </label>
      </form>
    );
  }
}
