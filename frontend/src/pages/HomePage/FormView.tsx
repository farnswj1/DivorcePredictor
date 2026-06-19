import { type FC, type SubmitEvent } from 'react';
import { Section } from '~/components';
import { APIService } from '~/services';
import { useFetch } from '~/hooks';
import { FetchStatus } from '~/types';
import PredictionForm from './PredictionForm';

interface FormViewProps {
  onResultReceived: (prediction: boolean) => void;
}

const FormView: FC<FormViewProps> = ({ onResultReceived }) => {
  const [{ loading, status }, dispatch] = useFetch();

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({ type: FetchStatus.Pending });

    const data = new FormData(event.currentTarget);

    APIService.submitQuestionnaire<FormData>(data)
      .then((response) => onResultReceived(response.data))
      .catch((error: unknown) => dispatch({ type: FetchStatus.Error, error }));
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
