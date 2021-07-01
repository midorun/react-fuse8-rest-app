import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles';
import App from './containers/App';
import CourtServiceContext from './contexts/CourtServiceContext';
import CourtService from './services/CourtService';
import { BrowserRouter as Router } from 'react-router-dom'

const courtService = new CourtService();
export type CourtServiceType = typeof courtService

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <CourtServiceContext.Provider value={courtService}>
      <Router>
        <App />
      </Router>
    </CourtServiceContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
