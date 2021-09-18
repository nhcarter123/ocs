import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  ApartmentOutlined,
  UserOutlined,
  SettingOutlined
} from '@ant-design/icons';
import { Route, Redirect, useHistory } from 'react-router-dom';

import PlayersPage from 'app/pages/general/PlayersPage';
import TournamentsPage from 'app/pages/general/TournamentsPage';
import ActiveTournamentPage from 'app/pages/general/ActiveTournamentPage';
import SettingsPage from 'app/pages/general/SettingsPage';

import { Pages } from 'app/types/pages';
import { useSelector } from 'react-redux';
import { StateSchema } from 'state/types/store';

const { Header, Content, Footer, Sider } = Layout;

const PageLayout = (): JSX.Element => {
  const history = useHistory();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState(['2']);

  const activeTournament = useSelector(
    (state: StateSchema) => state.activeTournament
  );

  const onCollapse = (isCollapsed: boolean): void =>
    setIsCollapsed(isCollapsed);

  history.listen((event) => {
    const pathname = event.pathname as Pages;

    const index = Object.values(Pages).indexOf(pathname);

    if (index < 4) {
      setSelectedKeys([(index + 1).toString()]);
    }
  });

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
        Tournament Software Name
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
        <Menu theme="light" selectedKeys={selectedKeys} mode="inline">
          {activeTournament && (
            <Menu.Item
              key="1"
              icon={<ApartmentOutlined />}
              onClick={(): void => history.push(Pages.activeTournament)}
            >
              Active Tournament
            </Menu.Item>
          )}
          <Menu.Item
            key="2"
            icon={<UserOutlined />}
            onClick={(): void => history.push(Pages.players)}
          >
            Players
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<ApartmentOutlined />}
            onClick={(): void => history.push(Pages.tournaments)}
          >
            Tournaments
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<SettingOutlined />}
            onClick={(): void => history.push(Pages.settings)}
          >
            Settings
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout className="site-layout" style={{ marginTop: 64 }}>
        <Content style={{ padding: '0 40px' }}>
          <Redirect from={'/'} exact to={Pages.players} />
          <Route
            path={Pages.activeTournament}
            render={(props): JSX.Element => (
              <ActiveTournamentPage {...props} history={history} />
            )}
          />
          <Route path={Pages.players} component={PlayersPage} />
          <Route
            path={Pages.tournaments}
            render={(props): JSX.Element => (
              <TournamentsPage {...props} history={history} />
            )}
          />
          <Route path={Pages.settings} component={SettingsPage} />
        </Content>

        <Footer style={{ textAlign: 'center' }}>MIT License</Footer>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
