export type TErrorWrapper = {
  children: React.ReactNode;
};

const ErrorWrapper = (props: TErrorWrapper) => {
  return (
    <div className="flex flex-col justify-center align-middle gap-14">
      {props.children}
    </div>
  );
};
export { ErrorWrapper };
