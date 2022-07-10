import React from 'react';
import './App.css';
import { Header, AddContact, ContactList } from './components/index.js';

function App() {
  return (
    <div>
      <Header/>
      <AddContact/>
      <ContactList/>
   </div>
  );
}

export default App;
