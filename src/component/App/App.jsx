import React from 'react';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import '../../styles/common-style.scss';
import './App.scss';

const App = () => (
    <div className="App">
        <Header title="ToDo list" link="#" />
        <Content />
        <Footer />
    </div>
  );

export default App;
