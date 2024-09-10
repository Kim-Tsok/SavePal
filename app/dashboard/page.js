"use client";

import React, { useState, useEffect } from "react";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const KorapayBalance = () => {
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      const baseUrl =
        process.env.NEXT_PUBLIC_KORAPAY_API_URL || "https://api.korapay.com";
      const endpoint = "/merchant/api/v1/balances";
      const url = baseUrl + endpoint;

      try {
        const response = await fetch(
          "https://savepal-backend.onrender.com/api/getBalance",
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setBalance(data);
      } catch (error) {
        setError("Error fetching balance. Please try again later.");
        console.error("Error fetching balance:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBalance();
  }, []);

  if (loading) {
    return <div className="text-center">Loading balance...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {/* <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Korapay Balance
          </CardTitle>
        </CardHeader>
        <CardContent> */}
      <div className="space-y-4">
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800">
            Available Balance
          </h3>
          <p className="text-2xl font-bold text-green-600">
            {balance?.available || "0.00"}
          </p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-800">
            Pending Balance
          </h3>
          <p className="text-2xl font-bold text-yellow-600">
            {balance?.pending || "0.00"}
          </p>
        </div>
      </div>
      {/* </CardContent> */}
      {/* </Card> */}
    </div>
  );
};

export default KorapayBalance;
