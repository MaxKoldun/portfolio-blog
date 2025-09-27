import Image from 'next/image';
import { breakpoints } from '@/constants/breakpoints';

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority
      sizes={`
        (max-width: ${breakpoints.md}) 100vw,
        (max-width: ${breakpoints.xl}) 50vw,
        600px
      `}
      className="object-contain"
    />
  );
}

export { ProjectImage };
