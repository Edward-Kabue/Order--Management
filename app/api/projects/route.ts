import { PrismaClient } from "@prisma/client/extension";

//fetch all projects
const projects = new PrismaClient();

export async function GET(request: any) {
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
