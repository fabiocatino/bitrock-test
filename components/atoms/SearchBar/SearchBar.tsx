import React from "react";
import { SearchInput } from "./styles";

type SearchBarProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function SearchBar({ onChange }: SearchBarProps) {
  return (
    <div>
      <SearchInput
        type="search"
        placeholder="Search..."
        name="search"
        id="search"
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBar;
