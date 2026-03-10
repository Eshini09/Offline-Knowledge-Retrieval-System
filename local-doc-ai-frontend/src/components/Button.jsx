import React from "react";

export default function Button({ children, onClick, type = "button", disabled, variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-medium transition focus:outline-none focus:ring-4";
  const styles =
    variant === "primary"
      ? "brand-primary focus:ring-0 disabled:bg-zinc-300"
      : "bg-white text-zinc-900 border border-zinc-200 hover:bg-zinc-50 focus:ring-0 disabled:text-zinc-400";

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}
