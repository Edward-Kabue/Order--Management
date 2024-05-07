// app/page.jsx
"use client";

import { useState } from "react";

const Page = () => {
  const [importStatus, setImportStatus] = useState(null);

  const handleImportOrders = async () => {
    try {
      const response = await fetch("/api/import-orders");
      const data = await response.json();
      setImportStatus(data.message || data.error);
    } catch (error) {
      console.error("Error importing orders:", error);
      setImportStatus("Error importing orders" as any);
    }
  };

  return (
    <div>
      <button onClick={handleImportOrders}>Import Orders</button>
      {importStatus && <p>{importStatus}</p>}
      {/* ... */}
    </div>
  );
};

export default Page;
