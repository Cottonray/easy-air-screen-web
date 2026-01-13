'use client';

import Link from 'next/link'
import { useState, useEffect } from 'react';
import LanguageSelector from './language-selector';

const navItems = {
  '/': {
    name: 'Download',
  },
  '/privacy': {
    name: 'Privacy Policy',
  },
}

function getSystemLanguage(): string {
  if (typeof window === 'undefined') return 'en';

  const browserLang = navigator.language.toLowerCase();

  if (browserLang.startsWith('ko')) return 'ko';
  if (browserLang.startsWith('ja')) return 'ja';
  if (browserLang.startsWith('zh')) return 'zh';
  if (browserLang.startsWith('es')) return 'es';
  if (browserLang.startsWith('fr')) return 'fr';
  if (browserLang.startsWith('de')) return 'de';
  if (browserLang.startsWith('pt')) return 'pt';
  if (browserLang.startsWith('ru')) return 'ru';

  return 'en';
}

export function Navbar() {
  const [currentLang, setCurrentLang] = useState('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    const lang = savedLang || getSystemLanguage();
    setCurrentLang(lang);
    setMounted(true);
  }, []);

  const handleLanguageChange = (lang: string) => {
    setCurrentLang(lang);
    localStorage.setItem('language', lang);
    window.dispatchEvent(new CustomEvent('languagechange', { detail: lang }));
  };

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-0 pb-0 fade scroll-pr-6"
          id="nav"
        >
          <div className="flex flex-row space-x-0">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
          </div>
          {mounted && (
            <div className="flex justify-start sm:justify-end">
              <LanguageSelector currentLang={currentLang} onLanguageChange={handleLanguageChange} />
            </div>
          )}
        </nav>
      </div>
    </aside>
  )
}
