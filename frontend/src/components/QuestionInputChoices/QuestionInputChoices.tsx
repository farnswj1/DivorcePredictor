import { type FC } from 'react';
import { Flex, Radio } from '@mantine/core';
import { CHOICES } from '~/data';

interface QuestionInputChoicesProps {
  name: string;
}

const QuestionInputChoices: FC<QuestionInputChoicesProps> = ({ name }) => (
  <Radio.Group name={name} required>
    <Flex gap="sm" direction={{ base: 'column', sm: 'row' }}>
    {
      CHOICES.map((choice, value) => (
        <Radio
          key={choice}
          value={String(value + 1)}
          label={choice}
          size="sm"
          required
        />
      ))
    }
    </Flex>
  </Radio.Group>
);

export default QuestionInputChoices;
