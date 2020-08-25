import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

export default function ClubPreference(props) {
  const [activeOption, setActiveOption] = useState(0);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showOptions, setshowOptions] = useState(false);
  const [userInput, setuserInput] = useState("");

  useEffect(() => {
    if (showOptions === false && userInput !== "") {
      props.addTeam(userInput);
    }
  }, [showOptions, userInput]);

  const onClubChange = (e) => {
    const options = props.teams.map((team) => team.name);
    const userInput = e.currentTarget.value;
    const filteredOptions = options.filter(
      (option) => option.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    setActiveOption(0);
    setFilteredOptions(filteredOptions);
    setshowOptions(true);
    setuserInput(userInput);
  };

  const onClubClick = (e) => {
    setActiveOption(0);
    setFilteredOptions([]);
    setshowOptions(false);

    setuserInput(e.currentTarget.innerText);
  };

  let optionList;
  if (showOptions && userInput) {
    if (filteredOptions.length) {
      optionList = (
        <ul className="options">
          {filteredOptions.map((optionName, index) => {
            let className;
            if (index === activeOption) {
              className = "option-active";
            }
            return (
              <li className={className} key={optionName} onClick={onClubClick}>
                {optionName}
              </li>
            );
          })}
        </ul>
      );
    } else {
      optionList = (
        <div className="no-options">
          <em>No Option!</em>
        </div>
      );
    }
  }

  return (
    <Form.Group controlId="formBasicClub">
      <Form.Control
        value={userInput}
        onChange={onClubChange}
        type="text"
        placeholder={props.defValue}
        required
      />
      {optionList}
    </Form.Group>
  );
}
