import Image from 'next/image';

type Mood = 'idle' | 'happy' | 'roast';

const label: Record<Mood, string> = {
  idle: 'Stew, the Saucepot mascot, looking unimpressed',
  happy: 'Stew, the Saucepot mascot, smiling',
  roast: 'Stew, the Saucepot mascot, raising an eyebrow',
};

/** Stew, drawn from the same paths as the app (brand/stew). Still, no animation. */
export function Stew({ mood = 'idle', size = 160, className }: { mood?: Mood; size?: number; className?: string }) {
  return (
    <Image
      src={`/stew/stew-${mood}.svg`}
      alt={label[mood]}
      width={size}
      height={size}
      className={className}
      unoptimized
    />
  );
}
