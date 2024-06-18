import { FC } from 'react';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useRowContext } from 'hooks';
import { CHOICES } from 'data';

interface QuestionInputChoicesProps {
  name: string;
}

const QuestionInputChoices: FC<QuestionInputChoicesProps> = ({ name }) => {
  const enableRows = useRowContext();

  return (
    <RadioGroup
      row={enableRows}
      aria-label={name}
      name={name}
    >
      {
        CHOICES.map((choice, value) => (
          <FormControlLabel
            key={choice}
            value={value + 1}
            control={<Radio required size="small" />}
            label={choice}
          />
        ))
      }
    </RadioGroup>
  );
};

export default QuestionInputChoices;
