import { useState } from "react";

import {
  registerCustomer,
  registerOrganizer,
} from "../api/authApi";

import { useAuth } from "../context/AuthContext";

interface AuthProps {
  isOrganizer: boolean;
  onBack: () => void;
}

function Auth({ isOrganizer, onBack }: AuthProps) {
  const { login } = useAuth();

  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setError("");

    // -----------------------------
    // Validation
    // -----------------------------

    if (!isLogin && !name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    if (password.length < 6) {
      setError(
        "Password must be at least 6 characters."
      );
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      // -----------------------------
      // LOGIN
      // -----------------------------

      if (isLogin) {
        const loggedInUser = await login(
          email,
          password
        );

        // Make sure the account matches
        // the portal the user selected.
        if (
          isOrganizer &&
          loggedInUser.role !== "ORGANIZER"
        ) {
          // Logout because AuthContext has already
          // stored the authenticated user.
          useAuth;

          throw new Error(
            "This account is not an organizer account."
          );
        }

        if (
          !isOrganizer &&
          loggedInUser.role !== "CUSTOMER"
        ) {
          throw new Error(
            "This account is not a customer account."
          );
        }

        /*
         * We do NOT navigate here.
         *
         * AuthContext has updated `user`.
         * App.tsx sees that `user` exists and
         * automatically displays the dashboard.
         */

        return;
      }

      // -----------------------------
      // REGISTRATION
      // -----------------------------

      if (isOrganizer) {
        await registerOrganizer(
          name,
          email,
          password
        );
      } else {
        await registerCustomer(
          name,
          email,
          password
        );
      }

      // Registration successful
      alert(
        "Registration successful! Please login."
      );

      // Switch back to Login
      setIsLogin(true);

      // Clear form
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* --------------------------------
          Background
      --------------------------------- */}

      <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-12">
        {/* Background glow */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

        {/* --------------------------------
            Main Container
        --------------------------------- */}

        <div className="relative grid w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-2xl backdrop-blur-xl md:grid-cols-2">
          {/* --------------------------------
              Left Side
          --------------------------------- */}

          <div className="hidden flex-col justify-between bg-gradient-to-br from-indigo-600/20 via-slate-900 to-purple-600/20 p-10 md:flex">
            <div>
              {/* Logo */}
              <button
                type="button"
                onClick={onBack}
                className="text-2xl font-bold tracking-tight text-white"
              >
                Event<span className="text-indigo-400">
                  Hub
                </span>
              </button>

              <div className="mt-20">
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-indigo-400">
                  {isOrganizer
                    ? "For Organizers"
                    : "Discover Events"}
                </p>

                <h1 className="text-4xl font-bold leading-tight">
                  {isOrganizer
                    ? "Create experiences people remember."
                    : "Your next unforgettable experience starts here."}
                </h1>

                <p className="mt-6 max-w-md leading-7 text-slate-400">
                  {isOrganizer
                    ? "Create, publish and manage your events while connecting with your audience."
                    : "Discover amazing events, reserve your seats and create memories worth keeping."}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-500">
              EventHub — Discover. Book. Experience.
            </p>
          </div>

          {/* --------------------------------
              Right Side - Auth Form
          --------------------------------- */}

          <div className="p-6 sm:p-10">
            {/* Mobile logo */}
            <button
              type="button"
              onClick={onBack}
              className="mb-10 text-xl font-bold md:hidden"
            >
              Event<span className="text-indigo-400">
                Hub
              </span>
            </button>

            {/* Back button */}
            <button
              type="button"
              onClick={onBack}
              className="mb-6 text-sm text-slate-400 transition hover:text-white"
            >
              ← Back to EventHub
            </button>

            {/* Heading */}
            <div>
              <h2 className="text-3xl font-bold">
                {isLogin
                  ? isOrganizer
                    ? "Welcome back, Organizer"
                    : "Welcome back"
                  : isOrganizer
                  ? "Create your organizer account"
                  : "Create your account"}
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                {isLogin
                  ? "Sign in to continue to EventHub."
                  : "Join EventHub and get started today."}
              </p>
            </div>

            {/* --------------------------------
                Login / Register Tabs
            --------------------------------- */}

            <div className="mt-8 flex rounded-xl border border-white/10 bg-slate-800/70 p-1">
              <button
                type="button"
                onClick={() => {
                  setIsLogin(true);
                  setError("");
                }}
                className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition ${
                  isLogin
                    ? "bg-white text-slate-900 shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Login
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsLogin(false);
                  setError("");
                }}
                className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition ${
                  !isLogin
                    ? "bg-white text-slate-900 shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Register
              </button>
            </div>

            {/* --------------------------------
                Form
            --------------------------------- */}

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-4"
            >
              {/* Name */}
              {!isLogin && (
                <div>
                  <label className="mb-1.5 block text-sm text-slate-300">
                    Full name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                  />
                </div>
              )}

              {/* Email */}
              <div>
                <label className="mb-1.5 block text-sm text-slate-300">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                />
              </div>

              {/* Password */}
              <div>
                <label className="mb-1.5 block text-sm text-slate-300">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                />
              </div>

              {/* Confirm Password */}
              {!isLogin && (
                <div>
                  <label className="mb-1.5 block text-sm text-slate-300">
                    Confirm password
                  </label>

                  <input
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(
                        e.target.value
                      )
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                  />
                </div>
              )}

              {/* Error */}
              {error && (
                <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-white py-3.5 font-semibold text-slate-900 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading
                  ? "Please wait..."
                  : isLogin
                  ? "Sign In"
                  : "Create Account"}
              </button>
            </form>

            {/* Footer text */}
            <p className="mt-8 text-center text-xs leading-5 text-slate-500">
              By continuing, you agree to EventHub's
              terms and conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;