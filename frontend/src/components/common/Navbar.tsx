interface NavbarProps {
  isOrganizer: boolean;
  setIsOrganizer: (value: boolean) => void;
}

const Navbar = ({
  isOrganizer,
  setIsOrganizer,
}: NavbarProps) => {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-sm font-bold text-white">
            E
          </div>

          <span className="text-xl font-bold tracking-tight text-slate-900">
            EventHub
          </span>
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="/"
            className="text-sm font-medium text-slate-600 hover:text-indigo-600"
          >
            Home
          </a>

          <a
            href="/events"
            className="text-sm font-medium text-slate-600 hover:text-indigo-600"
          >
            Events
          </a>
        </div>

        {/* Mode Button */}
        <button
          type="button"
          onClick={() => setIsOrganizer(!isOrganizer)}
          className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-600"
        >
          {isOrganizer ? "Customer" : "Organizer"}
        </button>

      </div>
    </nav>
  );
};

export default Navbar;