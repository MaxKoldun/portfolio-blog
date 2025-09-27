import Image from 'next/image';
import { breakpoints } from '@/constants/breakpoints';

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority
      sizes={`(max-width: ${breakpoints.sm}) 400px, (max-width: ${breakpoints.lg}) 600px, 600px`}
      className="object-contain"
    />
  );
}

export { ProjectImage };
