'use client';

import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  return (
    <section>
      <h2>{t('heading')}</h2>
      <p>{t('paragraph')}</p>
    </section>
  );
}
