import { FC } from 'react';
import { FormControl, FormLabel } from '@mui/material';
import { QuestionInputChoices } from 'components';

interface QuestionInputProps {
  question: string;
  questionNumber: number;
  disabled: boolean;
}

const QuestionInput: FC<QuestionInputProps> = ({
  question,
  questionNumber,
  disabled
}) => {
  const radioNumber: string = 'q' + String(questionNumber).padStart(2, '0');

  return (
    <FormControl component="fieldset" disabled={disabled}>
      <FormLabel component="legend">
        {`${questionNumber}. ${question}`}
      </FormLabel>
      <QuestionInputChoices name={radioNumber} />
    </FormControl>
  );
};

export default QuestionInput;
