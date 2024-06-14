import { useRef, useState } from "react";

import ChevronDownIcon from "../../assets/icons/chevron-down.svg";
import ChevronUpIcon from "../../assets/icons/chevron-up.svg";
import CheckCircle from "../../assets/icons/CheckCircle.svg";

import { Container, CategorySelect, SelectButton, SelectedValue, Chevrons, OptionsList } from './styles';

export function Select({Circle, Id, CurrentOption, OptionsToSelect, onSelect, isConsumable, ...rest}) {
  const [options, setOptions] = useState(["Opção 1", "Opção 2"]);
  const [optionSelected, setOptionSelected] = useState("Pendente");
  
  const inputOptionsViewButtonRef = useRef();
  
  function changeOptionSelected(option) {
    setOptionSelected(option);
    inputOptionsViewButtonRef.current.click();

    if(isConsumable) {
      onSelect && onSelect(option);
    }else {
      onSelect && onSelect(Id, option);
    };
  };
  function toggleOptionsViewButton() {
    inputOptionsViewButtonRef.current.classList.toggle("open");
  };

  useState(() => {
    setOptions(OptionsToSelect);
    setOptionSelected(CurrentOption || options[0]);
  }, []);

  return(
    <Container {...rest}>
      <CategorySelect className="category-select">
        <label htmlFor="options-view-button" className="sr-only" >Status</label>
        <input type="checkbox" name="" className="options-view-button" 
          ref={inputOptionsViewButtonRef}
          onClick={e => toggleOptionsViewButton(e)}
        />

        <SelectButton className="select-button">
          <SelectedValue className="selected-value" >
            {Circle && Circle(optionSelected)}
            {optionSelected}
          </SelectedValue>

          <Chevrons className="chevrons">
            <img className="down-icon" src={ChevronDownIcon} alt="Ícone de Select fechado" />
            <img className="up-icon" src={ChevronUpIcon} alt="Ícone de Select aberto" />
          </Chevrons>
        </SelectButton>
      </CategorySelect>

      <OptionsList className="options-list">
        { options && options.map((option, index) => (
          <li className="option" key={index} 
            onClick={e => changeOptionSelected(option, e)}
          >
            <input type="radio" name="category" 
              value={option} data-label={option} onClick={e => (e.target.dataset.label)}
            />
            {Circle && Circle(option)}
            <span className="label" >{option}</span>
            <img className="check" src={CheckCircle} />
          </li>
        ))}
      </OptionsList>
    </Container>
  );
};