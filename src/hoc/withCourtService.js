
import React from 'react';
import CourtServiceContext from '../contexts/CourtServiceContext';


const withRestoService = () => (WrappedComponent) => {
  return (props) => {
    return (
      <CourtServiceContext.Consumer>
        {
          (CourtService) => {
            return <WrappedComponent {...props} CourtService={CourtService} />
          }
        }
      </CourtServiceContext.Consumer>
    )
  }
};

export default withRestoService;
