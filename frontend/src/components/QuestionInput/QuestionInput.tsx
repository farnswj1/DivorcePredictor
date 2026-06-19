import { type FC } from 'react';
import { QuestionInputChoices } from '~/components';
import { Fieldset } from '@mantine/core';

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
    <Fieldset legend={`${questionNumber}. ${question}`} disabled={disabled}>
      <QuestionInputChoices name={radioNumber} />
    </Fieldset>
  );
};

export default QuestionInput;
