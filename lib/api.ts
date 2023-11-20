"use server";
export async function latestData() {
  const res = await fetch("http://forex.cbm.gov.mm/api/latest", {
    headers: {
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function latestBlackData() {
  const res = await fetch(
    "https://mm-currency-exchange-api.vercel.app/api/latest",
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function historyData(date: Date) {
  const res = await fetch(`http://forex.cbm.gov.mm/api/history/${date}`, {
    headers: {
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
