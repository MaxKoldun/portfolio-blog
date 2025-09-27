import { memo } from 'react';
import cx from 'clsx';
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = memo<InputProps>(
  ({
    value,
    type = 'text',
    disabled,
    onChange,
    id,
    pattern,
    title,
    placeholder,
    name,
    required,
    className,
    autoFocus,
  }) => {
    return (
      <input
        id={id}
        name={name}
        required={required}
        value={value}
        type={type}
        title={title}
        pattern={pattern}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        autoFocus={autoFocus}
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

Input.displayName = 'Input';
