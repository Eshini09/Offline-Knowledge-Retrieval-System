import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button.jsx";

function navClass(active) {
  if (active) return "block w-full rounded-xl bg-zinc-900 px-3 py-2 text-left text-sm font-medium text-white";
  return "block w-full rounded-xl border border-zinc-200 px-3 py-2 text-left text-sm text-zinc-600 hover:bg-zinc-50";
}

export default function AdminSidebar({ active = "documents" }) {
  const nav = useNavigate();

  function onLogout() {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("home_route");
    nav("/login", { replace: true });
  }

  return (
    <aside className="w-full border-r border-zinc-200 bg-white p-4 md:h-screen md:w-64 md:shrink-0">
      <div className="mb-5">
        <div className="text-sm font-semibold text-zinc-900">Admin Dashboard</div>
        <div className="text-xs text-zinc-500">Enterprise Offline Knowledge System</div>
      </div>

      <nav className="flex flex-col gap-2">
        <Link to="/app" className={navClass(active === "documents")}>
          Documents
        </Link>
        <Link to="/users" className={navClass(active === "users")}>
          Users
        </Link>
        <Link to="/settings" className={navClass(active === "settings")}>
          Settings
        </Link>
      </nav>

      <div className="mt-6">
        <Button variant="secondary" onClick={onLogout}>
          Log out
        </Button>
      </div>
    </aside>
  );
}
