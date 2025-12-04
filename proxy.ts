import { updateSession } from "@/lib/middleware";
import { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
    return updateSession(request);
}

export const config = {
    matcher: ['/admin/:path*'],
}
