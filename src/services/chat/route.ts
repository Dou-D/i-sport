export const fetchData = async (message: string): Promise<Response> => {
  const response = await fetch('http://192.168.3.20:80/generate', {
    method: 'POST',
    body: JSON.stringify({
      message: message,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};
