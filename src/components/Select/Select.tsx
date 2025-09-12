import { ChangeEvent } from 'react';

type Option<T extends string> = {
  code: T;
  label: string;
};

type SelectProps<T extends string> = {
  list: Option<T>[];
  value: T;
  onChange?: (value: ChangeEvent<HTMLSelectElement>) => void;
};

export function Select<T extends string>({
  list,
  onChange,
  value,
}: SelectProps<T>) {
  return (
    <div className="relative inline-block w-40">
      <select
        value={value}
        onChange={onChange}
        className="
          w-full appearance-none rounded-lg border px-4 py-2
          pr-8 text-sm font-medium shadow-sm border-gray-600
          bg-black text-gray-400
        "
      >
        {list.map((item) => (
          <option key={item.code} value={item.code}>
            {item.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
        <svg
          className="h-4 w-4 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}
