import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PROFICIENCY_COLORS } from '@/config/colors';

/**
 * Proficiency Scale Explanation Component
 *
 * Displays the tiered proficiency level system with visual indicators.
 * Shows 4 distinct tiers: Conceptual (1-2), Operational (3-5), Proficient (6-7), Architectural (8-10).
 */
export function ProficiencyScaleExplanation() {
  const { t } = useTranslation();

  const tiers = [
    {
      nameKey: 'proficiencyScale.conceptual.name',
      range: '1-2',
      descriptionKey: 'proficiencyScale.conceptual.description',
      segments: 1,
      color: PROFICIENCY_COLORS.conceptual,
    },
    {
      nameKey: 'proficiencyScale.operational.name',
      range: '3-5',
      descriptionKey: 'proficiencyScale.operational.description',
      segments: 2,
      color: PROFICIENCY_COLORS.operational,
    },
    {
      nameKey: 'proficiencyScale.proficient.name',
      range: '6-7',
      descriptionKey: 'proficiencyScale.proficient.description',
      segments: 3,
      color: PROFICIENCY_COLORS.proficient,
    },
    {
      nameKey: 'proficiencyScale.architectural.name',
      range: '8-10',
      descriptionKey: 'proficiencyScale.architectural.description',
      segments: 4,
      color: PROFICIENCY_COLORS.architectural,
    },
  ];

  return (
    <Card className="mb-6 border-0 bg-white dark:bg-gray-900">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {t('proficiencyScale.title', 'Proficiency Scale')}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {tiers.map((tier) => (
          <div
            key={tier.nameKey}
            className="flex flex-col sm:flex-row sm:items-start gap-4 pb-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0 last:pb-0"
          >
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {t(tier.nameKey)}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  ({tier.range})
                </span>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4].map((segment) => (
                  <div
                    key={segment}
                    className={`w-8 h-2 rounded ${
                      !(segment <= tier.segments)
                        ? 'bg-gray-300 dark:bg-gray-600'
                        : ''
                    }`}
                    style={{
                      backgroundColor:
                        segment <= tier.segments ? tier.color : undefined,
                    }}
                    aria-label={
                      segment <= tier.segments
                        ? `Segment ${segment} active`
                        : `Segment ${segment} inactive`
                    }
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 flex-1">
              {t(tier.descriptionKey)}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
