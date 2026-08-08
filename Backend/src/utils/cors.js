const allowedOrigins = process.env.CLIENT_URL
  ? process.env.CLIENT_URL.split(",").map((url) => url.trim().replace(/\/$/, ""))
  : [];

const corsOrigin = (origin, callback) => {
  // Allow requests with no origin (e.g. mobile apps, curl, Postman)
  if (!origin) return callback(null, true);

  const cleanOrigin = origin.replace(/\/$/, "");

  // If CLIENT_URL is specified as wildcard '*'
  if (allowedOrigins.includes("*")) {
    return callback(null, true);
  }

  // If cleanOrigin is in allowedOrigins list
  if (allowedOrigins.includes(cleanOrigin)) {
    return callback(null, true);
  }

  // Default allowed origins (localhost & Vercel deployment domains)
  if (
    cleanOrigin.includes("localhost") ||
    cleanOrigin.endsWith(".vercel.app") ||
    cleanOrigin === "https://ai-kanban-board1.vercel.app"
  ) {
    return callback(null, true);
  }

  // Fallback to allow connection
  return callback(null, true);
};

module.exports = { corsOrigin };
