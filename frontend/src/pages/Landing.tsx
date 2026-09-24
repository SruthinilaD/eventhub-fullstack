import { dummyEvents } from "../data/dummyEvents";

interface LandingProps {
  onSignIn: () => void;
  onOrganizer: () => void;
}
const Landing = ({ onSignIn, onOrganizer }: LandingProps) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold">
              E
            </div>

            <span className="text-2xl font-bold tracking-tight">
              EventHub
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">

<button
  type="button"
  onClick={onSignIn}
  className="rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
>
  Sign In
</button>

            <button
              type="button"
              onClick={onOrganizer}
              className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              For Organizers
            </button>

          </div>
        </div>
      </nav>


      {/* ================= HERO ================= */}
      <section className="relative flex min-h-[680px] items-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-950 to-purple-950" />

        {/* Decorative glow */}
        <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

        {/* Content */}
        <div className="relative mx-auto w-full max-w-7xl px-6 pt-20">

          <div className="max-w-3xl">

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
              Your world of experiences
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Discover events
              <span className="block text-indigo-400">
                worth remembering.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              From live music and comedy to sports, workshops and
              technology events — discover something exciting near you.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <button
                type="button"
                className="rounded-xl bg-indigo-600 px-7 py-3.5 font-semibold transition hover:bg-indigo-500"
              >
                Explore Events
              </button>

              <button
                type="button"
                className="rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 font-semibold backdrop-blur transition hover:bg-white/10"
              >
                Browse Categories
              </button>

            </div>
          </div>
        </div>
      </section>


      {/* ================= EVENT SECTIONS ================= */}
      <main className="mx-auto max-w-7xl px-6 py-16">

        <EventRow
          title="Trending Events"
          events={dummyEvents}
        />

        <EventRow
          title="Music & Entertainment"
          events={dummyEvents.filter(
            (event) =>
              event.category === "Music" ||
              event.category === "Comedy"
          )}
        />

        <EventRow
          title="Technology & Workshops"
          events={dummyEvents.filter(
            (event) =>
              event.category === "Technology" ||
              event.category === "Workshops"
          )}
        />

        <EventRow
          title="Sports & Theatre"
          events={dummyEvents.filter(
            (event) =>
              event.category === "Sports" ||
              event.category === "Theatre"
          )}
        />

      </main>


      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 px-6 py-10">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-6 sm:flex-row">

            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 font-bold">
                  E
                </div>

                <span className="text-xl font-bold">
                  EventHub
                </span>
              </div>

              <p className="mt-3 text-sm text-slate-500">
                Discover. Experience. Remember.
              </p>
            </div>

            <div className="flex gap-8 text-sm text-slate-400">
              <button className="transition hover:text-white">
                About
              </button>

              <button className="transition hover:text-white">
                Contact
              </button>

              <button className="transition hover:text-white">
                Privacy
              </button>
            </div>

          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-sm text-slate-600">
            © 2026 EventHub. All rights reserved.
          </div>

        </div>

      </footer>

    </div>
  );
};


/* ================= EVENT ROW ================= */

interface EventRowProps {
  title: string;
  events: typeof dummyEvents;
}

const EventRow = ({ title, events }: EventRowProps) => {
  return (
    <section className="mb-16">

      {/* Section heading */}
      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          {title}
        </h2>

        <button className="text-sm font-medium text-indigo-400 transition hover:text-indigo-300">
          See all →
        </button>

      </div>


      {/* Horizontal event cards */}
      <div className="flex gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

        {events.map((event) => (

          <article
            key={event.id}
            className="group min-w-[260px] max-w-[260px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] transition duration-300 hover:-translate-y-2 hover:border-indigo-500/50 hover:bg-white/[0.08]"
          >

            {/* Image */}
            <div className="relative h-72 overflow-hidden">

              <img
                src={event.image}
                alt={event.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Category */}
              <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium backdrop-blur">
                {event.category}
              </span>

            </div>


            {/* Card information */}
            <div className="p-5">

              <h3 className="truncate text-lg font-semibold">
                {event.title}
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                {event.location}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                {event.date}
              </p>

              <div className="mt-5 flex items-center justify-between">

                <span className="font-semibold text-white">
                  ₹{event.price}
                </span>

                <button className="rounded-lg bg-white/10 px-3 py-2 text-xs font-semibold transition hover:bg-indigo-600">
                  View
                </button>

              </div>

            </div>

          </article>

        ))}

      </div>
    </section>
  );
};

export default Landing;