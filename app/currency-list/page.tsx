import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import getData from "@/lib/api";

export default async function CurrencyListPage() {
  const data = await getData();
  return (
    <main className="py-4">
      <section className="py-12 px-24 flex flex-col items-center text-center gap-8">
        <ScrollArea className="h-[480px] w-full ">
          <Table>
            <TableCaption>{data.info}</TableCaption>

            <TableHeader>
              <TableRow>
                <TableHead className="text-center font-medium">
                  Currency
                </TableHead>
                <TableHead className="text-center font-medium">Rate</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {Object.entries(data.rates).map(([currency, rate]) => (
                <TableRow key={currency}>
                  <TableCell className="text-center">{currency}</TableCell>
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
