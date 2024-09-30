"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";

const TabsDemo = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); 

  const handleNewPassword = () => {
    if (!email) {
      setError("Email is required.");
      return; 
    }
    
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return; 
    }

    setError(""); 
    router.push("/products"); 
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200 w-500">
      <Tabs
        defaultValue="account"
        className="border border-white rounded-lg p-8"
      >
        <TabsList className="text-white">
          <TabsTrigger value="account">Forget Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card className="bg-gray-200">
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 bg-gray-200 ">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  placeholder="Email"
                  id="email"
                  className="border border-white rounded-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new-password">New Password</Label>
                <Input
                  type="password"
                  placeholder="New Password"
                  id="new-password"
                  className="border border-white rounded-lg"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)} 
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="confirm-password">Confirmation Password</Label>
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  id="confirm-password"
                  className="border border-white rounded-lg"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)} 
                />
              </div>
              {error && <p className="text-red-500">{error}</p>} 
            </CardContent>
            <CardFooter>
              <Button onClick={handleNewPassword} className="bg-gray-800">
                Submit
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabsDemo;
