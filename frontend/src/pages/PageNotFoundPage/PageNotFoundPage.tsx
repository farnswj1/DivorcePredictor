import { useEffect, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonLink, Section } from '~/components';
import { setTitle } from '~/utils';

const PageNotFoundPage: FC = () => {
  setTitle('Page Not Found');
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate('/', { replace: true }), 3000);
  }, [navigate]);

  return (
    <Section
      title="Page Not Found"
      description="It appears you are lost. Wait to be redirected or click the button below."
      content={
        <ButtonLink to="/" replace>
          Home
        </ButtonLink>
      }
      center
    />
  );
};

export default PageNotFoundPage;
