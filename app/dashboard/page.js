"use client"
import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Loader from "@/Components/Loader";
import Error from "@/Components/Error";
import { supabase } from "@/lib/supabaseClient"; // Import the client

const KorapayBalance = () => {
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user data:", error);
      } else {
        setUser(user);
      }
    };

    fetchUserData();

    const fetchBalance = async () => {
      try {
        const response = await fetch(
          "https://savepal-backend.onrender.com/api/getBalance",
          { method: "GET" }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setBalance(data);

        if (user) {
          const { data, error } = await supabase
            .from("users")
            .upsert([{ id: user.id, email: user.email, full_name: user.user_metadata.full_name }]);

          if (error) {
            console.error("Error saving user data:", error);
          } else {
            console.log("User data saved:", data);
          }
        }
      } catch (error) {
        setError("Error loading dashboard. Please try again later.");
        console.error("Error fetching balance:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBalance();
  }, [user]);

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Korapay Balance
          </CardTitle>
        </CardHeader>
        <CardContent>
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
        </CardContent>
      </Card>
    </div>
  );
};

export default KorapayBalance;
