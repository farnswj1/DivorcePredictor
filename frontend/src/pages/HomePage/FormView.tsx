import { type FC, type SubmitEvent } from 'react';
import { Section } from '~/components';
import { APIService } from '~/services';
import { useSubmit } from '~/hooks';
import PredictionForm from './PredictionForm';

interface FormViewProps {
  onResultReceived: (prediction: boolean) => void;
}

const FormView: FC<FormViewProps> = ({ onResultReceived }) => {
  const { fetchState: { loading, status }, submit } = useSubmit({
    onSubmit: (data) => APIService.submitQuestionnaire(data),
    onSuccess: ({ data }) => onResultReceived(data)
  });

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    submit(data);
  };

  return (
    <Section
      title="Will It Last?"
      description="Answer the following questions to find out if your marriage will last."
      content={
        <PredictionForm
          handleSubmit={handleSubmit}
          disabled={loading}
          status={status}
        />
      }
    />
  );
};

export default FormView;
