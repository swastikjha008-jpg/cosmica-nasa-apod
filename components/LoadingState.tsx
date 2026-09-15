import Loader from "@/components/ui/loader-4";

export function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-24">
      <Loader />
      <p className="text-sm text-ink-faint">Loading the cosmos&hellip;</p>
    </div>
  );
}
