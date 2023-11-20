"use client";
import ExchangeCalculator from "@/components/Exchange-Calculator";
import { latestData, latestBlackData } from "@/lib/api";
import React, { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
export default function Home() {
  const [data, setData] = useState<any>([]);
  const [isCBM, setIsCBM] = useState(false);
  const handleSwitchChange = async () => {
    setIsCBM(!isCBM);
    await fetchData();
  };
  const fetchData = async () => {
    try {
      if (isCBM) {
        const newData = await latestData();
        setData(newData);
      } else {
        const newData = await latestBlackData();
        setData(newData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [isCBM]);

  return (
    <main className="py-4">
      <section className="py-12 flex flex-col items-center text-center gap-8">
        <h1 className="text-4xl font-bold">Currency Exchange</h1>
        <p className="text-2xl text-muted-foreground">{data.info}</p>
        <p className="text-2xl text-muted-foreground">{data.description}</p>
      </section>

      <div className="flex gap-6 items-center justify-center pb-6">
        <Label htmlFor="airplane-mode">Market Rate</Label>
        <Switch
          id="airplane-mode"
          checked={isCBM}
          onCheckedChange={handleSwitchChange}
        />
        <Label htmlFor="airplane-mode">Central Bank of Myanmar</Label>
      </div>
      <div className="flex gap-6 items-center justify-center">
        <ExchangeCalculator data={data} isCBM={isCBM} />
      </div>
    </main>
  );
}
