import React from 'react';
import { Button, Popconfirm, Table } from 'antd';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import naturalCompare from 'string-natural-compare';
import { StateSchema } from 'state/types/store';
import { Player } from 'state/types/player';
import { DeleteOutlined } from '@ant-design/icons';

// todo move to other folder
const useStyles = makeStyles({
  root: {
    maxWidth: '1200px',
    margin: 'auto',
    marginTop: '40px',
    '& .ant-table-sticky-holder': {
      top: '64px !important'
    }
  }
});

type EditableTableProps = Parameters<typeof Table>[0];
type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

const App = (): JSX.Element => {
  const classes = useStyles();
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
    },
    {
      dataIndex: 'delete',
      width: '50px',
      render: (_: any, record: { key: React.Key }): JSX.Element => (
        <Popconfirm
          title="Are you sure?"
          onConfirm={(): void => {
            console.log(record);
          }}
        >
          <Button type="primary" shape="circle" icon={<DeleteOutlined />} />
        </Popconfirm>
      ) // todo move to other component
    }
  ];

  return (
    <div>
      <Table
        sticky
        columns={columns as ColumnTypes}
        dataSource={players}
        size={'small'}
        pagination={{ pageSize: 50 }}
        className={classes.root}
      />
    </div>
  );
};
export default App;
