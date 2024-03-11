'use client';

import { addCandidateAction } from '@/app/src/actions/candidate/addCandidateAction';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

type TNewCandidate = {
  onActionChange: () => void;
};

const NewCandidate = ({ onActionChange: onAddCandidate }: TNewCandidate) => {
  const router = useRouter();
  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const candidate = await addCandidateAction(formData);

    if (candidate.error) {
      toast.error(candidate.error);
      form.reset();
      form.focus();
      return;
    }

    if (!candidate) return;

    onAddCandidate();

    router.refresh();
    form.reset();
    form.focus();
    toast.success(candidate.message);
  };
  return (
    <form onSubmit={onSubmit} className="flex gap-4">
      <input
        className="text-text p-3 rounded-lg border-primary/80 border-2"
        type="text"
        name="name"
        placeholder="new candidate name"
      />
      <button
        type="submit"
        className="bg-primary text-background dark:text-text rounded px-4 py-2 transition"
      >
        Add candidate
      </button>
    </form>
  );
};

export { NewCandidate };
