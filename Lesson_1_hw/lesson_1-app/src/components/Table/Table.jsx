import './Table.css';

export default function Table() {

  const animalGroups = [
    {
      id: 1,
      category: 'Predators',
      animals: [
        { name: 'Lion', color: '#E09C53' },
        { name: 'Tiger', color: '#FF7F0E' },
        { name: 'Wolf', color: '#708090' },
      ],
    },
    {
      id: 2,
      category: 'Herbivores',
      animals: [
        { name: 'Elephant', color: '#A9A9F5' },
        { name: 'Giraffe', color: '#FFC107' },
        { name: 'Zebra', color: '#4B0082' },
      ],
    },
    {
      id: 3,
      category: 'Domestic',
      animals: [
        { name: 'Dog', color: '#FFB6C1' },
        { name: 'Cat', color: '#9370DB' },
        { name: 'Cow', color: '#8BC34A' },
      ],
    },
  ];


//вопрос следующий. Как правильно организовать запись кода в компоненте. Сделать вычисления отдельно,
// и потом вставить для рендеринга в return
  //или же не сразу писать внутри return'a

//   let SomeFunction = () => (
//     <tbody>
//     {animalGroups.map((element, index) => (
//       <tr>
//         <th id={element.id}>{element.category}</th>
//         {element.animals.map((animalKind) => (
//           <td>{animalKind.name}</td>
//         ))}
//       </tr>
//     ))}
//     </tbody>
//   )




  return (

      /*<SomeFunction />*/

    <table className={'table'}>
      <tbody>
      {animalGroups.map((element, index) => (
        <tr key={index}>
          <th id={element.id}>{element.category}</th>
          {element.animals.map((animalKind, index) => (
            <td style={{color: animalKind.color}} key={index}>{animalKind.name}</td>
          ))}
        </tr>
      ))}
      </tbody>
    </table>
  );
}