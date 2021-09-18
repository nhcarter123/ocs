import React from 'react';
import { Layout, Menu } from 'antd';
import { Redirect, Route } from 'react-router-dom';
import { find } from 'lodash';
import { History } from 'history';
import { makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';

import { StateSchema } from 'state/types/store';
import { Pages } from 'app/types/pages';

import PoolsPage from 'app/components/pages/tournament/PoolsPage';
import ContentHeader from 'app/components/ContentHeader';

const { Header, Content } = Layout;

// todo move to other folder
const useStyles = makeStyles({
  root: {
    padding: '2px'
  },
  header: {
    position: 'fixed',
    zIndex: 1,
    width: '100%',
    display: 'contents'
  }
});

type TournamentPageProps = {
  history: History;
};

const ActiveTournamentPage = (props: TournamentPageProps): JSX.Element => {
  const classes = useStyles();

  const tournament = useSelector((state: StateSchema) =>
    find(
      state.tournaments,
      (tournament) => tournament.id === state.activeTournament
    )
  );

  return tournament ? (
    <div className={classes.root}>
      <ContentHeader title={tournament.name} />
      <Layout>
        <Header className={classes.header}>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item
              key="2"
              onClick={(): void => props.history.push(Pages.pools)}
            >
              Pools
            </Menu.Item>
            <Menu.Item
              key="3"
              onClick={(): void => props.history.push(Pages.tournamentPlayers)}
            >
              Players
            </Menu.Item>
            <Menu.Item
              key="4"
              onClick={(): void => props.history.push(Pages.rounds)}
            >
              Rounds
            </Menu.Item>
            <Menu.Item
              key="5"
              onClick={(): void => props.history.push(Pages.crosstable)}
            >
              Crosstable
            </Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px' }}>
          <Redirect from={'/'} exact to={Pages.pools} />
          <Route path={Pages.pools} component={PoolsPage} />
          <Route path={Pages.tournamentPlayers} component={PoolsPage} />
          <Route path={Pages.rounds} component={PoolsPage} />
          <Route path={Pages.crosstable} component={PoolsPage} />
        </Content>
      </Layout>
    </div>
  ) : (
    <></>
  );
};

export default ActiveTournamentPage;
