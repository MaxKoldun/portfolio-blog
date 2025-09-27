'use client';
import Image from 'next/image';
import { useRootThemeContext } from '@/app/layouts';

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const context = useRootThemeContext();
  const breakPointLg = context.getCSSProperty('--breakpoint-lg');
  const breakPointSm = context.getCSSProperty('--breakpoint-sm');

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority
      sizes={`(max-width: ${breakPointSm}) 400px, (max-width: ${breakPointLg}) 600px, 600px`}
      className="object-contain"
    />
  );
}

export { ProjectImage };
