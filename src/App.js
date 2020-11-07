import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Routes from './routes/routes';
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/global.css'

function App() {
  return (
   <BrowserRouter>
    <Routes />
   </BrowserRouter>
  );
}

export default App;
