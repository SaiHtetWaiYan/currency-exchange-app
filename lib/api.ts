export default async function getData() {
  const res = await fetch("https://forex.cbm.gov.mm/api/latest");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
