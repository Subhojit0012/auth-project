"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from "@/components/ui/form";

import { CardWrapper } from "./card-wrapper";

const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <CardWrapper
      headerLable="Welcome Back"
      backButtonLable="Don't have an account"
      backuttonHref="/auth/register"
      showSocial
    >
      Login Form
    </CardWrapper>
  );
};

export default LoginForm;
