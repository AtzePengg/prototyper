import React from 'react';

export const InputField = ({
  label,
  id,
  name,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  required = false,
  error = '',
  className = '',
  ...props
}) => {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full px-3 py-2 border ${
          error ? 'border-red-300' : 'border-gray-300'
        } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export const TextareaField = ({
  label,
  id,
  name,
  value,
  onChange,
  placeholder = '',
  rows = 3,
  required = false,
  error = '',
  className = '',
  ...props
}) => {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className={`w-full px-3 py-2 border ${
          error ? 'border-red-300' : 'border-gray-300'
        } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export const SelectField = ({
  label,
  id,
  name,
  value,
  onChange,
  options = [],
  placeholder = 'Select an option',
  required = false,
  error = '',
  className = '',
  ...props
}) => {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full px-3 py-2 border ${
          error ? 'border-red-300' : 'border-gray-300'
        } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value || option} value={option.value || option}>
            {option.label || option}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export const CheckboxField = ({
  label,
  id,
  name,
  checked,
  onChange,
  required = false,
  error = '',
  className = '',
  ...props
}) => {
  return (
    <div className={`flex items-start ${className}`}>
      <div className="flex items-center h-5">
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={checked}
          onChange={onChange}
          required={required}
          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          {...props}
        />
      </div>
      <div className="ml-3 text-sm">
        {label && (
          <label htmlFor={id} className="font-medium text-gray-700">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        )}
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export const RadioGroup = ({
  label,
  name,
  options = [],
  value,
  onChange,
  required = false,
  error = '',
  className = '',
  ...props
}) => {
  return (
    <div className={className} {...props}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option.value || option} className="flex items-center">
            <input
              id={`${name}-${option.value || option}`}
              name={name}
              type="radio"
              value={option.value || option}
              checked={value === (option.value || option)}
              onChange={onChange}
              className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <label
              htmlFor={`${name}-${option.value || option}`}
              className="ml-3 text-sm font-medium text-gray-700"
            >
              {option.label || option}
            </label>
          </div>
        ))}
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};