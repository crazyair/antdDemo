require('normalize.css/normalize.css');
require('styles/App.less');

import React from 'react';
import {withRouter} from 'react-router'
import {Tabs, Table, Icon, Popconfirm, message, Row, Col, Button, Steps, Form, Cascader, Input} from 'antd'
import Moment from 'moment';

const FormItem = Form.Item;

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const {changeShow} = this.state;
    const columns = [
      {title: 'test', dataIndex: 'test1', width: 100, fixed: 'left'},
      {title: 'testtesttesttesttesttesttest', dataIndex: 'test2', width: 100, fixed: 'left'},
      {
        title: 'created_time', dataIndex: 'created_time', render: (text, record) => (
        <span>{Moment.unix(text).format("YYYY-MM-DD HH:mm:ss")}</span>
      )
      },
      {
        title: 'testtesttesttesttesttesttest', dataIndex: 'test4', render: (text, record) => (
        <span>{text ? text : '-/-'}</span>
      )
      },
      {title: 'testtesttesttesttesttesttest', dataIndex: 'test5'},
      {title: 'testtesttesttesttesttesttest', dataIndex: 'test6'},
      {title: 'testtesttesttesttesttesttest', dataIndex: 'test7'},
      {title: 'testtesttesttesttesttesttest', dataIndex: 'test8'},
      {title: 'testtesttesttesttesttesttest', dataIndex: 'test9'},
      {title: 'testtesttesttesttesttesttest', dataIndex: 'test10'},
      {title: 'testtesttesttesttesttesttest', dataIndex: 'test11'},
      {title: 'testtesttesttesttesttesttest', dataIndex: 'test12'},
      {title: 'testtesttesttesttesttesttest', dataIndex: 'test13'},
      {title: 'testtesttesttesttesttesttest', dataIndex: 'test14'},
      {title: 'testtesttesttesttesttesttest', dataIndex: 'test15'},
      {title: 'testtesttesttesttesttesttest', dataIndex: 'test16'},
      {title: 'testtesttesttesttesttesttest', dataIndex: 'test17'},
      {title: 'testtesttesttesttesttesttest', dataIndex: 'test18'},
      {title: 'testtesttesttesttesttesttest', dataIndex: 'test19'},
      {title: 'testtesttesttesttesttesttest', dataIndex: 'test20'},
      {title: 'testtesttesttesttesttesttest', dataIndex: 'test21'},
      {title: 'testtesttesttesttesttesttest', dataIndex: 'test22'},
      {title: 'testtesttesttesttesttesttest', dataIndex: 'test23'},
      {title: 'testtesttesttesttesttesttest', dataIndex: 'test24'},
      {title: 'testtesttesttesttesttesttest', dataIndex: 'test25'},
      {title: 'testtesttesttesttesttesttest', dataIndex: 'test26'},
      {title: 'testtesttesttesttesttesttest', dataIndex: 'test27', width: 100, fixed: 'right'},
    ];
    return (
      <div>
        <Button onClick={() => this.setState({changeShow: true})}>显示报错的Table</Button>
        <br/>
        currentSituation
        <Table columns={columns}
               rowKey={record => record.key}
               dataSource={[]}
               size="middle"
               scroll={{x: 5000}}
               bordered
        />
        当是 key 的时候不会报错
        {changeShow && <div>
          expectation
          <Table columns={columns}
                 rowKey={record => record.keys}
                 dataSource={[]}
                 size="middle"
                 scroll={{x: 5000}}
                 bordered
          />
          当不是 key 的时候会报错
        </div>
        }
      </div>
    )
  }
}

AppComponent = withRouter(AppComponent);
AppComponent = Form.create({})(AppComponent);

export default AppComponent;
