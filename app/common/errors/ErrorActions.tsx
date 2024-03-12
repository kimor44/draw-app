import { TryAgainButton } from '../actions/TryAgainButton';
import { GoBackHomeLink } from '../actions/GoBackHomeLink';

export type TErrorActions = {
  tryAgainAction: () => void;
};

const ErrorActions = ({ tryAgainAction }: TErrorActions) => {
  return (
    <div className="actions flex justify-center gap-16">
      <TryAgainButton onClick={tryAgainAction} />
      <GoBackHomeLink />
    </div>
  );
};
export { ErrorActions };
