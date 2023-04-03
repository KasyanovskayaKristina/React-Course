import React, { useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { Form, Button } from 'semantic-ui-react';
import FormCards from '../../components/FormCards/FormCards';
import Header from '../../components/Header/HeaderComponent';
import { Cards } from '../../types/types';
import './FormPage.css';
interface FormData {
  firstName: string;
  date: string;
  country: string;
  gender: boolean;
  avatar: FileList;
  agree: boolean;
}

const FormPage = () => {
  const [items, setItems] = useState<Cards[]>([]);
  const {
    register,
    reset,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    reValidateMode: 'onSubmit',
    mode: 'onSubmit',
  });
  const onSubmit = handleSubmit((data: FieldValues) => {
    if (
      getValues('firstName') &&
      getValues('date') &&
      getValues('country') &&
      getValues('date') &&
      getValues('gender') &&
      getValues('avatar')
    ) {
      const obj = {
        firstName: data.firstName,
        date: data.date,
        country: data.country,
        gender: data.gender,
        avatar: data.avatar[0],
      };
      setItems([...items, obj]);
      reset();
    }
  });
  return (
    <div>
      <Header />
      <Form onSubmit={onSubmit} className="form">
        <h1>LogIn</h1>
        <Form.Field>
          {errors.firstName && <p className="error">Please check the First Name</p>}
          <label>First Name</label>
          <input
            placeholder="First Name"
            type="text"
            {...register('firstName', {
              required: true,
              maxLength: 10,
              minLength: 1,
            })}
          />
        </Form.Field>
        <Form.Field>
          {errors.date && <p className="error">Please check Date</p>}
          <label>Date</label>
          <input placeholder="Last Name" type="date" {...register('date', { required: true })} />
        </Form.Field>
        <Form.Field>
          {errors.country && <p className="error">Please check Country</p>}
          <select {...register('country', { required: true })}>
            <option value="">Country</option>
            <option value="Turkey">Turkey</option>
            <option value="Russia">Russia</option>
            <option value="USA">USA</option>
          </select>
        </Form.Field>
        <Form.Field>
          {errors.gender && <p className="error">Please check Gender</p>}
          <input type="radio" id="man" {...register('gender', { required: true })}></input>
          <label id="label-man">Man</label>
          <input type="radio" {...register('gender', { required: true })} id="woman"></input>
          <label id="label-woman">Woman</label>
        </Form.Field>
        <Form.Field>
          {errors.avatar && <p className="error">Please add Avatar</p>}
          <label>Choose a profile picture:</label>
          <input
            type="file"
            id="avatar"
            {...register('avatar', {
              validate: {
                notEmpty: (value) => value.length > 0 || 'Add avatar',
                typeImg: (value) =>
                  (value.length > 0 && value[0].type.startsWith('image')) || 'Add image format',
              },
            })}
            accept="image/png, image/jpeg"
          ></input>
        </Form.Field>
        <Form.Field>
          {errors.agree && <p className="error">Please agree with settings!</p>}
          <input type="checkbox" id="scales" {...register('agree', { required: true })}></input>
          <label>I agree</label>
        </Form.Field>
        <Button type="submit" className="submit">
          Submit
        </Button>
      </Form>
      <div className="wrap">
        <figure className="loader">
          <div className="chomper"></div>
        </figure>
      </div>
      <div className="cards">
        {items.length
          ? items.map((item: Cards, index) => (
              <FormCards
                key={index}
                firstName={item.firstName}
                date={item.date}
                country={item.country}
                gender={item.gender}
                avatar={item.avatar}
              />
            ))
          : ''}
      </div>
    </div>
  );
};

export default FormPage;
