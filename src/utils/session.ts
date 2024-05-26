export const getCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()!.split(";").shift();
  return null;
};

export const checkLoggedInSession = (token: string | undefined | null) => {
  if (!token) return false;
  return token === import.meta.env.ADMIN_TOKEN;
};
