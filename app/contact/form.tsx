"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

const formSchema = z.object({
  Name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  EmailAddress: z.string().min(3, {
    message: "Email must be at least 3 characters.",
  }),
  Phone: z.number().min(6, {
    message: "Number must be at least 3 digits.",
  }),
  text: z.string().min(10, {
    message: "Bio must be at least 10 characters.",
  }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Name: "",
      EmailAddress: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <section className="relative h-[764px] w-full bg-customHoverColor md:h-[711px] md:max-w-[689px] md:rounded-[15px] lg:h-[480px] lg:max-w-[1111px]">
      <div className="mx-auto h-[620px] w-[327px] py-[72px] md:w-full md:max-w-[573px] lg:grid lg:max-w-[1111px] lg:grid-flow-col lg:grid-cols-2 lg:gap-[95px] lg:px-[95px]">
        <div className="text-center text-white md:text-left ">
          <h4 className="mb-6 text-[32px] font-medium leading-[36px]  md:leading-[48px] lg:pt-[63px] ">
            Contact Us
          </h4>
          <p className="text-[15px] leading-[25px] md:mb-[48px] md:text-base lg:pb-[161px]">
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="Name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="EmailAddress"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email Address" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Phone" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Your message"
                      className="resize-none md:mb-6"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="text-center md:text-right">
              <Button size={"regular"} type="submit">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>

      <div className="absolute  top-0 h-[990px] w-[876px] ">
        <Image
          src="/contact/mobile/bg-pattern-hero-contact-mobile.svg"
          height={0}
          width={0}
          className="absolute left-[-90px] top-0 h-full w-full"
          alt=""
        />
      </div>
      {/*  */}
    </section>
  );
}
