import React, { useState } from 'react'
import _ from 'lodash';
import './CheckboxGroup.css';


const CheckboxGroup = ({ categories, handleFiltering, categoriesSeleted }) => {


  const [selected, setSelected] = useState(categoriesSeleted);

  const handleSelected = (category) => {


    const alreadySelected = selected.indexOf(category);
    const newSelectedArray = [...selected];

    if (alreadySelected !== -1) {
      newSelectedArray.splice(alreadySelected, 1)
    } else {
      newSelectedArray.push(category);
    }

    setSelected(newSelectedArray);
    handleFiltering(newSelectedArray);

  }

  const renderCheckboxGroup = () => {

    return (
      <div className="checkbox-group">
        <ul>
          {categories.map((category => {
            return (
              <li key={category._id}>
                <div className="form-check">
                  <label className="form-check-label" style={{ float: 'left' }}>
                    <input type="checkbox" className="form-check-input"
                      onChange={() => handleSelected(category._id)}
                      value={category._id}
                      checked={_.includes(selected, category._id)}
                    />
                    {category.name}
                  </label>
                </div>

              </li>
            )
          }))}
        </ul>
      </div>
    )


  }

  return (
    <>
      {renderCheckboxGroup()}
    </>
  )
}

export default CheckboxGroup
