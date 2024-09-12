const BASE_URL = "http://localhost:3000";

const defaultHeaders = {
  "Content-Type": "application/json",
};

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Something went wrong");
  }
  return response.json();
};

const apiService = {
  get: async (url, params = {}, customHeaders = {}) => {
    // const queryString = new URLSearchParams(params).toString();
    // const fullUrl = `${BASE_URL}${url}${queryString ? `?${queryString}` : ""}`;

    let fullUrl;

    if (params.key) {
      const queryString = new URLSearchParams(params).toString();
      fullUrl = `${BASE_URL}${url}${queryString}`;
    } else {
      fullUrl = `${BASE_URL}${url}`;
    }

    const response = await fetch(fullUrl, {
      method: "GET",
      headers: {
        ...defaultHeaders,
        ...customHeaders,
      },
    });

    return handleResponse(response);
  },

  post: async (url, data = {}, customHeaders = {}) => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "POST",
      headers: {
        ...defaultHeaders,
        ...customHeaders,
      },
      body: JSON.stringify(data),
    });

    return handleResponse(response);
  },

  put: async (url, data = {}, customHeaders = {}) => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "PUT",
      headers: {
        ...defaultHeaders,
        ...customHeaders,
      },
      body: JSON.stringify(data),
    });

    return handleResponse(response);
  },

  delete: async (url, customHeaders = {}) => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "DELETE",
      headers: {
        ...defaultHeaders,
        ...customHeaders,
      },
    });

    return handleResponse(response);
  },
};

export default apiService;
