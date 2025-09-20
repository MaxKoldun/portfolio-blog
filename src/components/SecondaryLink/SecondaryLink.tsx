import cx from 'clsx';
import { type ReactNode } from 'react';
import { Link } from '../Link/Link';

import type { LinkProps } from '../Link/Link';

export type SecondaryLinkProps = LinkProps & {
  children?: ReactNode;
};

export function SecondaryLink({
  children,
  loading,
  size,
  block,
  disabled,
  href,
  className,
}: SecondaryLinkProps) {
  return (
    <Link
      loading={loading}
      href={href}
      size={size}
      block={block}
      disabled={disabled || loading}
      loaderColor="black"
      className={cx(
        'typography-body3 border-none bg-grey-500',
        {
          'hover:bg-grey-600 active:bg-grey-700': !disabled && !loading,
          'cursor-not-allowed': disabled || loading,
          'cursor-pointer': !(disabled || loading),
          'text-primary-600': loading,
          'opacity-50': disabled,
        },
        className
      )}
    >
      {children}
    </Link>
  );
}
