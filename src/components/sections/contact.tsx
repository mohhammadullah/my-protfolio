"use client";

import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type ContactFormValues = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

type ContactApiResponse = { success: true } | { error: string };

const initialValues: ContactFormValues = {
  fullName: "",
  email: "",
  subject: "",
  message: "",
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function Contact() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (form: ContactFormValues): ContactFormErrors => {
    const nextErrors: ContactFormErrors = {};

    if (!form.fullName.trim()) nextErrors.fullName = "Full Name is required.";
    if (!form.email.trim()) nextErrors.email = "Email Address is required.";
    else if (!isValidEmail(form.email.trim()))
      nextErrors.email = "Please enter a valid email address.";
    if (!form.subject.trim()) nextErrors.subject = "Subject is required.";
    if (!form.message.trim()) nextErrors.message = "Message is required.";

    return nextErrors;
  };

  const handleChange =
    (field: keyof ContactFormValues) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target;
      setValues((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
      if (errorMessage) setErrorMessage("");
      if (successMessage) setSuccessMessage("");
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      const payload: ContactFormValues = {
        fullName: values.fullName.trim(),
        email: values.email.trim(),
        subject: values.subject.trim(),
        message: values.message.trim(),
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data: ContactApiResponse | null = null;
      try {
        data = (await response.json()) as ContactApiResponse;
      } catch {
        data = null;
      }

      if (!response.ok) {
        throw new Error(
          data && "error" in data
            ? data.error
            : "Failed to send message. Please try again.",
        );
      }

      if (!data || !("success" in data) || data.success !== true) {
        throw new Error(
          data && "error" in data
            ? data.error
            : "Failed to send message. Please try again.",
        );
      }

      setValues(initialValues);
      setErrors({});
      setSuccessMessage(
        "Your message has been sent successfully. Thank you for reaching out!",
      );
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClassName = (hasError?: string) =>
    `w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/20 ${
      hasError ? "border-red-400/60" : "border-white/10"
    }`;

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            <span className="gradient-text">Let&apos;s Work Together</span>
          </h2>
          <p className="mt-2 text-slate-400">
            Have a project in mind? Let&apos;s create something amazing
            together.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass rounded-2xl p-6 sm:p-7">
            <h3 className="text-xl font-semibold text-white">
              Contact Information
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Feel free to reach out for opportunities, collaborations, or
              project discussions.
            </p>
            <ul className="mt-6 space-y-4 text-sm text-slate-300">
              <li className="flex items-center gap-3">
                <span className="rounded-lg bg-violet-500/15 p-2 text-violet-300">
                  <Mail className="h-4 w-4" />
                </span>
                <a
                  href="mailto:gmhgazi92@gmail.com"
                  className="transition hover:text-white"
                >
                  gmhgazi92@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="rounded-lg bg-cyan-500/15 p-2 text-cyan-300">
                  <Phone className="h-4 w-4" />
                </span>
                <a
                  href="tel:+8801952182385"
                  className="transition hover:text-white"
                >
                  +8801952182385
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="rounded-lg bg-violet-500/15 p-2 text-violet-300">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>Khulna, Bangladesh</span>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/mohhammadullah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-white/10 p-2.5 text-slate-300 transition hover:border-violet-400/50 hover:text-white"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/gazi-mohammadullah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-white/10 p-2.5 text-slate-300 transition hover:border-cyan-400/50 hover:text-white"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-6 sm:p-7"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-1.5 block text-sm text-slate-300"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={values.fullName}
                  onChange={handleChange("fullName")}
                  className={inputClassName(errors.fullName)}
                  placeholder="Your full name"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={
                    errors.fullName ? "fullName-error" : undefined
                  }
                />
                {errors.fullName && (
                  <p id="fullName-error" className="mt-1 text-xs text-red-400">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm text-slate-300"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange("email")}
                  className={inputClassName(errors.email)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="subject"
                className="mb-1.5 block text-sm text-slate-300"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={values.subject}
                onChange={handleChange("subject")}
                className={inputClassName(errors.subject)}
                placeholder="Project discussion"
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "subject-error" : undefined}
              />
              {errors.subject && (
                <p id="subject-error" className="mt-1 text-xs text-red-400">
                  {errors.subject}
                </p>
              )}
            </div>

            <div className="mt-4">
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm text-slate-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={handleChange("message")}
                className={inputClassName(errors.message)}
                placeholder="Tell me about your project or idea..."
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-xs text-red-400">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {successMessage && (
              <output
                className="mt-4 block rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200"
                aria-live="polite"
              >
                {successMessage}
              </output>
            )}

            {errorMessage && (
              <p
                className="mt-4 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"
                role="alert"
              >
                {errorMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
