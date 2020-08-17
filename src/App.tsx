import React from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import logo from './logo.svg';
import DefautLayout from './layout/DefaultLayout/DefaultLayout';

function App() {
  return (
    <Container maxWidth="lg">
      <DefautLayout />
    </Container>
  );
}

export default App;
