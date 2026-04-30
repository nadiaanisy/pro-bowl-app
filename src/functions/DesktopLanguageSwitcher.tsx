import i18n from '../i18n';
import { Globe } from 'lucide-react';

export default function DesktopLanguageSwitcher() {
  const currentLang = i18n.language;

  const baseClass = "px-2 py-1 text-sm transition-colors duration-200 cursor-pointer";

  const activeClass = "text-white font-semibold";
  const inactiveClass = "text-white/50 hover:text-white";

  return (
    <div className="flex items-center gap-1">
      <Globe className="hidden md:block text-white" size={24} />
      <button
        onClick={() => i18n.changeLanguage("en")}
        className={`${baseClass} ${
          currentLang === "en" ? activeClass : inactiveClass
        }`}
      >
        EN
      </button>

      <span className="text-white/40">|</span>

      <button
        onClick={() => i18n.changeLanguage("ms")}
        className={`${baseClass} ${
          currentLang === "ms" ? activeClass : inactiveClass
        }`}
      >
        BM
      </button>
    </div>
  );
};