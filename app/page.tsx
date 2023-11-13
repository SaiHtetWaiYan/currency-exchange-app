import ExchangeCalculator from "@/components/Exchange-Calculator";
import { latestData } from "@/lib/api";
export default async function Home() {
  const data = await latestData();
  const timestamp = data.timestamp * 1000;
  const date = new Date(timestamp);
  const day = new Intl.DateTimeFormat("en", { day: "numeric" }).format(date);
  const month = new Intl.DateTimeFormat("en", { month: "long" }).format(date);
  const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);

  const formattedDate = `${day}th ${month} ${year}`;
  return (
    <main className="py-4">
      <section className="py-12 flex flex-col items-center text-center gap-8">
        <h1 className="text-4xl font-bold">Currency Exchange</h1>
        <p className="text-2xl text-muted-foreground">
          Central Bank of Myanmar
        </p>
        <p className="text-2xl text-muted-foreground">
          Reference Foreign Exchange Rates as of {formattedDate}
        </p>
      </section>
      <div className="flex gap-6 items-center justify-center">
        <ExchangeCalculator data={data} />
      </div>
    </main>
  );
}
