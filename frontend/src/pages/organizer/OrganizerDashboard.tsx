import { useAuth } from "../../context/AuthContext";

function OrganizerDashboard() {
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
              ORGANIZER DASHBOARD
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Welcome, {user.name} 👋
            </h2>

            <p className="mt-2 text-slate-400">
              Create and manage your events from one place.
            </p>
          </div>

          {/* Dashboard cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-lg font-semibold">
                Create Event
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Create and publish a new event for your
                audience.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-lg font-semibold">
                My Events
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                View and manage the events you have created.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-lg font-semibold">
                Event Analytics
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Track bookings, attendees and event
                performance.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default OrganizerDashboard;