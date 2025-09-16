import React, { memo, ReactNode } from 'react';
import { Typography } from '../Typography';

type FieldProps = {
  children?: ReactNode;
  className?: string;
  htmlFor?: string;
  label?: string;
};

const FieldComponent = ({
  label = '',
  children = null,
  className = '',
  htmlFor = '',
}: FieldProps) => {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={htmlFor} className="mb-1.5 block">
          <Typography className="text-grey-400" variant="body4">
            {label}
          </Typography>
        </label>
      )}
      {children}
    </div>
  );
};

export const Field = memo(FieldComponent);
Field.displayName = 'Form.Field';
