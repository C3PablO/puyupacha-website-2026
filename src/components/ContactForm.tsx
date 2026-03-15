"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm({ id }: { id?: string }) {
  const t = useTranslations("contact");

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (data: FormState): FormErrors => {
    const errs: FormErrors = {};
    if (!data.name.trim()) {
      errs.name = t("validation.nameRequired");
    } else if (data.name.trim().length < 2) {
      errs.name = t("validation.nameTooShort");
    }
    if (!data.email.trim()) {
      errs.email = t("validation.emailRequired");
    } else if (!EMAIL_REGEX.test(data.email)) {
      errs.email = t("validation.emailInvalid");
    }
    if (!data.message.trim()) {
      errs.message = t("validation.messageRequired");
    } else if (data.message.trim().length < 10) {
      errs.message = t("validation.messageTooShort");
    }
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id={id} className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-2xl font-semibold text-green-600">
            {t("successMessage")}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          {t("title")}
        </h2>
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {t("nameLabel")}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder={t("namePlaceholder")}
              aria-describedby={errors.name ? "name-error" : undefined}
              aria-invalid={!!errors.name}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {t("emailLabel")}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t("emailPlaceholder")}
              aria-describedby={errors.email ? "email-error" : undefined}
              aria-invalid={!!errors.email}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {t("messageLabel")}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder={t("messagePlaceholder")}
              aria-describedby={errors.message ? "message-error" : undefined}
              aria-invalid={!!errors.message}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
            />
            {errors.message && (
              <p
                id="message-error"
                className="mt-1 text-sm text-red-600"
                role="alert"
              >
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            {t("submitButton")}
          </button>
        </form>
      </div>
    </section>
  );
}
