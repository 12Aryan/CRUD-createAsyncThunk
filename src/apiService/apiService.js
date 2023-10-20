const url = import.meta.env.VITE_BASE_API_URL;

export const Get = async () => {
  const result = await fetch(url);
  const response = await result.json();
  return response;
};
export const Post = async (data) => {
  const result = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const response = await result.json();
  return response;
};
export const Put = async (data) => {
  const result = await fetch(`${url}/${data.id}`, {
    method: "PUT",
    headers: {"Content-Type": "application/json"  },
    body: JSON.stringify(data),
  });
  const response = await result.json();
  return response;
};
export const Delete = async (userId) => {
  const result = await fetch(
    `${url}/${userId}`,
    {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  const response = await result.json();
  return response;
};
