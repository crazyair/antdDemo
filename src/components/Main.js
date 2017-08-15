require('normalize.css/normalize.css');
require('styles/App.less');

import React from 'react';
import {withRouter} from 'react-router'
import {Tabs,Table,Icon,Popconfirm,message,Row,Col,Button,Steps,Form,Cascader,Input} from 'antd'
const FormItem = Form.Item;
let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  handleSubmit(e) {
    e.preventDefault();
    let nextPath = '';
    const {step} = this.props.router.params;
    if (step == 0) {
      nextPath = 1;
    }
    return this.props.router.push(`/demo/${nextPath}`);
  }
  render() {
    const {step} = this.props.router.params;
    const props = {
      ...this.props
    };
    return (
      <div >
        <Form onSubmit={this.handleSubmit.bind(this)}>
          {step == 0 && <SelectDemo {...props}/>}
          {step == 1 && <SelectDemo2 {...props}/>}
        </Form>
      </div>
    );
  }
}


class SelectDemo extends React.Component {
  constructor(props) {
      super(props);
      this.state = {}
  }

  render() {
      const {form: {getFieldDecorator, getFieldValue}} = this.props;
      const options = [{
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [{
          value: 'hangzhou',
          label: 'Hangzhou'
        }],
      }, {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [{
          value: 'nanjing',
          label: 'Nanjing'
        }],
      }];
      
      return (
          <div>
              <FormItem label="选择">
                  {getFieldDecorator("demoitem", {
                      rules: [{required: true, message: "请选择"}],
                  })(
                      <Cascader options={options} placeholder="请选择" showSearch/>
                  )}
              </FormItem>
              <FormItem  >
              <Button size="large" type="primary" htmlType="submit">下一步</Button>
          </FormItem>
          </div>
      );
  }
}



class SelectDemo2 extends React.Component {
  constructor(props) {
      super(props);
      this.state = {}
  }

  render() {
      const {form: {getFieldDecorator, getFieldValue}} = this.props;
      return (
          <div>
              <FormItem label="选择">
                  {getFieldDecorator("demoitem2", {
                      rules: [{required: true, message: "请选择"}],
                  })(
                      <Input />
                  )}
              </FormItem>
              <FormItem  >
              <Button size="large" onClick={() => this.props.router.push('/demo/0')} style={{marginRight: '15px'}}>上一步</Button>
              <Button size="large" type="primary" htmlType="submit">下一步</Button>
          </FormItem>
          </div>
      );
  }
}






AppComponent = withRouter(AppComponent);
AppComponent = Form.create({})(AppComponent);
AppComponent.defaultProps = {};

export default AppComponent;
