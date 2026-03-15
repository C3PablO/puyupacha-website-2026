"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("language");

  const otherLocale = routing.locales.find((l) => l !== locale) ?? "en";

  const handleSwitch = () => {
    router.push(pathname, { locale: otherLocale });
  };

  return (
    <button
      onClick={handleSwitch}
      className="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-1.5 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
      aria-label={`Switch to ${otherLocale}`}
    >
      {t("switchTo")}
    </button>
  );
}
