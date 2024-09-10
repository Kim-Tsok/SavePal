// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   ArrowUpRight,
//   Wallet,
//   PiggyBank,
//   TrendingUp,
//   ChevronRight,
//   DollarSign,
// } from "lucide-react";
// import { RadialProgressBar } from "./radial-progress-bar";

// export default function Dashboard() {
//   const [balance, setBalance] = useState(1500);
//   const [savings, setSavings] = useState(1022);
//   const [savingsGoal, setSavingsGoal] = useState(1400);

//   const handleSave = () => {
//     if (balance >= 100) {
//       setBalance((prev) => prev - 100);
//       setSavings((prev) => prev + 100);
//     }
//   };

//   const savingsProgress = Math.min(
//     Math.round((savings / savingsGoal) * 100),
//     100
//   );

//   return (
//     <div className="p-6 bg-background min-h-screen">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6">Financial Dashboard</h1>

//         <div className="grid gap-6 md:grid-cols-3 mb-6">
//           <Card className="md:col-span-2">
//             <CardHeader>
//               <CardTitle className="text-lg font-medium">
//                 Account Overview
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="grid gap-4 md:grid-cols-2">
//                 <div>
//                   <p className="text-sm font-medium text-muted-foreground">
//                     Available Balance
//                   </p>
//                   <h2 className="text-3xl font-bold">${balance.toFixed(2)}</h2>
//                   <p className="text-sm text-muted-foreground mt-1">
//                     +$250 from last month
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-sm font-medium text-muted-foreground">
//                     Total Savings
//                   </p>
//                   <h2 className="text-3xl font-bold">${savings.toFixed(2)}</h2>
//                   <p className="text-sm text-muted-foreground mt-1">
//                     +${(savings - savingsGoal).toFixed(2)} from goal
//                   </p>
//                 </div>
//               </div>
//               <div className="mt-6">
//                 <Button onClick={handleSave}>
//                   Quick Save $100 <ArrowUpRight className="ml-2 h-4 w-4" />
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardHeader>
//               <CardTitle className="text-lg font-medium">
//                 Savings Goal
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="flex flex-col items-center">
//               <h3 className="text-xl font-semibold mb-2">Macbook Pro</h3>
//               <RadialProgressBar
//                 progress={savingsProgress}
//                 size={180}
//                 strokeWidth={12}
//                 className="mb-4"
//               />
//               <p className="text-sm text-muted-foreground">
//                 ${savings.toFixed(2)} / ${savingsGoal.toFixed(2)}
//               </p>
//             </CardContent>
//           </Card>
//         </div>

//         <Tabs defaultValue="transactions" className="w-full">
//           <TabsList className="grid w-full grid-cols-3">
//             <TabsTrigger value="transactions">Transactions</TabsTrigger>
//             <TabsTrigger value="insights">Insights</TabsTrigger>
//             <TabsTrigger value="goals">Goals</TabsTrigger>
//           </TabsList>
//           <TabsContent value="transactions">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Recent Transactions</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-4">
//                   {[
//                     {
//                       name: "Grocery Store",
//                       amount: -45.67,
//                       date: "2023-09-15",
//                     },
//                     {
//                       name: "Part-time Job",
//                       amount: 150.0,
//                       date: "2023-09-14",
//                     },
//                     {
//                       name: "Online Shopping",
//                       amount: -32.99,
//                       date: "2023-09-13",
//                     },
//                   ].map((transaction, index) => (
//                     <div
//                       key={index}
//                       className="flex justify-between items-center"
//                     >
//                       <div className="flex items-center">
//                         <div
//                           className={`w-10 h-10 rounded-full flex items-center justify-center ${
//                             transaction.amount > 0
//                               ? "bg-green-100"
//                               : "bg-red-100"
//                           }`}
//                         >
//                           <DollarSign
//                             className={`h-5 w-5 ${
//                               transaction.amount > 0
//                                 ? "text-green-600"
//                                 : "text-red-600"
//                             }`}
//                           />
//                         </div>
//                         <div className="ml-4">
//                           <p className="font-medium">{transaction.name}</p>
//                           <p className="text-sm text-muted-foreground">
//                             {transaction.date}
//                           </p>
//                         </div>
//                       </div>
//                       <span
//                         className={`font-medium ${
//                           transaction.amount > 0
//                             ? "text-green-600"
//                             : "text-red-600"
//                         }`}
//                       >
//                         {transaction.amount > 0 ? "+" : ""}
//                         {transaction.amount.toFixed(2)}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>
//           <TabsContent value="insights">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Financial Insights</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-sm text-muted-foreground">
//                   Analyze your spending habits and get personalized tips to
//                   improve your financial health.
//                 </p>
//                 <Button variant="outline" className="mt-4">
//                   View Full Report <ChevronRight className="ml-2 h-4 w-4" />
//                 </Button>
//               </CardContent>
//             </Card>
//           </TabsContent>
//           <TabsContent value="goals">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Saving Goals</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-4">
//                   {[
//                     { name: "Emergency Fund", current: 800, goal: 2000 },
//                     { name: "Summer Trip", current: 600, goal: 1000 },
//                   ].map((goal, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center justify-between"
//                     >
//                       <div className="flex items-center">
//                         <RadialProgressBar
//                           progress={Math.round(
//                             (goal.current / goal.goal) * 100
//                           )}
//                           size={60}
//                           strokeWidth={6}
//                           className="mr-4"
//                         />
//                         <div>
//                           <p className="font-medium">{goal.name}</p>
//                           <p className="text-sm text-muted-foreground">
//                             ${goal.current} / ${goal.goal}
//                           </p>
//                         </div>
//                       </div>
//                       <Button variant="outline" size="sm">
//                         Add Funds
//                       </Button>
//                     </div>
//                   ))}
//                 </div>
//                 <Button variant="outline" className="mt-6 w-full">
//                   Add New Goal <ChevronRight className="ml-2 h-4 w-4" />
//                 </Button>
//               </CardContent>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   );
// }
