import { buildLlmsTxt } from "@/lib/llms"

// Sin APIs dinámicas: con Cache Components se prerenderiza en build desde campaign.config.ts (ver AGENTS.md, «llms.txt»).

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=0, must-revalidate" },
  })
}
