export async function ApiService(url:any) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data
    } catch (error) {
      console.error(error);
    }
}