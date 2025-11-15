import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

/**
 * Contact Page
 *
 * Displays contact information including email and resume download link.
 */
export function Contact() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 lg:py-12"
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 lg:mb-12">
        {t('contact.title', 'Contact')}
      </h1>

      <section className="mb-8 lg:mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">
          {t('contact.getInTouch', 'Get in Touch')}
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
          {t(
            'contact.description',
            'Feel free to reach out via email or download my resume.'
          )}
        </p>
      </section>

      <section className="mb-8 lg:mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">
          {t('contact.email', 'Email')}
        </h2>
        <a
          href="mailto:your.email@example.com"
          className="text-base text-blue-600 dark:text-blue-400 hover:underline"
        >
          your.email@example.com
        </a>
      </section>

      <section className="mb-8 lg:mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">
          {t('contact.resume', 'Resume')}
        </h2>
        <a
          href="/resume.pdf"
          download
          className="inline-block px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 font-medium transition-colors duration-200"
        >
          {t('contact.downloadResume', 'Download Resume')}
        </a>
      </section>
    </motion.div>
  );
}

