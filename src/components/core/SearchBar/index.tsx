import React, { ChangeEvent } from "react";

// Explicitly type the component props
interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchBar = ({ 
  value, 
  onChange, 
  placeholder = "Search..." 
}: SearchBarProps) => {
  
  // Strongly type the input change event handler
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value);
  };

  const handleClear = (): void => {
    onChange("");
  };

  return (
    <div className="relative w-full max-w-[400px]">
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="w-full p-[10px_40px_10px_12px] text-[16px] border border-[#ccc] rounded-md box-border"
      />
      {value && (
        <button
          onClick={handleClear}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer text-base text-gray-400"
        >
          ✕
        </button>
      )}
    </div>
  );
};
