import React, { useState } from 'react';
import './CheckboxGroup.css';

const CheckboxGroup = ({ categories, handleFiltering }) => {
  //categories & handleFiltering from <Catalog/>
  const [selected, setSelected] = useState([]);

  console.log(
    '🚀 ~ file: CheckboxGroup.js ~ line 7 ~ CheckboxGroup ~ selected',
    selected
  );

  //handleSelected to get the categyId
  const handleSelected = (category) => {
    //La méthode indexOf() renvoie l'indice de la première occurence de la valeur cherchée au sein de la chaîne courante (à partir de indexDébut). Elle renvoie -1 si la valeur cherchée n'est pas trouvée.
    const alreadySelected = selected.indexOf(category); //if alreadySelected is not -1 (if alreadySelected exist), remove the category from the array

    const newSelectedArray = [...selected];

    if (alreadySelected !== -1) {
      newSelectedArray.splice(alreadySelected, 1); //create a new array with the selected category
    } else {
      newSelectedArray.push(category);
    }

    setSelected(newSelectedArray);
    handleFiltering(newSelectedArray);
  };

  const renderCheckboxGroup = () => {
    return (
      <div className="checkbox-group">
        <ul>
          {categories.map((category) => {
            return (
              <li key={category._id}>
                <div className="form-check">
                  <label className="form-check-label" style={{ float: 'left' }}>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      onChange={() => handleSelected(category._id)}
                      value={''}
                    />
                    {category.name}
                  </label>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return <>{renderCheckboxGroup()}</>;
};

export default CheckboxGroup;
