import React, { useState, useEffect, useMemo } from "react";
import { SearchBar } from "@/components/Core/SearchBar";

// Mock interface for searchable data items
interface UserItem {
  id: number;
  name: string;
  email: string;
}

const mockUsers: UserItem[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com" },
  { id: 2, name: "Bob Smith", email: "bob@example.com" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com" }
];

// Reusable TypeScript Debounce Hook
function useDebounce<T>(value: T, delay = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default function UserSearchList() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const debouncedQuery = useDebounce<string>(searchQuery, 300);

  // Filter local client-side data using a memoized array
  const filteredUsers = useMemo(() => {
    if (!debouncedQuery.trim()) return mockUsers;
    
    return mockUsers.filter((user) =>
      user.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
  }, [debouncedQuery]);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>User Directory</h2>
      
      {/* Search component wrapper */}
      <SearchBar 
        value={searchQuery} 
        onChange={setSearchQuery} 
        placeholder="Search by name or email..." 
      />

      {/* Render Filtered Results */}
      <ul style={{ marginTop: "20px", paddingLeft: "0", listStyle: "none" }}>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <li 
              key={user.id} 
              style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}
            >
              <strong>{user.name}</strong> — {user.email}
            </li>
          ))
        ) : (
          <li style={{ color: "#777", fontStyle: "italic" }}>No results found</li>
        )}
      </ul>
    </div>
  );
}