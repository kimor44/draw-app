import { TryAgainButton } from '../actions/TryAgainButton';
import { GoBackHomeLink } from '../actions/GoBackHomeLink';

export type TErrorActions = {
  tryAgainAction?: () => void;
  hasTryAgainAction?: boolean;
};

const ErrorActions = ({
  tryAgainAction,
  hasTryAgainAction = true
}: TErrorActions) => {
  return (
    <div className="actions flex justify-center gap-16">
      {hasTryAgainAction && <TryAgainButton onClick={tryAgainAction} />}
      <GoBackHomeLink />
    </div>
  );
};
export { ErrorActions };
