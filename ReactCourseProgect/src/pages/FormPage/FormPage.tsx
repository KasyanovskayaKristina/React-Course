import React, { createRef } from 'react';
import Header from '../../components/Header/HeaderComponent';
import './FormPage.css';
class FormPage extends React.Component {
  form: React.RefObject<HTMLFormElement>;
  nameInputRefer: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  countrySelect: React.RefObject<HTMLSelectElement>;
  genderRadioInput: React.RefObject<HTMLInputElement>;
  profileImgInput: React.RefObject<HTMLInputElement>;
  agreeCheckbox: React.RefObject<HTMLInputElement>;
  constructor(props: never) {
    super(props);
    this.form = React.createRef();
    this.nameInputRefer = createRef();
    this.dateInput = createRef();
    this.countrySelect = createRef();
    this.genderRadioInput = createRef();
    this.profileImgInput = createRef();
    this.agreeCheckbox = createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    isValidName: false,
    isValidDate: false,
  };
  handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    const name = (this.nameInputRefer.current as HTMLInputElement).value;
    console.log(name);
    event.preventDefault();
    if (name.length < 3) {
      console.log(this.nameInputRefer.current!.value.length);
      this.setState({ isValidName: true });
    } else {
      this.setState({ isValidName: false });
    }
    if (!this.dateInput.current!.value) {
      this.setState({ isValidDate: true });
    } else {
      this.setState({ isValidDate: false });
    }
  }
  render(): React.ReactNode {
    return (
      <div>
        <Header />
        <div className="form">
          <p>
            Dear Checkers, I apologize, but could you check the work on the last day (for family
            reasons I did not finish in time) Thank you very much!
          </p>
          <p>
            Дорогие проверяющие, я прощу прощения, но могли бы вы проверить работу в последний день
            (по семейным обстоятельствам я не успела вовремя закончить) Спасибо большое!
          </p>
          <form ref={this.form} onSubmit={this.handleSubmit}>
            <h1> Login</h1>
            <p className="error">
              {this.state.isValidName ? 'Invalid Name, please use letters!' : ''}
            </p>
            <div className="container">
              <label>
                Name:
                <input name="name" type="text" ref={this.nameInputRefer} />
              </label>
              <span></span>
            </div>
            <div className="container">
              <p className="error">
                {this.state.isValidName ? 'Invalid Name, please use letters!' : ''}
              </p>
              <label>
                Date:
                <input type="date" ref={this.dateInput} />
              </label>
              <span></span>
            </div>
            <div className="container">
              <select name="user_profile_color_1">
                <option value="1">Turkey</option>
                <option value="2">Russia</option>
                <option value="3">USA</option>
              </select>
            </div>
            <div className="gender__field">
              <div>
                <input type="radio" id="huey" name="drone" value="huey" checked></input>
                <label>Man</label>
              </div>
              <div>
                <input type="radio" id="dewey" name="drone" value="dewey"></input>
                <label>Woman</label>
              </div>
            </div>
            <div className="container">
              <label>Choose a profile picture:</label>
              <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"></input>
            </div>
            <div className="container">
              <input type="checkbox" id="scales" name="scales"></input>
              <label>I agree</label>
            </div>
            <input type="submit" value="Submit" className="submit" />
          </form>
          <div className="wrap">
            <figure className="loader">
              <div className="chomper"></div>
            </figure>
          </div>
        </div>
      </div>
    );
  }
}

export default FormPage;
