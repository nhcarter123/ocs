import React from 'react';
import { Table } from 'antd';
import { useSelector } from 'react-redux';
import { StateSchema } from 'state/types/store';
import { Player } from 'state/types/player';
import naturalCompare from 'string-natural-compare';

const App = (): JSX.Element => {
  const players = useSelector((state: StateSchema) => state.players);

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
    }
  ];

  return <Table columns={columns} dataSource={players} size={'small'} />;
};
export default App;
