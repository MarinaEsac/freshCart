"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

import { Button } from "../../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

const ProfileForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  const router = useRouter();

  const handleForgetPassword = () => {
    router.push("/forgetpass");
  };

  const onSubmit = (data) => {
    router.push("/products");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="w-1/2 mx-auto border border-white rounded-lg p-8">
        <h2 className="text-center text-2xl font-bold mb-6">L O G I N...</h2> 
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="email"
                      className="bg-white-800 text-black placeholder-gray-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="password"
                      className="bg-white-800 text-black placeholder-gray-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
            <Button className="m-3" type="button" onClick={handleForgetPassword}>
              Forget Password
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ProfileForm;
