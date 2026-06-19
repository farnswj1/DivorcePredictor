import { type FC } from 'react';
import { Button } from '@mantine/core';
import { Section } from '~/components';
import { setTitle } from '~/utils';

interface IdleViewProps {
  onStart: () => void;
}

const IdleView: FC<IdleViewProps> = ({ onStart }) => {
  setTitle();

  return (
    <Section
      title="Divorce Predictor"
      description="Will your marriage last? Find out now!"
      content={
        <Button onClick={onStart}>
          Click Here!
        </Button>
      }
      center
    />
  );
};

export default IdleView;
