import React from 'react';

// Extend native button attributes to accept all standard HTML button props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean; // Custom prop to trigger the loading state
}

export const LoadingButton: React.FC<ButtonProps> = ({
  children,
  isLoading = false,
  className = '',
  disabled,
  ...props
}) => {
  return (
    <button

      // Automatically disable the button when loading to prevent duplicate submissions
      disabled={disabled || isLoading}

      // ARIA attribute informs screen readers that the element is loading
      aria-busy={isLoading}
      className={`
        inline-flex items-center justify-center 
        px-4 py-2 text-sm font-medium text-white 
        bg-blue-600 hover:bg-blue-700 
        rounded-md shadow-sm transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
          xmlns="http://w3.org"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {isLoading ? 'Processing...' : children}
    </button>
  );
};