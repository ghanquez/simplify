import * as React from "react";
import styled from "styled-components";
import SearchInput from "./SearchInput";
import NavBar from "./NavBar";
import Tab from "./Tab";

const Panel = styled.div`
  height: 100%;
  width: 390px;
  display: flex;
  flex-direction: column;
`;

const SearchInputStyle = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;

export default class Tasks extends React.Component {
  render() {
    return (
      <Panel>
        <SearchInputStyle>
          <SearchInput />
        </SearchInputStyle>
        <NavBar>
          <Tab>My Tasks</Tab>
          <Tab>In Progress</Tab>
          <Tab>Projects</Tab>
        </NavBar>
      </Panel>
    );
  }
}
