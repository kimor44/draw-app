'use client';

import { ErrorActions } from '@/app/common/errors/ErrorActions';
import { ErrorInformations } from '@/app/common/errors/ErrorInformations';
import { ErrorWrapper } from '@/app/common/errors/ErrorWrapper';
import { getErrorMessage } from '@/app/lib/errors/getErrorMessage';

const Error = ({
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
        errorMessage="Could not find requested candidate"
        errorTitle={getErrorMessage(error)}
        advice="Please try again later or contact support if the problem persists"
      />
      <ErrorActions tryAgainAction={tryAgainAction} />
    </ErrorWrapper>
  );
};

export default Error;
