import ExchangeCalculator from "@/components/Exchange-Calculator";
import getData from "@/lib/api";
export default async function Home() {
  const data = await getData();
  return (
    <main className="py-4">
      <section className="py-12 flex flex-col items-center text-center gap-8">
        <h1 className="text-4xl font-bold">Currency Exchange</h1>
        <p className="text-2xl text-muted-foreground">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
          reiciendis odit, minus itaque error officia sint sequi autem,
          accusamus laborum hic, ipsum provident voluptas animi repellendus
          voluptatem suscipit corrupti id.
        </p>
      </section>
      <div className="flex gap-6 items-center justify-center">
        <ExchangeCalculator data={data} />
      </div>
    </main>
  );
}
