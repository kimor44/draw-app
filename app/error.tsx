'use client';

import { ErrorWrapper } from './common/errors/ErrorWrapper';
import { ErrorInformations } from './common/errors/ErrorInformations';
import { ErrorActions } from './common/errors/ErrorActions';

const ErrorBoundary = ({
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
    <ErrorWrapper>
      <ErrorInformations
        errorMessage="There was a problem"
        errorTitle={error.message}
        advice="Please try again later or contact support if the problem persists."
      />
      <ErrorActions tryAgainAction={tryAgainAction} />
    </ErrorWrapper>
  );
};

export default ErrorBoundary;
