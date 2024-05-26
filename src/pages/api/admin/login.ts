import type { APIRoute } from "astro";

function tryLogin(userName: string, password: string) {
  return (
    userName === import.meta.env.ADMIN_USERNAME &&
    password === import.meta.env.ADMIN_PASSWORD
  );
}

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const userName = data.get("userName") as string;
  const password = data.get("password") as string;
  if (!userName || !password) {
    return new Response(
      JSON.stringify({
        status: 400,
        body: { message: "Username and password are required" },
      })
    );
  }
  if (tryLogin(userName, password)) {
    return new Response(
      JSON.stringify({
        status: 200,
        body: {
          message: "Login successful",
          token: import.meta.env.ADMIN_TOKEN,
        },
      })
    );
  }
  return new Response(
    JSON.stringify({
      status: 401,
      body: { message: "Login failed" },
    })
  );
};
