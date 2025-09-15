import { forwardRef, type ElementType, type ReactNode } from 'react';

const variantsToElementMap = {
  heading1: 'h1',
  heading2: 'h2',
  heading3: 'h3',
  heading4: 'h4',
  body1: 'p',
  body2: 'p',
  body3: 'p',
  title3: 'h3',
};

const variantsToClassMap = {
  heading1: 'typography-heading1',
  heading2: 'typography-heading2',
  heading3: 'typography-heading3',
  heading4: 'typography-heading4',
  title3: 'typography-title3',
  body1: 'typography-body1',
  body2: 'typography-body2',
  body3: 'typography-body3',
};

type Variant = keyof typeof variantsToElementMap;

type TypographyProps<T extends Variant> = {
  variant: T;
  className?: string;
  children?: ReactNode;
  component?: ElementType;
};

export const Typography = forwardRef<HTMLElement, TypographyProps<Variant>>(
  ({ variant, children, className, component }, ref) => {
    const Component = component ?? variantsToElementMap[variant];

    return (
      <Component
        ref={ref}
        className={`${variantsToClassMap[variant]} ${className ?? ''}`}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';
