const USERS = ["admin", "user"];

export const userExists = (username: string) => USERS.includes(username);

export const isAuthenticated = (sessionId: string) =>
  ["abc123"].includes(sessionId);
