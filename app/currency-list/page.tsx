import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

import getData from "@/lib/api";

export default async function CurrencyListPage() {
  const data = await getData();
  const timestamp = data.timestamp * 1000;
  const date = new Date(timestamp);
  const day = new Intl.DateTimeFormat("en", { day: "numeric" }).format(date);
  const month = new Intl.DateTimeFormat("en", { month: "long" }).format(date);
  const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);

  const formattedDate = `${day}th ${month} ${year}`;

  return (
    <main className="py-4">
      <section className="py-12 px-24 flex flex-col items-center text-center gap-8">
        <p className="text-2xl text-muted-foreground">{formattedDate}</p>
        <ScrollArea className="h-[480px] w-full ">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center font-medium">
                  Currency
                </TableHead>
                <TableHead className="text-center font-medium">Value</TableHead>
                <TableHead className="text-center font-medium">Rate</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {Object.entries(data.rates).map(([currency, rate]) => (
                <TableRow key={currency}>
                  <TableCell className="text-center">{currency}</TableCell>
                  {currency === "JPY" ||
                  currency === "KHR" ||
                  currency === "IDR" ||
                  currency === "KRW" ||
                  currency === "LAK" ||
                  currency === "VND" ? (
                    <TableCell className="text-center">100/-=K</TableCell>
                  ) : (
                    <TableCell className="text-center">1/-=K</TableCell>
                  )}

                  <TableCell className="text-center">
                    {String(rate)} &nbsp; Kyats
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </section>
    </main>
  );
}
