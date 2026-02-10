"use client";

import type React from "react";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
};

export default function SearchBar({ value, onChange, onSearch }: Props) {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSearch();
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Digite o nome do filme..."
        className="flex-1 px-4 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:border-blue-500 outline-none"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold"
      >
        Buscar
      </button>
    </form>
  );
}