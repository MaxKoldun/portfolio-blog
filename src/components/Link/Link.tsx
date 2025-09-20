import cx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { default as NextLink } from 'next/link';
import { type ButtonHTMLAttributes, type ReactNode } from 'react';

export type LinkProps = {
  children?: ReactNode;
  loading?: boolean;
  size?: 'lg' | 'sm' | 'xs';
  loaderColor?: string;
  href: string;
  target?: string;
  block?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Link({
  children,
  loading = false,
  size = 'lg',
  block = false,
  href,
  target = '_blank',
  className,
}: LinkProps) {
  return (
    <NextLink
      href={href}
      target={target}
      className={twMerge(
        cx(
          'block min-h-[3rem] rounded border border-grey-300 text-center text-sm',
          {
            'flex items-center justify-center': loading,
            'min-h-[3rem] p-4': size === 'lg',
            'min-h-[2.5rem] px-4 py-2.5': size === 'sm',
            'min-h-[2rem] px-4 py-1.5': size === 'xs',
            'w-full': block,
          },
          className
        )
      )}
    >
      {children}
    </NextLink>
  );
}
