import React from "react";
import "./FilterBar.scss";

const FilterBar = ({onInputChange, onCheckChange, initialCheckBox}) => {
    const inputChangeHandler = e => onInputChange(e.target.value);
    const checkBoxChangeHandler = e => onCheckChange(e.target.checked);

    return(
        <div className="plant-search-bar">
            <input type="text" onChange={inputChangeHandler} placeholder="Название растения"/>
            <input type="checkbox" onChange={checkBoxChangeHandler} checked={initialCheckBox}/>
        </div>
    );
};

export default FilterBar;