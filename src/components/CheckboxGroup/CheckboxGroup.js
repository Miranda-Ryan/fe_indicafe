import React, { useState } from "react";
import "./CheckBoxGroup.css";

const CheckboxGroup = ({ categories, handleFiltering }) => {
  const [selected, setSelected] = useState([]);

  const handleSelected = (category) => {
    // Check if category is already selected
    const alreadySelected = selected.indexOf(category);

    // make a copy of the selected array
    const newSelectedArray = [...selected];

    if (alreadySelected !== -1) {
      newSelectedArray.splice(alreadySelected, 1);
    } else {
      newSelectedArray.push(category);
    }

    setSelected(newSelectedArray);
    handleFiltering(newSelectedArray);
  };

  const renderCheckboxGroup = () => (
    <div className="checkbox-group">
      <ul>
        {categories.map((category) => {
          return (
            <li key={category._id}>
              <div className="form-check">
                <label className="form-check-label" style={{ float: "left" }}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={() => handleSelected(category._id)}
                    value={""}
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

  return <>{renderCheckboxGroup()}</>;
};

export default CheckboxGroup;
