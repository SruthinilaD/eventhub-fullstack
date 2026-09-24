import { useEffect, useState } from "react";

import { AuthProvider, useAuth } from "./context/AuthContext";

import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import CustomerDashboard from "./pages/customer/CustomerDashboard";
import OrganizerDashboard from "./pages/organizer/OrganizerDashboard";

type AuthMode = "CUSTOMER" | "ORGANIZER";

function AppContent() {
  const { user, checkingAuth } = useAuth();

  

  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] =
    useState<AuthMode>("CUSTOMER");

  if (checkingAuth) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <p className="text-slate-400">
          Loading EventHub...
        </p>
      </div>
    );
  }

  /*
   * User is already logged in
   */
  if (user) {
    if (user.role === "ORGANIZER") {
      return <OrganizerDashboard  />;
    }

    return <CustomerDashboard  />;
  }

  /*
   * User is not logged in
   */
  if (showAuth) {
    return (
      <Auth
        isOrganizer={authMode === "ORGANIZER"}
        onBack={() => setShowAuth(false)}
      />
    );
  }

  /*
   * Landing page
   */
  return (
    <Landing
      onSignIn={() => {
        setAuthMode("CUSTOMER");
        setShowAuth(true);
      }}
      onOrganizer={() => {
        setAuthMode("ORGANIZER");
        setShowAuth(true);
      }}
    />
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;