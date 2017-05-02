import React from 'react';

class AppComponent extends React.Component {
  render () {
    const title = 'Dinner';
    return (
        <div>{title}</div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
