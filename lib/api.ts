"use server";
export async function latestData() {
  const res = await fetch("https://forex.cbm.gov.mm/api/latest");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function historyData(date: Date) {
  const res = await fetch(`http://forex.cbm.gov.mm/api/history/${date}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
