import { API_BASE_URL } from "../config/api";

export interface LoginUser {
  id: number;
  name: string;
  email: string;
  role: "CUSTOMER" | "ORGANIZER" | "ADMIN";
}

export interface LoginResponse {
  message: string;
  token: string;
  user: LoginUser;
}

export const loginUser = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const response = await fetch(
    `${API_BASE_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Login failed"
    );
  }

  return data;
};

export interface RegisterResponse {
  message: string;
  user: LoginUser;
}

export const registerCustomer = async (
  name: string,
  email: string,
  password: string
): Promise<RegisterResponse> => {
  const response = await fetch(
    `${API_BASE_URL}/auth/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Customer registration failed"
    );
  }

  return data;
};

export const registerOrganizer = async (
  name: string,
  email: string,
  password: string
): Promise<RegisterResponse> => {
  const response = await fetch(
    `${API_BASE_URL}/auth/register-organizer`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Organizer registration failed"
    );
  }

  return data;
};

export const getCurrentUser = async (token: string) => {
  const response = await fetch(
    `${API_BASE_URL}/auth/me`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Authentication failed"
    );
  }

  return data;
};