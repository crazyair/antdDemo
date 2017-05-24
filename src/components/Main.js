require('normalize.css/normalize.css');
require('styles/App.less');

import React from 'react';
import {Button, DatePicker} from 'antd';
let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator"/>
        <div className="notice">Please edit
          <code>src/components/Main.js</code>to get starte!</div>
        <Button type="primary">Primary</Button>
        <DatePicker/>

      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
