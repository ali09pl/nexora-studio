'use client';

import { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    setVisits(123);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p>Total Visits: {visits}</p>
    </div>
  );
}
