import { memo } from 'react';
import cx from 'clsx';
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  rows?: number;
}

export const Textarea = memo<InputProps>(
  ({
    value,
    name,
    disabled,
    onChange,
    placeholder,
    required,
    id,
    className,
    rows,
  }) => {
    return (
      <textarea
        id={id}
        name={name}
        rows={rows}
        required={required}
        value={value}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        className={cx(
          'typography-body3 resize-none rounded text-white transition-colors duration-200 ease-in-out',
          'border-0 bg-grey-600 px-4 py-3',
          'placeholder:text-grey-600 focus-visible:outline-none',
          {
            'text-grey-700/[.65]': disabled,
          },
          className
        )}
      />
    );
  }
);

Textarea.displayName = 'Textarea';
