"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useState, useEffect } from "react";
const ExchangeCalculator = ({ data, isCBM }: any) => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>("");
  const [rate, setRate] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);

  const onChange = (value: string) => {
    setSelectedCurrency(value);
    if (
      value === "JPY" ||
      value === "KHR" ||
      value === "IDR" ||
      value === "KRW" ||
      value === "LAK" ||
      value === "VND"
    ) {
      setRate(parseFloat(data.rates[value].replace(/,/g, "")) / 100);
    } else {
      setRate(parseFloat(data.rates[value].replace(/,/g, "")));
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (/^\d*\.?\d*$/.test(input)) {
      setAmount(Number(input));
    }
  };

  useEffect(() => {
    setSelectedCurrency("");
    setRate(0);
    setAmount(0);
  }, [isCBM]);

  const selectKey = isCBM ? "cbmKey" : "nonCbmKey";

  return (
    <Card className="sm:w-full md:w-1/2">
      <CardHeader>
        <CardTitle className="text-center">Exchange Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="sm:w-full md:w-1/2">
            <Select key={selectKey} name="currency" onValueChange={onChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Currency" />
              </SelectTrigger>

              <SelectContent className="max-h-48 overflow-y-auto">
                {data &&
                  data.rates &&
                  Object.entries(data.rates).map(([currency]) => (
                    <SelectItem key={currency} value={currency}>
                      {currency}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>
          <div className="sm:w-full md:w-1/2">
            <Input
              value={amount}
              onChange={handleChange}
              name="amount"
              placeholder="Amount"
            />
          </div>
        </div>
        <div className="w-full mt-3 text-center">
          {(rate * amount).toLocaleString()} &nbsp;Kyats
        </div>
      </CardContent>
    </Card>
  );
};

export default ExchangeCalculator;
