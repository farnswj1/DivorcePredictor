import { FC, FormEventHandler } from 'react';
import { Button, Stack, Typography, useMediaQuery } from '@mui/material';
import { HeaderTypography, QuestionInput } from 'components';
import { RowContext } from 'contexts';
import { QUESTIONS } from 'data';

interface PredictionFormProps {
  handleSubmit: FormEventHandler;
  disabled: boolean;
  status: number | null;
}

const PredictionForm: FC<PredictionFormProps> = ({
  handleSubmit,
  disabled,
  status
}) => {
  const enableRows: boolean = useMediaQuery('(min-width: 700px)');

  return (
    <Stack
      component="form"
      spacing={3}
      justifyContent="start"
      onSubmit={handleSubmit}
    >
      <HeaderTypography>
        Will it last?
      </HeaderTypography>
      <Typography variant="h6">
        Answer the following questions:
      </Typography>
      <RowContext.Provider value={enableRows}>
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
      </RowContext.Provider>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="start"
        alignItems="center"
        flexWrap="wrap"
        useFlexGap
      >
        <Button
          type="submit"
          size="large"
          variant="contained"
          disabled={disabled}
        >
          Submit
        </Button>
        {
          (status === 429) && (
            <Typography color="error">
              Please wait 1 minute before submitting again.
            </Typography>
          )
        }
        {
          (status && status >= 400 && status !== 429) && (
            <Typography color="error">
              There is an issue with the server! Try again later!
            </Typography>
          )
        }
      </Stack>
    </Stack>
  );
};

export default PredictionForm;
