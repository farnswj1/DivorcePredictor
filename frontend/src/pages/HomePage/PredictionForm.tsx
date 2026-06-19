import { useEffect, type FC, type SubmitEventHandler } from 'react';
import { Button, Group, Stack } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { QuestionInput } from '~/components';
import { QUESTIONS } from '~/data';

const getErrorMessage = (status: number | null): string | null => {
  switch (status) {
    case null:
      return null;
    case 422:
      return 'The information you provided is invalid! Please check your inputs and try again.';
    case 429:
      return 'Please wait 1 minute before submitting again.';
    default:
      return 'There is an issue with the server! Try again later!';
  }
};

interface PredictionFormProps {
  handleSubmit: SubmitEventHandler;
  disabled: boolean;
  status: number | null;
}

const PredictionForm: FC<PredictionFormProps> = ({
  handleSubmit,
  disabled,
  status
}) => {
  const errorMessage = getErrorMessage(status);

  useEffect(() => {
    if (errorMessage) {
      notifications.show({ message: errorMessage, color: 'error' });
    }
  }, [errorMessage]);

  return (
    <Stack
      component="form"
      gap="md"
      justify="flex-start"
      onSubmit={handleSubmit}
    >
      {
        QUESTIONS.map((question, index) => (
          <QuestionInput
            key={question}
            question={question}
            questionNumber={index + 1}
            disabled={disabled}
          />
        ))
      }
      <Group
        dir="row"
        gap="sm"
        justify="flex-start"
        align="center"
        flex="wrap"
      >
        <Button
          type="submit"
          variant="filled"
          disabled={disabled}
        >
          Submit
        </Button>
      </Group>
    </Stack>
  );
};

export default PredictionForm;
