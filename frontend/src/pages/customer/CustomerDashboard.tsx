import { useAuth } from "../../context/AuthContext";

function CustomerDashboard() {
  const { user, logout } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-slate-800 px-8 py-5">
        <div>
          <h1 className="text-xl font-bold">
            Event<span className="text-indigo-400">Hub</span>
          </h1>
        </div>

        <div className="flex items-center gap-5">
          <div className="text-right">
            <p className="text-sm font-medium">
              {user.name}
            </p>

            <p className="text-xs text-slate-400">
              {user.email}
            </p>
          </div>

          <button
            type="button"
            onClick={logout}
            className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-red-400 hover:text-red-400"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="px-8 py-10">
        <div className="mx-auto max-w-6xl">
          <div>
            <p className="text-sm text-indigo-400">
              CUSTOMER DASHBOARD
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Welcome, {user.name} 👋
            </h2>

            <p className="mt-2 text-slate-400">
              Discover events and manage your bookings.
            </p>
          </div>

          {/* Dashboard cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-lg font-semibold">
                Discover Events
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Browse upcoming events and find something
                exciting.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-lg font-semibold">
                My Bookings
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                View your booked events and tickets.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-lg font-semibold">
                Profile
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Manage your EventHub account.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CustomerDashboard;