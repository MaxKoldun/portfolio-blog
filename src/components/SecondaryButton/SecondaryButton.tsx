import cx from "clsx";
import { type ReactNode } from 'react';
import { Button } from '../Button';

import type { ButtonProps } from '../Button/Button';

export type SecondaryButtonProps = ButtonProps & {
  children?: ReactNode;
};

export function SecondaryButton({
  children,
  loading,
  size,
  block,
  disabled,
  onClick,
  className,
}: SecondaryButtonProps) {
  return (
    <Button
      onClick={onClick}
      loading={loading}
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
    </Button>
  );
}
