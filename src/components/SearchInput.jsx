import * as React from 'react';
import styled from 'styled-components';
import FaSearch from 'react-icons/lib/fa/search';
import { FormGroup, InputGroup, FormControl } from 'react-bootstrap';
import theme from '../config/theme';

const Panel = styled.div`
  background-color: ${theme.global.backgroundColor};
  display: flex;
  padding: 10px;
`;
const Icon = styled.span`padding-right: 15px;`;
const Input = styled.input`
  background-color: ${theme.global.backgroundColor};
  border: none;
  color: ${theme.searchInput.color};
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
