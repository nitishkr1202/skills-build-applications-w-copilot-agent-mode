import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="container py-5">
      <h1 className="mb-3">OctoFit Tracker</h1>
      <p className="lead">
        Modern multi-tier fitness tracker with React 19, Vite, Express, TypeScript, and MongoDB.
      </p>
      <Link to="/dashboard" className="btn btn-primary">
        View Dashboard
      </Link>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="container py-5">
      <h2>Dashboard</h2>
      <p>Start logging workouts and tracking team progress.</p>
      <Link to="/" className="btn btn-secondary">
        Back to Home
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
