// app/projects/page.tsx
import { PrismaClient, Project } from "@prisma/client";
import { Suspense } from "react";
import ProjectsTable from "./ProjectsTable";

const projects = new PrismaClient();

export async function GET() {
  try {
    const response = await projects.project.findMany();
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return new Response(JSON.stringify({ error: "Error fetching projects" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export default async function ProjectsPage() {
  const response = await GET();
  const projects: Project[] = await response.json();

  return (
    <div>
      <h1>Projects</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectsTable projects={projects} />
      </Suspense>
    </div>
  );
}
