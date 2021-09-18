import React, { useState } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import naturalCompare from 'string-natural-compare';
import { StateSchema } from 'state/types/store';
import moment from 'moment';
import { History } from 'history';

import DeleteTournamentButton from 'app/components/buttons/DeleteTournamentButton';
import TableSearchBar from 'app/components/TableSearchBar';
import AddTournamentButton from 'app/components/buttons/AddTournamentButton';

import { Tournament } from 'state/types/tournament';
import ActiveTournamentActionsProvider from 'state/actions/activeTournamentActionsProvider';
import { Pages } from 'app/types/pages';

// todo move to other folder
const useStyles = makeStyles({
  root: { maxWidth: '1000px', margin: 'auto' },
  table: {
    '& .ant-table-sticky-holder': {
      top: '104px !important'
    }
  }
});

type EditableTableProps = Parameters<typeof Table>[0];
type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

type TournamentsTableProps = {
  history: History;
};

const TournamentsTable = (props: TournamentsTableProps): JSX.Element => {
  const classes = useStyles();
  const [filterTerm, setFilterTerm] = useState('');

  const tournaments = useSelector((state: StateSchema) => {
    if (!filterTerm.length) {
      return state.tournaments;
    }

    return state.tournaments.filter(
      (tournament) =>
        tournament.name.toLowerCase().includes(filterTerm) ||
        moment(tournament.date)
          .format('MMMM Do, YYYY')
          .toLowerCase()
          .includes(filterTerm)
    );
  });

  const dispatch = useDispatch();

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: {
        compare: (a: Tournament, b: Tournament): number =>
          naturalCompare(a.name, b.name)
      },
      render: (name: string, record: Tournament): JSX.Element => (
        <a
          onClick={(): void => {
            dispatch(ActiveTournamentActionsProvider.set({ id: record.id }));
            props.history.push(Pages.activeTournament);
          }}
        >
          {name}
        </a>
      )
    },
    {
      title: 'Date',
      dataIndex: 'date',
      render: (date: Date): string => moment(date).format('MMMM Do, YYYY'),
      sorter: {
        compare: (a: Tournament, b: Tournament): number =>
          moment(a.date).unix() - moment(b.date).unix()
      }
    },
    {
      title: 'Average Rating',
      dataIndex: 'avgRating',
      width: '15%',
      sorter: {
        compare: (a: Tournament, b: Tournament): number =>
          (a.avgRating || 0) - (b.avgRating || 0)
      }
    },
    {
      title: 'Max Rating',
      dataIndex: 'maxRating',
      width: '15%',
      sorter: {
        compare: (a: Tournament, b: Tournament): number =>
          (a.maxRating || 0) - (b.maxRating || 0)
      }
    },
    {
      dataIndex: 'delete',
      width: '50px',
      render: (_: any, record: Tournament): JSX.Element => (
        <DeleteTournamentButton id={record.id} />
      )
    }
  ];

  return (
    <div className={classes.root}>
      <TableSearchBar
        renderButton={(): JSX.Element => <AddTournamentButton />}
        setFilterTerm={setFilterTerm}
      />
      <Table
        className={classes.table}
        columns={columns as ColumnTypes}
        dataSource={tournaments}
        size={'small'}
        pagination={{ pageSize: 50 }}
        rowKey={'id'}
        sticky
      />
    </div>
  );
};
export default TournamentsTable;
