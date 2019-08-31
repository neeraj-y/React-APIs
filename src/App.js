import React, { Fragment } from 'react';
import styled from 'styled-components';
import GlobalStyle from './components/globalStyle';
import Header from './components/header';
import Profile from './components/profile';

const AppWrapper = styled.div`
  background-color: #eee;
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <AppWrapper>
        <Header />
        <Profile />
      </AppWrapper>
    </Fragment>
  );
}

export default App;