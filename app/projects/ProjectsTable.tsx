// app/projects/ProjectsTable.tsx
"use client";

import { Project } from "@prisma/client";
import { useState } from "react";

interface ProjectsTableProps {
  projects: Project[];
}

const ProjectsTable: React.FC<ProjectsTableProps> = ({ projects }) => {
  const [importStatus, setImportStatus] = useState<string | null>(null);

  const handleImportOrders = async () => {
    try {
      const response = await fetch("/api/import-orders");
      const data = await response.json();
      setImportStatus(data.message || data.error);
    } catch (error) {
      console.error("Error importing orders:", error);
      setImportStatus("Error importing orders");
    }
  };

  return (
    <div>
      <button onClick={handleImportOrders}>Import Orders</button>
      {importStatus && <p>{importStatus}</p>}
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Customer Email</th>
            <th>Customer Phone</th>
            <th>Customer Address</th>
            <th>Order Total</th>
            <th>Order Currency</th>
            <th>Order Items</th>
            <th>Completion Date</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.orderId}</td>
              <td>{project.customerName}</td>
              <td>{project.customerEmail}</td>
              <td>{project.customerPhone}</td>
              <td>{project.customerAddress}</td>
              <td>{String(project.orderTotal)}</td>
              <td>{project.orderCurrency}</td>
              <td>{JSON.stringify(project.orderItems).toString()}</td>
              <td>
                {project.completionDate
                  ? project.completionDate.toString()
                  : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsTable;
