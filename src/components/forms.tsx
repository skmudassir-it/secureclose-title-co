"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { quoteSchema, type QuoteInput, SERVICE_OPTIONS, PROPERTY_OPTIONS } from "@/lib/quote-schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const fieldCls =
  "w-full rounded-xl border-input bg-white/70 px-4 py-3 text-sm shadow-sm backdrop-blur-md transition focus-visible:ring-2 focus-visible:ring-primary/60";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs font-medium text-red-600">{message}</p>;
}

export function QuoteForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<QuoteInput>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { name: "", email: "", phone: "", service: "", propertyType: "", message: "" },
  });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (values: QuoteInput) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json()) as { success?: boolean; message?: string };
      if (data?.success) {
        toast.success(data.message ?? "Quote request received — we'll respond within one business day.");
        reset();
      } else {
        toast.error(data?.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error — please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="glass grid gap-5 rounded-3xl p-6 md:grid-cols-2 md:p-8">
      <div>
        <Label htmlFor="name">Full name *</Label>
        <Input id="name" className={fieldCls} placeholder="Jordan Ellis" {...register("name")} />
        <FieldError message={errors.name?.message} />
      </div>
      <div>
        <Label htmlFor="email">Email *</Label>
        <Input id="email" type="email" className={fieldCls} placeholder="you@example.com" {...register("email")} />
        <FieldError message={errors.email?.message} />
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" type="tel" className={fieldCls} placeholder="(555) 000-0000" {...register("phone")} />
        <FieldError message={errors.phone?.message} />
      </div>
      <div>
        <Label htmlFor="service">Service *</Label>
        <Controller
          control={control}
          name="service"
          render={({ field }) => (
            <Select value={field.value} onValueChange={(v) => field.onChange(v ?? "")}>
              <SelectTrigger id="service" className={fieldCls}>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {SERVICE_OPTIONS.map((o) => (
                  <SelectItem key={o.value} value={o.value}>
                    {o.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        <FieldError message={errors.service?.message} />
      </div>
      <div>
        <Label htmlFor="propertyType">Property type *</Label>
        <Controller
          control={control}
          name="propertyType"
          render={({ field }) => (
            <Select value={field.value} onValueChange={(v) => field.onChange(v ?? "")}>
              <SelectTrigger id="propertyType" className={fieldCls}>
                <SelectValue placeholder="Select a property type" />
              </SelectTrigger>
              <SelectContent>
                {PROPERTY_OPTIONS.map((o) => (
                  <SelectItem key={o.value} value={o.value}>
                    {o.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        <FieldError message={errors.propertyType?.message} />
      </div>
      <div className="md:col-span-2">
        <Label htmlFor="message">Tell us about your transaction</Label>
        <Textarea id="message" rows={4} className={fieldCls} placeholder="Address, timeline, anything that helps us quote accurately…" {...register("message")} />
        <FieldError message={errors.message?.message} />
      </div>
      <div className="md:col-span-2">
        <Button type="submit" disabled={submitting} className="btn-gradient rounded-xl px-10 py-6 text-base font-semibold disabled:opacity-60">
          {submitting ? (
            <span className="inline-flex items-center gap-2">
              <i className="fa-solid fa-spinner fa-spin" aria-hidden /> Submitting…
            </span>
          ) : (
            <span className="inline-flex items-center gap-2">
              Request My Quote <i className="fa-solid fa-paper-plane" aria-hidden />
            </span>
          )}
        </Button>
        <p className="mt-3 text-xs text-slate-500">No spam, no obligation. We reply within one business day.</p>
      </div>
    </form>
  );
}
