import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Button, Modal } from 'antd';
import AddPlayerForm from 'app/components/AddPlayerForm';

// todo move to other folder
const useStyles = makeStyles({
  root: {
    position: 'sticky',
    top: '50%',
    transform: 'translate(0, -50%)',
    height: '60px'
  }
});

const AddTournamentButton = (): JSX.Element => {
  const classes = useStyles();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (): void => setIsModalVisible(true);
  const handleCancel = (): void => setIsModalVisible(false);

  return (
    <>
      <Button className={classes.root} type="primary" onClick={showModal}>
        Add Player
      </Button>
      <Modal
        title="Add Player"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <AddPlayerForm />
      </Modal>
    </>
  );
};

export default AddTournamentButton;
