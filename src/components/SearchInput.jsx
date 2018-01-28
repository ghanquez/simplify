import * as React from "react";
import styled from "styled-components";
import FaSearch from "react-icons/lib/fa/search";
import { FormGroup, InputGroup, FormControl } from "react-bootstrap";

const Panel = styled.div`
  background-color: #440784;
  display: flex;
  padding: 10px;
`;
const Icon = styled.span`padding-right: 15px;`;
const Input = styled.input`
  background-color: #440784;
  border: none;
  color: #917cbe;
  outline: none;
  width: 100%;
`;

export default class SearchInput extends React.Component {
  render() {
    return (
      <Panel>
        <Icon>
          <FaSearch />
        </Icon>
        <Input type="text" placeholder="Search" />
      </Panel>
    );
  }
}
