import {
    DesktopOutlined, FileOutlined, LoadingOutlined, PieChartOutlined, TeamOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Breadcrumb, Empty, Layout, Menu, Spin, Table} from 'antd';
import { useEffect, useState } from 'react';
import { getUserData} from '../pages/api/client'

const { Header, Content, Footer, Sider } = Layout;

/**
   * * Defines the structure for what is to return on the client
   * 
   */
const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'First Name',
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Password',
    dataIndex: 'password',
    key: 'password',
  },
  // {
  //   title: 'Date of Birth',
  //   dataIndex: 'dob',
  //   key: 'dob',
  // },
  {
    title: 'PhoneNumber',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'Addres',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Account Created',
    dataIndex: 'created',
    key: 'created',
  },
];

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

export default function SidebarAntD() {

    const [customers, setCustomers] = useState([]);
    const [collapsed, setCollapsed] = useState(false);
    //show the icon while it's fetching our data
    const[fetching, setFetching] = useState(true);

  const fetchCustomers = () =>
      getUserData()
        .then(data => {
            //console.log(data);
            setCustomers(data);
            setFetching(false);
        })

  useEffect(()=>{
   console.log("component is mounted");
   fetchCustomers();
  }, []);

  /**
   * * datasource is what returns the data from the backend
   * * If not fetching, we check whether we have any data: 
   * * If no data we display no data, if there is data we display the actual data
   * 
   */
  const renderCustomers = () =>{
    if(fetching){
      return <Spin indicator={antIcon} />;
    }
    if(customers.length <=0){
      return <Empty/>;
    }
    return <Table 
        dataSource={customers.data} 
        columns={columns} 
        bordered
        title={() => 'Customers'}
        pagination={{
          pageSize: 50,
        }}
        scroll={{
          y: 240,
        }}
        rowKey={(customer)=> customer.id}
        />;
  }

  return (
    <div>

<Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed}
               onCollapse={setCollapsed}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {renderCustomers()}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          By Calvin Teater, Jay Edwards
        </Footer>
      </Layout>
    </Layout>
    </div>
  )
}
