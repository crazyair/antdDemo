import React from 'react';
import {withRouter} from 'react-router'
import {Tabs, Table, Icon, Popconfirm, message, Row, Col, Button, Steps, Form, Cascader, Input} from 'antd'
const FormItem = Form.Item;

class TableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleSubmit(e) {
    e.preventDefault();
   
    this.props.form.validateFields((errors, values) => {
        
        if (!!errors) {
            console.log('Errors in form!!!', values);
            return;
        }
    });
}

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <div>
          <Form onSubmit={this.handleSubmit.bind(this)} >
         <div>
         <FormItem  label="开户地点" required={true}>
                    <Col span="11">
                        <FormItem >
                            {getFieldDecorator("bank_province", {
                                rules: [{required: true, whitespace: true, message: "请输入省",}],
                            })(
                                <Input type="text"  placeholder="请输入省"/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span="2">
                        <p className="ant-form-split">-</p>
                    </Col>
                    <Col span="11">
                        <FormItem >
                            {getFieldDecorator("bank_city", {
                                rules: [{required: true, whitespace: true, message: "请输入市",}],
                            })(
                                <Input type="text"  placeholder="请输入市"/>
                            )}
                        </FormItem>
                    </Col>
                </FormItem>
         </div>
            <Button size="large" type="primary" htmlType="submit" >保存</Button>
          </Form>
      </div>
    )
  }
}

TableComponent = withRouter(TableComponent);
TableComponent = Form.create({})(TableComponent);

export default TableComponent;
