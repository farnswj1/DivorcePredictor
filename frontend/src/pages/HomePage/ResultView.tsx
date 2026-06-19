import { type FC } from 'react';
import { Button } from '@mantine/core';
import { Section } from '~/components';

interface ResultViewProps {
  prediction: boolean;
  onReset: () => void;
}

const ResultView: FC<ResultViewProps> = ({
  prediction,
  onReset
}) => (
  <Section
    title={`You are predicted to ${prediction ? 'NOT ' : ''}divorce.`}
    content={
      <Button variant="contained" size="large" onClick={onReset}>
        Reset
      </Button>
    }
    center
  />
);

export default ResultView;
