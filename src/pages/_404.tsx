import { FadeInWhenVisible } from "@/components/fades";

export function NotFound() {
  return (
    <FadeInWhenVisible>
      <section className="flex flex-col items-center pt-60">
        <h1 className="text-[24px] font-bold bg-gradient-to-br from-gradient_from_1 to-gradient_to_1 text-transparent bg-clip-text">
          404: Not Found
        </h1>
        <p>It&apos;s gone :(</p>
      </section>
    </FadeInWhenVisible>
  );
}
