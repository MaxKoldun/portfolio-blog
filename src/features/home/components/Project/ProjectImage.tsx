'use client';
import Image from 'next/image';
import { useState } from 'react';
import { breakpoints } from '@/constants/breakpoints';

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [isPortrait, setIsPortrait] = useState<boolean | null>(null);

  return (
    <Image
      src={src}
      alt={alt}
      onLoadingComplete={(img) => {
        if (img.naturalHeight > img.naturalWidth) {
          setIsPortrait(true);
        } else {
          setIsPortrait(false);
        }
      }}
      fill
      loading="lazy"
      sizes={`
        (max-width: ${breakpoints.xl}) ${isPortrait ? '25vw' : '50vw'},
        600px
      `}
      className="object-contain"
    />
  );
}

export { ProjectImage };
