import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const text = body?.text;

    if (!text || typeof text !== "string") {
      return new Response(
        JSON.stringify({ error: "Text is required." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const summary = `Summary: ${text.slice(0, 120)}...`;

    return new Response(
      JSON.stringify({ summary }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Summarize API error:", error);

    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Something went wrong.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};