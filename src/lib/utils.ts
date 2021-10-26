import Cookies from "universal-cookie";
const cookies = new Cookies();
export const setLocalStorage = (name: string, value: any) =>
  localStorage.setItem(name, value);

export const getLocalStorage = (name: string) => {
  return localStorage.getItem(name);
};

export const removeLocalStorage = (name: string) => {
  return localStorage.removeItem(name);
};

export const setCookies = (name:string, value:any, expires:number) => {
  let d = new Date();
  d.setTime(d.getTime() + expires * 1000);

  // cookies.set(name, value, { path: "/", expires: d });
  localStorage.setItem(name, value);
};

export const getCookies = (name:string) => {
  // return cookies.get(name);
  return localStorage.getItem(name);
};

export const removeCookies = (name:string) => {
  cookies.remove(name, { path: "/" });
};
