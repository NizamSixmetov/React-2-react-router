import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './style.css'
import Navigation from './Components/Navigation';
import Routing from './Components/Routing';

const App = () => {
  return (
    <div>
      <Navigation />
      <Routing/>
    </div>
  )
}

export default App