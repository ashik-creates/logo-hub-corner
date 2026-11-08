export default function Loading() {
  return (
    <div
      className="min-h-dvh bg-ink"
      aria-busy="true"
      aria-label="Loading content"
    >
      <div className="mx-auto flex h-[84px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <div className="h-9 w-32 animate-pulse rounded-full bg-cream/[0.07]" />
        <div className="hidden items-center gap-8 sm:flex">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="h-3 w-14 animate-pulse rounded-full bg-cream/[0.06]"
            />
          ))}
        </div>
        <div className="size-10 animate-pulse rounded-full bg-cream/[0.07]" />
      </div>

      <main className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <section className="grid items-center gap-10 pt-10 lg:min-h-[calc(100svh-160px)] lg:grid-cols-[1.02fr_0.98fr] lg:gap-2 lg:pt-4">
          <div className="max-w-[680px]">
            <div className="h-[clamp(3.6rem,7.4vw,6.7rem)] w-[92%] animate-pulse rounded-2xl bg-cream/[0.07]" />
            <div className="mt-6 h-[clamp(1.9rem,3.5vw,3.1rem)] w-[70%] animate-pulse rounded-2xl bg-cream/[0.06]" />
            <div className="mt-8 space-y-3">
              <div className="h-3 w-full max-w-[27rem] animate-pulse rounded-full bg-cream/[0.05]" />
              <div className="h-3 w-4/5 max-w-[21rem] animate-pulse rounded-full bg-cream/[0.05]" />
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <div className="h-12 w-40 animate-pulse rounded-full bg-cream/[0.07]" />
              <div className="h-12 w-36 animate-pulse rounded-full bg-cream/[0.05]" />
            </div>
          </div>
          <div className="mx-auto aspect-square w-full max-w-[560px] animate-pulse rounded-[2rem] bg-cream/[0.05]" />
        </section>
      </main>
    </div>
  );
}
