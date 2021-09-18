import React, { useState } from 'react';
import { Table } from 'antd';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import naturalCompare from 'string-natural-compare';
import { StateSchema } from 'state/types/store';

import AddPlayerButton from 'app/components/buttons/AddPlayerButton';
import DeletePlayerButton from 'app/components/buttons/DeletePlayerButton';
import TableSearchBar from 'app/components/TableSearchBar';

import { Player } from 'state/types/player';

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

const PlayersTable = (): JSX.Element => {
  const classes = useStyles();
  const [filterTerm, setFilterTerm] = useState('');

  const players = useSelector((state: StateSchema) => {
    if (!filterTerm.length) {
      return state.players;
    }

    return state.players.filter(
      (player) =>
        player.firstName.toLowerCase().includes(filterTerm) ||
        player.lastName.toLowerCase().includes(filterTerm) ||
        player.rating.toString().includes(filterTerm)
    );
  });

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      sorter: {
        compare: (a: Player, b: Player): number =>
          naturalCompare(a.firstName, b.firstName)
      }
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      sorter: {
        compare: (a: Player, b: Player): number =>
          naturalCompare(a.lastName, b.lastName)
      }
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      width: '15%',
      sorter: {
        compare: (a: Player, b: Player): number => a.rating - b.rating
      }
    },
    {
      title: 'Matches',
      dataIndex: 'matches',
      width: '15%',
      sorter: {
        compare: (a: Player, b: Player): number => a.matches - b.matches
      }
    },
    {
      dataIndex: 'delete',
      width: '50px',
      render: (_: any, record: Player): JSX.Element => (
        <DeletePlayerButton id={record.id} />
      )
    }
  ];

  return (
    <div className={classes.root}>
      <TableSearchBar
        renderButton={(): JSX.Element => <AddPlayerButton />}
        setFilterTerm={setFilterTerm}
      />
      <Table
        className={classes.table}
        sticky
        columns={columns as ColumnTypes}
        dataSource={players}
        size={'small'}
        pagination={{ pageSize: 50 }}
        rowKey={'id'}
      />
    </div>
  );
};
export default PlayersTable;
