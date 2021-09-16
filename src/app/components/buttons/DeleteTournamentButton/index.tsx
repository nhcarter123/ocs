import React from 'react';
import { Button, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import TournamentActionsProvider from 'state/actions/tournamentActionsProvider';
import { DeleteTournamentAction } from 'state/types/tournament';

type DeletePlayerButtonProps = {
  id: string;
};

const DeletePlayerButton = (props: DeletePlayerButtonProps): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <Popconfirm
      title="Are you sure?"
      onConfirm={(): DeleteTournamentAction =>
        dispatch(TournamentActionsProvider.delete(props))
      }
    >
      <Button type="primary" shape="circle" icon={<DeleteOutlined />} />
    </Popconfirm>
  );
};

export default DeletePlayerButton;
