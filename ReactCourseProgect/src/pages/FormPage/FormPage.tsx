import React, { createRef } from 'react';
import Header from '../../components/Header/HeaderComponent';
import './FormPage.css';
import { FormTypes } from './Types/FormType';
class FormPage extends React.Component {
  form: React.RefObject<HTMLFormElement>;
  nameInputRefer: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  countrySelect: React.RefObject<HTMLSelectElement>;
  genderMaleInput: React.RefObject<HTMLInputElement>;
  genderFemaleInput: React.RefObject<HTMLInputElement>;
  profileImgInput: React.RefObject<HTMLInputElement>;
  agreeCheckbox: React.RefObject<HTMLInputElement>;
  constructor(props: never) {
    super(props);
    this.form = React.createRef();
    this.nameInputRefer = createRef();
    this.dateInput = createRef();
    this.countrySelect = createRef();
    this.genderMaleInput = createRef();
    this.genderFemaleInput = createRef();
    this.profileImgInput = createRef();
    this.agreeCheckbox = createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  types: FormTypes[] = [];
  state = {
    isValidName: false,
    isValidDate: false,
    isValidCountry: false,
    isValidGender: false,
    isValidImg: false,
    isValidAgree: false,
    types: this.types,
  };

  //imageSRC = '';
  handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    const fields = {
      name: (this.nameInputRefer.current as HTMLInputElement).value,
      date: (this.dateInput.current as HTMLInputElement).value,
      country: (this.countrySelect.current as HTMLSelectElement).value,
      female: (this.genderFemaleInput.current as HTMLInputElement).checked,
      male: (this.genderMaleInput.current as HTMLInputElement).checked,
      agree: (this.agreeCheckbox.current as HTMLInputElement).checked,
      imageSRC: (this.profileImgInput.current as HTMLInputElement).value,
    };
    event.preventDefault();
    if (fields.name.length < 3) {
      this.setState({ isValidName: true });
    } else {
      this.setState({ isValidName: false });
    }
    if (!fields.date) {
      this.setState({ isValidDate: true });
    } else {
      this.setState({ isValidDate: false });
    }
    if (!fields.country) {
      this.setState({ isValidCountry: true });
    } else {
      this.setState({ isValidCountry: false });
    }
    if (!fields.female && !fields.male) {
      this.setState({ isValidGender: true });
    } else {
      this.setState({ isValidGender: false });
    }
    if (!fields.imageSRC) {
      this.setState({ isValidImg: true });
    } else {
      this.setState({ isValidImg: false });
    }
    if (!fields.agree) {
      this.setState({ isValidAgree: true });
    } else {
      this.setState({ isValidAgree: false });
    }
    if (
      (fields.name ?? '',
      fields.date ?? '',
      fields.country ?? '',
      fields.agree ?? '',
      fields.female ?? '',
      fields.male ?? '',
      fields.imageSRC ?? '')
    ) {
      this.state.types.push(fields);
    }
  }
  render(): React.ReactNode {
    return (
      <div>
        <Header />
        <div className="form">
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
                {this.state.isValidName ? 'Invalid Name, please add birth date!' : ''}
              </p>
              <label>
                Date:
                <input type="date" ref={this.dateInput} />
              </label>
              <span></span>
            </div>
            <div className="container">
              <p className="error">
                {this.state.isValidCountry ? 'Invalid Name, please choose your country!' : ''}
              </p>
              <select name="country" ref={this.countrySelect} defaultValue="">
                <option value="" disabled={true}>
                  Country
                </option>
                <option value="Turkey">Turkey</option>
                <option value="Russia">Russia</option>
                <option value="USA">USA</option>
              </select>
            </div>
            <p className="error">
              {this.state.isValidGender ? 'Invalid Name, please choose your gender!' : ''}
            </p>
            <div className="gender__field">
              <div>
                <input type="radio" id="Man" value="Man" ref={this.genderMaleInput}></input>
                <label>Man</label>
              </div>
              <div>
                <input type="radio" id="Man" value="Man" ref={this.genderFemaleInput}></input>
                <label>Woman</label>
              </div>
            </div>
            <p className="error">
              {this.state.isValidImg ? 'Invalid Name, please download your avatar!' : ''}
            </p>
            <div className="container">
              <label>Choose a profile picture:</label>
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
                ref={this.profileImgInput}
              ></input>
            </div>
            <p className="error">
              {this.state.isValidAgree ? 'Invalid Name, please agree with settings!' : ''}
            </p>
            <div className="container">
              <input type="checkbox" id="scales" name="scales" ref={this.agreeCheckbox}></input>
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
        <div>
          {this.state.types.length
            ? this.state.types.map((item: FormTypes, index) => (
                <div key={index} className="card-container">
                  <p className="card-title">Name: {item.name}</p>
                  <p className="card-title">Date: {item.date}</p>
                  <p className="card-title">Country: {item.country}</p>
                  <p className="card-title">Avatar: {item.imageSRC}</p>
                </div>
              ))
            : ''}
        </div>
      </div>
    );
  }
}

export default FormPage;
