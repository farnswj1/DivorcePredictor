import { FC, FormEventHandler } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography
} from '@mui/material';

const QUESTIONS: string[] = [
  'If one of us apologizes when our discussion deteriorates, the discussion ends.',
  'I know we can ignore our differences, even if things get hard sometimes.',
  'When we need it, we can take our discussions with my spouse from the beginning and correct it.',
  'When I discuss with my spouse, contacting him/her will eventually work.',
  'The time I spent with my spouse is special for us.',
  'We don\'t have time at home as partners.',
  'We are like two strangers who share the same environment at home rather than family.',
  'I enjoy our holidays together.',
  'I enjoy traveling with my spouse.',
  'We share mostly the same goals.',
  'I think that one day in the future, when I look back, I\'ll see that my spouse and I have been in harmony with each other.',
  'My spouse and I have similar values in terms of personal freedom.',
  'My spouse and I have a similar sense of entertainment.',
  'Most of our goals for people (children, friends, etc.) are the same.',
  'Our dreams with my spouse are similar and harmonious.',
  'We\'re compatible with my spouse about what love should be.',
  'We share the same views about being happy in our life.',
  'My spouse and I have similar ideas about how marriage should be.',
  'My spouse and I have similar ideas about how roles should be in a marriage.',
  'My spouse and I have similar values in trust.',
  'I know exactly what my spouse likes.',
  'I know how my spouse wants to be taken care of when he/she is sick.',
  'I know my spouse\'s favorite food.',
  'I can tell you what kind of stress my spouse is facing in his/her life.',
  'I have knowledge of my spouse\'s inner world.',
  'I know my spouse\'s basic anxieties.',
  'I know what my spouse\'s current sources of stress are.',
  'I know my spouse\'s hopes and wishes.',
  'I know my spouse very well.',
  'I know my spouse\'s friends and their social relationships.',
  'I feel aggressive when I argue with my spouse.',
  'When discussing with my spouse, I usually use expressions such as "you always" or "you never".',
  'I can use negative statements about my spouse\'s personality during our discussions.',
  'I can use offensive expressions during our discussions.',
  'I can insult my spouse during our discussions.',
  'I can be humiliating when we have discussions.',
  'My discussion with my spouse is not calm.',
  'I hate my spouse\'s way of opening a subject.',
  'Our discussions often occur suddenly.',
  'We\'re just starting a discussion before I know what\'s going on.',
  'When I talk to my spouse about something, my calmness suddenly breaks.',
  'When I argue with my spouse, I only go out and I don\'t say a word.',
  'I mostly stay silent to calm the environment a little bit.',
  'Sometimes I think it\'s good for me to leave home for a while.',
  'I\'d rather stay silent than discuss with my spouse.',
  'Even if I\'m right in the discussion, I stay silent to hurt my spouse.',
  'When I discuss with my spouse, I stay silent because I\'m afraid of not being able to control my anger.',
  'I feel right in our discussions.',
  'I have nothing to do with what I\'ve been accused of.',
  'I\'m not actually the one who\'s guilty about what I\'m accused of.',
  'I\'m not the one who\'s wrong about problems at home.',
  'I wouldn\'t hesitate to tell my spouse about his/her inadequacy.',
  'When we discuss, I remind my spouse of his/her inadequacy.',
  'I\'m not afraid to tell my spouse about his/her incompetence.'
];

const CHOICES: string[] = ['Never', 'Seldom', 'Averagely', 'Frequently', 'Always'];

interface PredictionFormProps {
  handleSubmit: FormEventHandler,
  disabled: boolean
  status: number | null
};

const PredictionForm: FC<PredictionFormProps> = ({
  handleSubmit,
  disabled,
  status
}) => (
  <Box component="form" onSubmit={handleSubmit}>
    <Box marginBottom={3}>
      <Typography variant="h3">
        Will it last?
      </Typography>
    </Box>
    <Box marginBottom={3}>
      <Typography variant="h6">
        Answer the following questions:
      </Typography>
    </Box>
    {
      QUESTIONS.map((question, index) => {
        const questionNumber: number = index + 1;
        const radioNumber: string = 'q' + String(questionNumber).padStart(2, '0');

        return (
          <Box key={questionNumber} marginBottom={3}>
            <FormControl component="fieldset" disabled={disabled}>
              <FormLabel component="legend">
                {`${questionNumber}. ${question}`}
              </FormLabel>
              <RadioGroup
                row
                aria-label={radioNumber}
                name={radioNumber}
              >
                {
                  CHOICES.map((choice, value) => {
                    const _value: number = value + 1;

                    return (
                      <FormControlLabel
                        key={_value}
                        value={_value}
                        control={<Radio required size="small" />}
                        label={choice}
                      />
                    );
                  })
                }
              </RadioGroup>
            </FormControl>
          </Box>
        );
      })
    }
    <Grid container alignItems="center" spacing={2}>
      <Grid item>
        <Button
          type="submit"
          size="large"
          variant="contained"
          disabled={disabled}
        >
          Submit
        </Button>
      </Grid>
      {
        (status === 403) && (
          <Grid item>
            <Typography color="error">
              Please wait 1 minute before submitting again.
            </Typography>
          </Grid>
        )
      }
      {
        (status && status >= 500) && (
          <Grid item>
            <Typography color="error">
              There is an issue with the server! Try again later!
            </Typography>
          </Grid>
        )
      }
    </Grid>
  </Box>
);

export default PredictionForm;
