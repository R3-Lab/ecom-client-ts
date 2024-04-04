import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { NextRequest } from "next/server";
import { revalidatePath } from "next/cache";

const isProd = process.env.NODE_ENV === "production";

export const API_BASE: string =
  process.env.SERVER_URL ||
  (isProd ? "https://backend.bitnarts.com" : "http://localhost:5800");
export const SITE_ID: string =
  process.env.SITE_ID || "ebc1e210-d8d7-46be-ba98-349b59b4e3dd";

type FetcherResponse<T> = {
  data?: T;
  error?: FetchError;
  headers: Headers;
};

type FetchError = {
  message: string;
  status: number;
};

export const fetcher = async <T>(
  path: string,
  options: RequestInit = {},
): Promise<FetcherResponse<T>> => {
  const { token: cookieToken, site_id } = await getSession();
  const authorization = cookieToken && {
    Authorization: `Bearer ${cookieToken}`,
  };
  const requestCookies = site_id && `site_id=${site_id}`;
  const res = await fetch(API_BASE + path, {
    headers: {
      "Content-Type": "application/json",
      ...(requestCookies && { Cookie: requestCookies }),
      ...authorization,
      ...options.headers,
    },
    ...options,
  });
  try {
    const { headers } = res;

    const body = await res.text();
    const data = body ? JSON.parse(body) : undefined;

    if (!res.ok) {
      return {
        error: data,
        headers,
      };
    }

    return {
      data,
      headers,
    };
  } catch (error) {
    console.error("Failed to fetch data from path:", path, error);
    throw new Error("Failed to fetch data");
  }
};

type SessionType = {
  token: string | undefined;
  site_id: string | undefined;
  payload: JWTPayload | undefined;
};

type JWTPayload = {
  id: string;
  username: string;
  email: string;
  exp: number;
};

export const getSession = async (req?: NextRequest): Promise<SessionType> => {
  const getPayload = (token: string | undefined) => {
    if (!token) {
      return undefined;
    }

    try {
      return jwtDecode(token) as JWTPayload;
    } catch (error) {
      return undefined;
    }
  };

  if (req) {
    const token = req.cookies.get("token")?.value;
    const site_id = req.cookies.get("site_id")?.value;

    return { token, site_id, payload: getPayload(token) };
  }

  const token = cookies().get("token")?.value;
  const site_id = cookies().get("site_id")?.value;

  return { token, site_id, payload: getPayload(token) };
};

export const setSiteIdSession = async (
  site_id?: string,
  current_path?: string,
) => {
  if (!site_id) {
    cookies().delete("site_id");
  } else {
    cookies().set("site_id", site_id, {
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // One week
      path: "/",
    });
  }

  // revalidatePath(paths.dashboard.root, 'layout')
  if (current_path) {
    revalidatePath(current_path);
  }
};
