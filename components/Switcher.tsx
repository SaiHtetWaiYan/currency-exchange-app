"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function Switcher() {
  const [isAirplaneModeOn, setAirplaneMode] = useState(false);

  const handleAirplaneModeChange = () => {
    setAirplaneMode(!isAirplaneModeOn);
    console.log(isAirplaneModeOn);
    // Add any other logic you want to execute when the switch is toggled
  };
  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
      <Switch
        id="airplane-mode"
        checked={isAirplaneModeOn}
        onCheckedChange={handleAirplaneModeChange}
      />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}
