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
import React, { useState } from "react";
const ExchangeCalculator = ({ data }: any) => {
  const [selectedCurrency, setSelectedCurrency] = useState<String>();
  const [rate, setRate] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCurrency(event);
    setRate(parseFloat(data.rates[event].replace(/,/g, "")));
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (/^\d*\.?\d*$/.test(input)) {
      setAmount(Number(input));
    }
  };
  return (
    <Card className="w-1/2">
      <CardHeader>
        <CardTitle className="text-center">Exchange Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <div className="w-1/2">
            <Select name="currency" onValueChange={selectChange}>
              <SelectTrigger className="w-full ">
                <SelectValue placeholder="Currency" />
              </SelectTrigger>

              <SelectContent className="max-h-48 overflow-y-auto">
                {Object.entries(data.rates).map(([currency]) => (
                  <SelectItem key={currency} value={currency}>
                    {currency}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className=" w-1/2">
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
