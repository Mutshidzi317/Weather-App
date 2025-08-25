import { useState } from 'react';

interface Props {
  onSearch: (city: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    if (input.trim()) {
      onSearch(input.trim());
      setInput('');
    }
  };

  return (
    <div className="flex mb-4 gap-2">
      <input
        className="w-full p-2 border rounded"
        type="text"
        placeholder="Enter city"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
