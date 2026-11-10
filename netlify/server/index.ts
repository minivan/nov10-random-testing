import type { Context } from "@netlify/server";

// Runs once per instance, before it receives any traffic.
const startedAt = new Date();

export default async (req: Request, context: Context) => {
  const { pathname } = new URL(req.url);

  if (pathname === "/api/hello") {
    return Response.json({
      message: `Hello from ${context.geo.city ?? "somewhere"}`,
      instanceStartedAt: startedAt,
    });
  }

  return new Response("Not found", { status: 404 });
};
