import type { FormEvent } from "react";
import { useCookies } from "react-cookie";

export default function LoginForm() {
  const [cookies, setCookie] = useCookies(["adminLoggedInToken"]);

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const response = await fetch("/api/admin/login", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.status === 200) {
      setCookie("adminLoggedInToken", data.body.token);
      window.location.href = "/";
    } else {
      alert("Login failed");
    }
  }

  return (
    <div className="w-full flex justify-center min-h-screen items-center bg-gradient-to-br from-pink-300 to-blue-300">
      <div className="w-1/4 border p-4 rounded-md gap-y-5 flex flex-col bg-white">
        <h1 className="text-center text-3xl font-bold">Admin Login!</h1>
        <form
          onSubmit={(e) => handleLogin(e)}
          className="flex flex-col gap-y-1">
          <label className="font-semibold">Username</label>
          <input
            type="text"
            id="userName"
            name="userName"
            placeholder="username"
            required
            className="border rounded-md p-2"
          />
          <label className="font-semibold">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            required
            className="rounded-md border p-2"
          />
          <button className="bg-blue-400 rounded-md p-2 fond-semibold text-white">
            Login!
          </button>
        </form>
      </div>
    </div>
  );
}
