export async function fetchAPI<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
    ...options,
    cache: options?.cache || "no-store", // kita set no-store karena kita ingin mendapat data lebih real time atau lebih updated
  });

  if (!res.ok) {
    const fullUrl = `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`;
    console.log(`[Fetch Error] URL: ${fullUrl}, Status: ${res.status}`);

    let errorMessage = `Failed to fetch data from ${endpoint}`;
    try {
      const text = await res.text();
      console.log(`[Fetch Error] Response Body: ${text}`);
      try {
        const errorData = JSON.parse(text);
        errorMessage = errorData.message || errorData.error || errorMessage;
      } catch {
        // parse failed, use text if short, otherwise default
        if (text.length < 200) errorMessage = text;
      }
    } catch (e) {
      console.log("[Fetch Error] Failed to read response body", e);
    }

    throw new Error(errorMessage);
  }

  return res.json();
}

export function getImageUrl(path: string) {
  if (path.startsWith("http")) return path; // artinya url nya sudah valid
  return `${process.env.NEXT_PUBLIC_API_ROOT}/${path}`;
}