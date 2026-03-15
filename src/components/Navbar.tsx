"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  CloseButton,
} from "@headlessui/react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavLink {
  text: string;
  href: string;
}

interface NavbarProps {
  navLinks: NavLink[];
}

export default function Navbar({ navLinks }: NavbarProps) {
  const t = useTranslations("nav");

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="shrink-0">
                <a
                  href="#hero"
                  className="text-xl font-bold text-gray-900"
                >
                  Puyupacha
                </a>
              </div>

              <div className="hidden md:flex items-center gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                  >
                    {link.text}
                  </a>
                ))}
                <LanguageSwitcher />
              </div>

              <div className="md:hidden flex items-center gap-2">
                <LanguageSwitcher />
                <DisclosureButton
                  className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  aria-label={open ? t("closeMenu") : t("openMenu")}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {open ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden border-t border-gray-100">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <CloseButton
                  key={link.href}
                  as="a"
                  href={link.href}
                  className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md font-medium"
                >
                  {link.text}
                </CloseButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
