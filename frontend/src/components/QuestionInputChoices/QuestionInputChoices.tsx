import { type FC } from 'react';
import { Flex, Radio } from '@mantine/core';

const CHOICES = ['Never', 'Seldom', 'Averagely', 'Frequently', 'Always'] as const;

interface QuestionInputChoicesProps {
  name: string;
}

const QuestionInputChoices: FC<QuestionInputChoicesProps> = ({ name }) => (
  <Radio.Group name={name} required>
    <Flex gap="sm" direction={{ base: 'column', sm: 'row' }}>
      {
        CHOICES.map((choice, index) => (
          <Radio
            key={choice}
            value={String(index + 1)}
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
