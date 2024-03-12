export type TErrorInformations = {
  errorMessage: string;
  errorTitle: string;
  advice?: string;
};

const ErrorInformations = ({
  errorMessage,
  errorTitle,
  advice
}: TErrorInformations) => {
  return (
    <section className="flex flex-col gap-7 pt-2 md:pt-4 lg:pt-8 xl:pt-14">
      <p className="text-accent text-xl text-center">{errorMessage}</p>
      <h1 className="text-6xl text-center font-bold">{errorTitle}</h1>
      <p className="text-center text-text opacity-70 text-xl">
        {advice || 'Please try again.'}
      </p>
    </section>
  );
};
export { ErrorInformations };
