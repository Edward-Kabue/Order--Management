//create api endpoint
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
//get all posts
export async function GET() {
  return NextResponse.json(await prisma.link.findMany());
}
//create a post
export async function POST(request: { json: () => any }) {
  const body = await request.json();
  return NextResponse.json(await prisma.link.create({ data: body }));
}
//get one post
export async function GET_id(request: { params: { id: string } }) {
  return NextResponse.json(
    await prisma.link.findUnique({ where: { id: Number(request.params.id) } })
  );
}
