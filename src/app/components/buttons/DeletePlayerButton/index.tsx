import React from 'react';
import { Button, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import PlayerActionsProvider from 'state/actions/playerActionsProvider';
import { DeletePlayerAction } from 'state/types/player';

type DeletePlayerButtonProps = {
  id: string;
};

const DeletePlayerButton = (props: DeletePlayerButtonProps): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <Popconfirm
      title="Are you sure?"
      onConfirm={(): DeletePlayerAction =>
        dispatch(PlayerActionsProvider.delete(props))
      }
    >
      <Button type="primary" shape="circle" icon={<DeleteOutlined />} />
    </Popconfirm>
  );
};

export default DeletePlayerButton;
