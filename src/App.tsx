import React from 'react';
import './App.css';
import { DataTabs } from './components/DataTabs';
import { Header } from './components/Header';

class App extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <DataTabs/>
      </>
    );
  }
}

export default App;
