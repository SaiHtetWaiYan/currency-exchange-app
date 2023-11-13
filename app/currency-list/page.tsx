"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

import { latestData, historyData } from "@/lib/api";
import { DatePicker } from "@/components/Date-Picker";
import React, { useState, useEffect } from "react";
export default function CurrencyListPage() {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await latestData();
      setData(data);
    };
    fetchData();
  }, []);
  const selectedDateData = (data: any) => {
    const dateString = data;
    const inputDate = new Date(dateString);
    const day = inputDate.getDate();
    const month = inputDate.getMonth() + 1;
    const year = inputDate.getFullYear();
    const formattedDate = `${day < 10 ? "0" : ""}${day}-${
      month < 10 ? "0" : ""
    }${month}-${year}`;

    const fetchData = async () => {
      try {
        const data = await historyData(formattedDate as any);
        setData(data);
      } catch (error) {
        console.error("Error fetching history data:", error);
      }
    };
    fetchData();
  };
  return (
    <main className="py-4">
      <section className="py-12 md:px-24 flex flex-col items-center text-center gap-8">
        <p className="text-xl text-muted-foreground gap-2">
          <DatePicker
            defaultDate={new Date()}
            selectedDateData={selectedDateData}
          />
        </p>

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

            {/* <TableBody>
              {data && data.rates && Object.entries(data.rates).length > 0 ? (
                Object.entries(data.rates).map(([currency, rate]) => (
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
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} className="text-center">
                    <p className="pt-10">No data available</p>
                  </TableCell>
                </TableRow>
              )}
            </TableBody> */}
            <TableBody>
              {data &&
                data.rates &&
                Object.entries(data.rates).map(([currency, rate]) => (
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
