import cx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { type ButtonHTMLAttributes, type ReactNode } from 'react';

export type ButtonProps = {
  children?: ReactNode;
  loading?: boolean;
  size?: 'lg' | 'sm' | 'xs';
  loaderColor?: string;
  block?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  loading = false,
  size = 'lg',
  block = false,
  disabled,
  onClick,
  className,
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      onClick={onClick}
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
    </button>
  );
}
