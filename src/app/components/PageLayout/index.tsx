import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined
} from '@ant-design/icons';
import { Route, Redirect, useHistory } from 'react-router-dom';

import PlayersPage from 'app/pages/PlayersPage';
import TournamentsPage from 'app/pages/TournamentsPage';

import { Pages } from 'app/types/pages';

const { Header, Content, Footer, Sider } = Layout;

const App = (): JSX.Element => {
  const history = useHistory();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onCollapse = (isCollapsed: boolean): void =>
    setIsCollapsed(isCollapsed);

  // todo replace these styles with makestyles
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          position: 'fixed',
          zIndex: 5,
          width: '100%',
          background: '#48516b',
          color: 'white',
          textAlign: 'center'
        }}
      >
        TEST
      </Header>

      <Sider
        theme={'light'}
        collapsible
        collapsed={isCollapsed}
        onCollapse={onCollapse}
        style={{
          paddingTop: '64px',
          overflow: 'auto',
          height: '100vh',
          position: 'sticky',
          top: 0,
          left: 0
        }}
      >
        <div className="logo" />
        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item
            key="1"
            icon={<PieChartOutlined />}
            onClick={(): void => history.push(Pages.players)}
          >
            Players
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<DesktopOutlined />}
            onClick={(): void => history.push(Pages.tournaments)}
          >
            Tournaments
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<FileOutlined />}
            onClick={(): void => history.push(Pages.settings)}
          >
            Settings
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout
        className="site-layout"
        style={{ padding: '0 50px', marginTop: 64 }}
      >
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <Redirect from={'/'} exact to={Pages.players} />
          <Route path={Pages.players} component={PlayersPage} />
          <Route path={Pages.tournaments} component={TournamentsPage} />
        </Content>

        <Footer style={{ textAlign: 'center' }}>MIT License</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
