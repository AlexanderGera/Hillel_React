import './Form.scss';
import { useState, useRef, useEffect } from 'react';

export default function Form({text, formSubmiteToRud}) {

  const [list, setList] = useState({});

  let formNameRef = useRef();
  let formUsernameRef = useRef();
  // let formEmail = useRef();
  // let formStreetRef = useRef();
  // let formSuiteRef = useRef();
  // let formCityRef = useRef();
  // let formPhoneRef = useRef();

  //при нажатии на кнопку "Submit" собираю данные из инпутов и передаю их в родительский компонент
  let formSubmitHandler = (event) => {
    event.preventDefault();
    // let newUser = {
    //   name: formNameRef.current.value,
    //   username: formUsernameRef.current.value,
    //   // email: formEmail.current.value,
    //   // address: {
    //   //   street: formStreet.current.value,
    //   //   suite: formSuiteRef.current.value,
    //   //   city:  formCityRef.current.value,
    //   //   phone: formPhoneRef.current.value,
    //   // },
    // };
    let newUser = {...list}
    formSubmiteToRud(newUser);
  };

  //собираю значения из инпутов
  let inputValueGathering = (event) => {
    setList(prevState => ({ ...prevState, [event.target.name]: event.target.value }));

  };


  return (
    <form className="form" onSubmit={formSubmitHandler}>

      <label htmlFor={'name'}>Name:</label>
      <input type="text" name={'name'} id={'name'} ref={formNameRef} onBlur={inputValueGathering} />
      <label htmlFor={'username'}>Username:</label>
      <input type="text" name={'username'} id={'username'} onBlur={inputValueGathering} />
      {/*<label htmlFor={'email'}>E-mail:</label>*/}
      {/*<input type="email" name={'email'} id={'email'} ref={formEmail} />*/}
      {/*<span>Address:</span>*/}
      {/*<label htmlFor={'street'}>Street:</label>*/}
      {/*<input type="text" name={'street'} id={'street'} ref={formStreetRef} />*/}
      {/*<label htmlFor={'suite'}>Suite:</label>*/}
      {/*<input type="text" name={'suite'} id={'suite'} ref={formSuiteRef}/>*/}
      {/*<label htmlFor={'city'}>City:</label>*/}
      {/*<input type="text" name={'city'} id={'city'} ref={formCityRef}/>*/}
      {/*<label htmlFor={'phone'}>Phone:</label>*/}
      {/*<input type="tel" name={'phone'} id={'phone'} ref={formPhoneRef}/>*/}

      <button>{text}</button>

    </form>

  );
};