import {
    DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import { useEffect, useState } from 'react';
import { getUserData} from '../pages/api/client'

const { Header, Content, Footer, Sider } = Layout;

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

    const [customer, setCustomers] = useState([]);
    const [collapsed, setCollapsed] = useState(false)

  const fetchCustomers = () =>
      getUserData()
        .then(data => {
            //console.log(data);
            setCustomers(data);
        })

  useEffect(()=>{
   console.log("component is mounted");
   fetchCustomers();
  }, []);

  if(customer.length <=0){
    return "no data";
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
            Bill is a cat.
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
    
 {/* {customer.length <= 0 ? <h1>No Data</h1> : customer?.data.map((customer, index) => {
      return <h1 key={index}>{customer.firstName} {customer.lastName}</h1>
    })
    } */}


 
    </div>
  )
}
