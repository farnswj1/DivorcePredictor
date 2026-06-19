import { type FC } from 'react';
import { ButtonLink, Section } from '~/components';
import { setTitle } from '~/utils';

const PageNotFoundPage: FC = () => {
  setTitle('Page Not Found');

  return (
    <Section
      title="Page Not Found"
      description="It appears you are lost. Click the button below."
      content={
        <ButtonLink variant="contained" size="large" to="/">
          Home
        </ButtonLink>
      }
      center
    />
  );
};

export default PageNotFoundPage;
