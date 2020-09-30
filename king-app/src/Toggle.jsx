import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ToggleContainer = styled.button`
  font-size: 1rem;
  width: 2em;
  height: 2em;
  border: 0.125em solid ${({ theme: { text } }) => text};
  border-radius: 1.4em;
  margin: 0 1800px;
  padding: 0.225em;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;
  justify-content: end;
 
 

  

  background: ${({ theme: { body } }) => body};
  cursor: pointer;
  transition: all 0.3s linear;
`;

const Switch = styled.div`
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  background-color: ${({ theme: { text } }) => text};
  /* position: relative; */
  margin-right: 50px;
  transform: ${({ theme: { name } }) =>
    name === "light" ? "translateX(0)" : "translateX(2.5em)"};
  transition: inherit;
`;

const Toggle = ({ onToggle }) => {
  return (
    <ToggleContainer onClick={onToggle}>
      <Switch />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default Toggle;
