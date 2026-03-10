import React from "react";

export default function TextField({ label, value, onChange, type = "text", placeholder, autoComplete }) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm text-zinc-600">{label}</span>
      <input
        className="brand-focus w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
    </label>
  );
}
