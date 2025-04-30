import './List.css';
import { useState, useEffect } from 'react';

export default function List({ list }) {

  const [animalsList, setAnimalsList] = useState([...list]);

  function chooseRandomElement() {
    let inactiveElement = animalsList.filter((item) => !item.active);

    if (inactiveElement.length > 0) {
      let randomIndex = Math.floor(Math.random() * inactiveElement.length);

      setAnimalsList(prevList => {
        let newList = [...prevList];
        let selectedItem = inactiveElement[randomIndex];
        let selectedIndex = prevList.findIndex(item => item === selectedItem);
        newList[selectedIndex].active = true;
        return newList;
      });
    }
  }

  function checkAreAllEllementsActiv() {
    return animalsList.every((item) => item.active);
  }

  useEffect(() => {
    let myInterval = setInterval(() => {
      chooseRandomElement();
      if(checkAreAllEllementsActiv()) {
        clearInterval(myInterval);

      }
    }, 1000);
  }, []);


  return (
    <>
      <table className={'list__table'}>
        <tbody>
        {list.map((item, index) => (
          <tr key={index} className={item.active ? 'active' : ''}>
            <td>{item.type}</td>
            <td>{item.icon}</td>
          </tr>
        ))}

        </tbody>
      </table>

    </>
  );

}