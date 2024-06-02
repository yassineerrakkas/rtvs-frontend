export const extractUserDetailsFromToken = (token) => {
  if (!token) return null;

  const parts = token.split(".");
  if (parts.length !== 3) return null;

  try {
    const encodedPayload = parts[1];
    const decodedPayload = atob(encodedPayload);
    return JSON.parse(decodedPayload);
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};
