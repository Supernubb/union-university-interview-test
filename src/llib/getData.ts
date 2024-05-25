export async function getData({ apiSegment }: { apiSegment: string }) {
  try {
    const res = await fetch(`${process.env.API_URL}/${apiSegment}`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
    throw new Error("Failed to fetch data");
  }
}
