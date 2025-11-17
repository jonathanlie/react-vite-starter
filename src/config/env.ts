/**
 * Environment Configuration
 *
 * Centralized access to environment variables with type safety.
 * All environment variables must be prefixed with VITE_ to be accessible.
 *
 * @example
 * ```ts
 * import { env } from '@/config/env';
 * const apiUrl = env.API_URL;
 * ```
 */

interface EnvConfig {
  APP_TITLE: string;
  APP_VERSION: string;
  API_URL: string;
  API_TIMEOUT: number;
  FEATURE_ANALYTICS: boolean;
  FEATURE_DEBUG: boolean;
}

/**
 * Validates and returns environment configuration
 */
function getEnvConfig(): EnvConfig {
  const requiredEnvVars = [
    'VITE_APP_TITLE',
    'VITE_APP_VERSION',
    'VITE_API_URL',
  ] as const;

  const missing = requiredEnvVars.filter((key) => !import.meta.env[key]);

  if (missing.length > 0 && import.meta.env.PROD) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}`
    );
  }

  return {
    APP_TITLE: import.meta.env.VITE_APP_TITLE || 'React Vite Starter Kit',
    APP_VERSION: import.meta.env.VITE_APP_VERSION || '1.0.0',
    API_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
    API_TIMEOUT: Number(import.meta.env.VITE_API_TIMEOUT) || 5000,
    FEATURE_ANALYTICS:
      import.meta.env.VITE_FEATURE_ANALYTICS === 'true' || false,
    FEATURE_DEBUG: import.meta.env.VITE_FEATURE_DEBUG === 'true' || false,
  };
}

export const env = getEnvConfig();
