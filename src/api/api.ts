const api: string | undefined = import.meta.env.VITE_APP_API;

export const APIS = {
  WAITLIST: {
    JOIN: `${api}/waitlist/`,
  },
};
