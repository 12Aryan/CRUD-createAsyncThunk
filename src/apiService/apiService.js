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
  const response = await result.json()
  return response
};
export const Put = () => {};
export const Delete = async(data) => {
    const result = await fetch(url, {
        method: "DELETE",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    const response = await result
    return response
};
