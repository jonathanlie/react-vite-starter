import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ACTION_COLORS, CONTACT_COLORS } from '@/config/colors';
import { CONTENT_PADDING } from '@/config/spacing';

/**
 * Contact Page
 *
 * Displays professional summary with profile picture, contact information,
 * and resume download link.
 */
export function Contact() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const email = 'jonathanlie94@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      {/* Profile Section */}
      <section
        className={`w-full bg-gray-950 ${CONTENT_PADDING.horizontal} py-8 lg:py-12`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 items-start lg:items-center lg:justify-center">
            {/* Profile Picture */}
            <div className="shrink-0 w-full md:w-auto mx-auto lg:mx-0">
              <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 mx-auto md:mx-0">
                <img
                  src="/profile.jpg"
                  alt={t('contact.profileAlt', 'Jonathan Lie')}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Professional Summary */}
            <div className="flex-1 lg:flex-initial max-w-[700px]">
              <p className="text-base leading-relaxed text-gray-900 dark:text-gray-100 whitespace-pre-line">
                {t(
                  'contact.summary',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section
        className={`w-full bg-gray-950 ${CONTENT_PADDING.horizontal} py-8 lg:py-12`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {/* Email Card */}
            <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-[0_4px_6px_0_hsla(0,0%,0%,0.2)] flex flex-col">
              <div
                className="h-1"
                style={{ backgroundColor: ACTION_COLORS.primary }}
              ></div>
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">
                  {t('contact.emailTitle', 'Get in Touch')}
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-6 flex-1">
                  {t(
                    'contact.emailDescription',
                    'Feel free to reach out via email for any inquiries or opportunities.'
                  )}
                </p>
                <Button
                  onClick={handleCopyEmail}
                  className="px-6 py-3 text-white font-medium mt-auto w-auto self-start transition-colors"
                  style={{
                    backgroundColor: ACTION_COLORS.primary,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = ACTION_COLORS.hover;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      ACTION_COLORS.primary;
                  }}
                >
                  {copied
                    ? t('contact.emailCopied', 'Copied!')
                    : t('contact.copyEmail', 'Copy Email Address')}
                </Button>
              </div>
            </div>

            {/* Resume Card */}
            <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-[0_4px_6px_0_hsla(0,0%,0%,0.2)] flex flex-col">
              <div className="h-1 bg-purple-600"></div>
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">
                  {t('contact.resumeTitle', 'Resume')}
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-6 flex-1">
                  {t(
                    'contact.resumeDescription',
                    'Download my resume to learn more about my experience and qualifications.'
                  )}
                </p>
                <Button
                  asChild
                  variant="ghost"
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 mt-auto w-auto self-start"
                >
                  <a
                    href="/resume.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('contact.viewResume', 'View Resume (PDF)')}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
