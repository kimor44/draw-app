import { ErrorWrapper } from './common/errors/ErrorWrapper';
import { ErrorInformations } from './common/errors/ErrorInformations';
import { ErrorActions } from './common/errors/ErrorActions';

export default function NotFound() {
  return (
    <>
      <title>404 - Not Found</title>
      <ErrorWrapper>
        <ErrorInformations
          errorMessage="Could not find requested resource"
          errorTitle="404 - Not Found"
          advice="Don't worry, even the best explorers get lost sometimes"
        />
        <ErrorActions hasTryAgainAction={false} />
      </ErrorWrapper>
    </>
  );
}
