"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { cn } from "../../../lib/utils";

import { Button } from "../../../components/ui/button";
import { Calendar } from "../../../components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../components/ui/popover";
import toast from "react-hot-toast";
import { Input } from "../../../components/ui/input";

const formSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters."),
  username: z.string().max(15, "Username is invalid."),
});

const ProfileForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  const router = useRouter();

  const handleForgetPassword = () => {
    router.push("/forgetpass");
  };

  function onSubmit(data) {
    const serializedData = {
      username: data.username,
      email: data.email,
      password: data.password,
      dob: data.dob,
    };
  
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">
            {JSON.stringify(serializedData, null, 2)}
          </code>
        </pre>
      ),
    });
  
    router.push("/products");
  }
  

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="w-1/2 mx-auto border border-white rounded-lg p-8">
        <h2 className="text-center text-2xl font-bold mb-6">
          R E G I S T E R ...
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="username"
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

            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Date of Birth</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date > new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button onClick={onSubmit} type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ProfileForm;
