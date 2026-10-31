import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-[1240px] px-4 py-24 min-[480px]:px-6">
      <h1 className="font-heading text-[36px] font-semibold leading-[1.15]">Page not found</h1>
      <p className="mt-4 text-ink-soft">That page is not on this site.</p>
      <Button href="/" className="mt-6">
        Home
      </Button>
    </div>
  );
}
