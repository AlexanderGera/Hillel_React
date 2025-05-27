import './Rud.scss';
import { useState, useEffect, useDebugValue } from 'react';
import { USERS_LIST } from '../../Data.jsx';
import ChangeNameButton from '../ChangeNameButton/ChangeNameButton.jsx';
import DeleteButton from '../DeleteButton/DeleteButton.jsx';
import Form from '../Form/Form.jsx';

export default function Rud() {

  const [usersList, setUsersList] = useState([]);

  //получаю данные пользователей
  let getUsersList = () => {
    return fetch(USERS_LIST)
      .then(response => {
        if (!response.ok) {
          throw new Error('Mistakes in getting Data-list');
        }
        return response.json();

      })
      .catch(error => {
        console.log('Es gibt ein Fehler', error);
      });
  };


  useEffect(() => {
    console.log(usersList);
    getUsersList().then(data => {
      setUsersList(data);
    });
  }, []);


  // удаление элемента - пользователя
  let elementDelete = (id) => {
    fetch(USERS_LIST + `/${id}`, { method: 'DELETE' })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Mistakes in Delete');
        }
      })
      .then(() => {
        setUsersList((prevState) => prevState.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });

  };

  //изменение имени
  let changeName = (element) => {
    console.log(element.name);
    let newName = prompt('Change name:', element.name);
    fetch(USERS_LIST + `/${element.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: newName }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Mistakes in Changing the Name');
        }
        return response;
      })
      .then((response) => response.json())
      .then((response) => {
        setUsersList((prevState) =>
          prevState.map((element) => {
            if (element.id === response.id) element = response;
            return element;
          }),
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };


  let checkArrayElements = (item) => {
    return Object.entries(item)
      .filter(([key]) => key !== 'id')
      .map(([key, value]) => {
        if (typeof value === 'object') {
          return (
            <ul>
              <span className={'usersList__item bold'}>{key}:</span>
              <li>{checkArrayElements(value)}</li>
            </ul>
          );
        } else {
          return (
            <li>
              <span className={'usersList__item'}>{key} : {value}</span>
            </li>
          );
        }
      });
  };

  //функция отправки нового юзера POST
  let postNewUser = (newUser) => {
    fetch(USERS_LIST, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => {
        if (!response) {
          throw new Error('Mistakes in POST');
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        setUsersList(data);
      })
      .catch(error => {
        console.log('Es gibt ein Fehler', error);
      });

  };



  //забираю лист из формы и передаю его в handleFormSubmit
  let handleFormSubmit = (newUser) => {
    let newUserWithId;
    getUsersList().then((data) => {
      if (data && data.length > 0) {
        let newUserID = Math.max(...data.map(user => user.id )) + 1;
        newUserWithId = { ...newUser, id: newUserID };
        postNewUser(newUserWithId);
        console.log(newUserWithId);
      }
    });


  };


  return (
    <>
      <Form text={'Add Item'} formSubmiteToRud={handleFormSubmit} />
      <ol>
        {usersList.map((elements) =>
          <ul>
            {checkArrayElements(elements)}
            <ChangeNameButton onClick={() => changeName(elements)} text={'Change name'} />
            <DeleteButton onClick={() => elementDelete(elements.id)} text={`Delete User's info`} />
          </ul>,
        )}
      </ol>

    </>
  );

}