export type THealthCheckResult = {
  status: "healthy" | "unhealthy";
  timestamp: string;
  database: {
    status: "connected" | "disconnected";
    error?: string;
  };
};
