
"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("Login failed. Check your email and password.");
    } else {
      window.location.href = "/admin/dashboard";
    }

    setLoading(false);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#08080b] px-6 text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/[.03] p-8 sm:p-10">
        <p className="text-xs tracking-[.35em] text-red-400">
          NEXORA AI
        </p>

        <h1 className="mt-5 text-3xl font-semibold">
          Admin Login
        </h1>

        <p className="mt-3 text-sm text-gray-400">
          Sign in to manage your business enquiries.
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Email address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your admin email"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-4 text-white outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Your password"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-4 text-white outline-none focus:border-red-500"
            />
          </div>

          {error && (
            <p role="alert" className="text-sm text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-red-600 px-6 py-4 text-sm font-semibold transition hover:bg-red-500 disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-gray-500">
          Private access · NEXORA AI
        </p>
      </div>
    </main>
  );
}
