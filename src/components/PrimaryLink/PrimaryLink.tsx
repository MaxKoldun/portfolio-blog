import cx from 'clsx';
import Link from 'next/link';
import { type ReactNode } from 'react';

type PrimaryLinkProps = {
  href: string;
  children?: ReactNode;
  disabled?: boolean;
  target?: string;
  className?: string;
};

export function PrimaryLink({
  href,
  children,
  target = undefined,
  disabled = false,
  className,
}: PrimaryLinkProps) {
  const baseClasses = cx(
    'group inline-flex items-center gap-2 font-semibold uppercase tracking-wide relative pb-1',
    'text-primary-500 [&>span]:bg-primary-500 transition-colors',
    {
      'hover:text-primary-400 active:text-primary-600 hover:[&>span]:bg-primary-400 active:[&>span]:bg-primary-600': !disabled,
      'cursor-not-allowed opacity-50': disabled,
    }
  );

  const underlineClasses = cx(
    'absolute left-0 bottom-0 h-[2px] w-full transition-transform origin-left scale-x-100'
  );

  return (
    <Link
      href={href}
      target={target}
      className={cx(baseClasses, className)}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : undefined}
    >
      {children}
      <span className={underlineClasses} />
    </Link>
  );
}
