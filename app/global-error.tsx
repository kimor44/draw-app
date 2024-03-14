'use client';

import { ErrorActions } from './common/errors/ErrorActions';
import { ErrorInformations } from './common/errors/ErrorInformations';
import { ErrorWrapper } from './common/errors/ErrorWrapper';

const GlobalError = ({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  const tryAgainAction = () => {
    reset();
  };
  return (
    <html>
      <body>
        <ErrorWrapper>
          <ErrorInformations
            errorMessage="Something went wrong!"
            errorTitle={error.message}
            advice="Please try again later or contact support if the problem persists."
          />
          <ErrorActions tryAgainAction={tryAgainAction} />
        </ErrorWrapper>
      </body>
    </html>
  );
};

export default GlobalError;
