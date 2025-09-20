import cx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { type ButtonHTMLAttributes, type ReactNode } from 'react';

export type TextButtonProps = {
  children?: ReactNode;
  loading?: boolean;
  block?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function TextButton({
  children,
  loading = false,
  disabled,
  onClick,
  className,
}: TextButtonProps) {
  const baseClasses = cx('text-white relative cursor-pointer', {
    'hover:text-grey-300 active:text-grey-300 hover:[&>span]:bg-primary-400 active:[&>span]:bg-primary-600':
      !disabled,
    'cursor-not-allowed opacity-50': disabled,
  });

  const underlineClasses = cx(
    'absolute bg-primary-500 left-0 bottom-0 h-[2px] w-full transition-transform origin-left scale-x-100'
  );

  return (
    <button
      disabled={disabled || loading}
      onClick={onClick}
      className={twMerge(cx(baseClasses, className))}
    >
      {children}
      <span className={underlineClasses} />
    </button>
  );
}
