import { useState, useEffect } from "react";
import { languages } from "../i18n/i18n";

interface LanguageSwitcherProps {
  currentLang: string;
  currentPath: string;
}

export default function LanguageSwitcher({
  currentLang,
  currentPath,
}: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".language-switcher")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const getLocalizedPath = (lang: string) => {
    // Remove current language prefix if exists
    const pathWithoutLang = currentPath.replace(/^\/(es|en)/, "") || "/";

    // Add new language prefix (except for default Spanish)
    if (lang === "es") {
      return pathWithoutLang;
    }
    return `/${lang}${pathWithoutLang}`;
  };

  return (
    <div className="language-switcher relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-text-light dark:text-text-dark hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
        aria-label="Change language"
      >
        <span className="material-symbols-outlined text-xl">language</span>
        <span className="text-sm font-medium uppercase">{currentLang}</span>
        <span
          className={`material-symbols-outlined text-sm transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          expand_more
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-card-light dark:bg-card-dark rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-50">
          {Object.entries(languages).map(([lang, label]) => (
            <a
              key={lang}
              href={getLocalizedPath(lang)}
              className={`block px-4 py-3 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                currentLang === lang
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-text-light dark:text-text-dark"
              }`}
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center justify-between">
                <span>{label}</span>
                {currentLang === lang && (
                  <span className="material-symbols-outlined text-primary text-lg">
                    check
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
