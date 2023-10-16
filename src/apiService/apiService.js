const url = "https://65290c3955b137ddc83e1b81.mockapi.io/api/v1/crud";

export const get = async () => {
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
export const Put = () => {};
export const Delete = async (userId) => {
  const result = await fetch(
    `https://65290c3955b137ddc83e1b81.mockapi.io/api/v1/crud/${userId}`,
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
