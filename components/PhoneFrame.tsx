import Image from 'next/image';

/** A plain phone frame around a 390×844 screen of the app. */
export function PhoneFrame({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="relative mx-auto w-full max-w-[300px] rounded-[44px] border border-line bg-surface p-2.5 shadow-[0_30px_60px_-30px_rgba(43,21,16,0.35)]">
      <div className="overflow-hidden rounded-[36px] border border-line">
        <Image src={src} alt={alt} width={390} height={844} sizes="300px" className="h-auto w-full" priority={priority} />
      </div>
    </div>
  );
}
