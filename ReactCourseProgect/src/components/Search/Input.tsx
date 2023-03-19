import React from 'react';

export default class InputForm extends React.Component<
  {},
  { [key: string]: string }
> {
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
          {this.state.value}
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
