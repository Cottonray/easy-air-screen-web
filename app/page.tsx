'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import LanguageSelector from './components/language-selector';
import en from './locales/en';
import ko from './locales/ko';
import ja from './locales/ja';
import zh from './locales/zh';
import es from './locales/es';
import fr from './locales/fr';
import de from './locales/de';
import pt from './locales/pt';
import ru from './locales/ru';

const translations: Record<string, typeof en> = {
  en,
  ko,
  ja,
  zh,
  es,
  fr,
  de,
  pt,
  ru
};

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

export default function Page() {
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
  };

  if (!mounted) {
    return null;
  }

  const t = translations[currentLang];

  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Image
            src="/images/logo.png"
            alt="Easy Air Screen Logo"
            width={80}
            height={80}
            className="rounded-lg"
          />
          <div>
            <h1 className="text-2xl font-semibold tracking-tighter">
              {t.title}
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400">
              {t.subtitle}
            </p>
          </div>
        </div>
        <LanguageSelector currentLang={currentLang} onLanguageChange={handleLanguageChange} />
      </div>

      <div className="my-8">
        <p className="mb-6 text-neutral-700 dark:text-neutral-300">
          {t.description}
        </p>
      </div>

      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tighter">{t.downloadMobile}</h2>
        <a
          href="https://play.google.com/store/apps/details?id=com.somnal.app.easy.air.screen"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Image
            src="/images/google-play-badge.png"
            alt="Get it on Google Play"
            width={200}
            height={77}
            className="hover:opacity-80 transition-opacity"
          />
        </a>
      </div>

      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tighter">{t.downloadDesktop}</h2>
        <div className="flex flex-col gap-4">
          <a
            href="/downloads/EasyAirScreen.dmg"
            className="inline-flex items-center justify-center rounded-md bg-neutral-900 dark:bg-neutral-100 px-6 py-3 text-sm font-medium text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors w-fit"
            download
          >
            {t.downloadMacOS}
          </a>
          {/* <a
            href="/downloads/EasyAirScreen.exe"
            className="inline-flex items-center justify-center rounded-md bg-neutral-900 dark:bg-neutral-100 px-6 py-3 text-sm font-medium text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors w-fit"
            download
          >
            {t.downloadWindows}
          </a> */}
        </div>
      </div>

      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tighter">{t.quickSetup}</h2>
        <ol className="list-decimal list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
          {t.setupSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>

      <div className="my-8 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">{t.performanceTip}</h3>
        <p className="text-sm text-blue-800 dark:text-blue-200">
          {t.performanceDescription}
        </p>
      </div>
    </section>
  )
}
