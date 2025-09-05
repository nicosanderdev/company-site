import { Spinner, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Tooltip } from 'flowbite-react';
import { Check, CircleHelp, X } from 'lucide-react';
import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { SectionSubtitle } from '../components/SectionSubtitle';
import { featureService } from '../services/FeaturesService';

export default function DetailedProductPage() {
  const { data: features, isLoading, error } = featureService();

  // Helper component for check/cross
  const FeatureStatus = ({ hasFeature }: { hasFeature: boolean }) => (
    <div className="flex justify-center">
      {hasFeature ? <Check className="h-5 w-5 text-emerald-500" /> : <X className="h-5 w-5 text-red-500" />}
    </div>
  );

  // Handle loading state
  if (isLoading) {
    return (
      <section className="bg-gray-50 dark:bg-gray-900 py-16 flex justify-center items-center min-h-screen">
        <Spinner size="xl" aria-label="Loading features..." />
      </section>
    );
  }

  // Handle error state
  if (error || !features) {
    return (
      <section className="bg-gray-50 dark:bg-gray-900 py-16 text-center">
        <p className="text-red-500">Error: {error || 'Could not load product features.'}</p>
      </section>
    );
  }

  // Group features by category (this logic only runs when data is successfully loaded)
  const groupedFeatures = features.reduce((acc, feature) => {
    (acc[feature.category] = acc[feature.category] || []).push(feature);
    return acc;
  }, {} as Record<string, typeof features>);

  return (
    <>
      <section className="bg-transparent dark:bg-gray-900 py-16">
        <div className="max-w-screen-sm mx-auto px-6 lg:px-8">
          {/* Intro */}
          <div className="flex flex-col mb-12">
            <SectionHeader>
              Nuestros planes de precios
            </SectionHeader>
            <SectionSubtitle className='text-center mx-auto'>
              Compará las características de cada paquete y elegí el que mejor se adapte a tus necesidades.
            </SectionSubtitle>
          </div>

          {/* Tabla */}
          <div className="overflow-x-auto rounded-2xl shadow-lg">
            <Table hoverable className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              {/* TableHead remains the same */}
              <TableHead className="bg-emerald-100 dark:bg-emerald-800">
                <TableHeadCell className="p-4 text-left text-sm font-semibold uppercase tracking-wider text-gray-800 dark:text-gray-100">
                  Característica
                </TableHeadCell>
                <TableHeadCell className="p-4 text-center text-sm font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-200">
                  Simple
                </TableHeadCell>
                <TableHeadCell className="p-4 text-center text-sm font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-200">
                  Empresa
                </TableHeadCell>
                <TableHeadCell className="p-4 text-center text-sm font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-200">
                  Premium ⭐
                </TableHeadCell>
              </TableHead>

              {/* TableBody now uses the groupedFeatures calculated from the hook's data */}
              <TableBody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {Object.entries(groupedFeatures).map(([category, categoryFeatures]) => (
                  <React.Fragment key={category}>
                    <TableRow className="bg-emerald-50 dark:bg-emerald-900">
                      <TableCell colSpan={4} className="p-4 text-lg font-semibold text-emerald-800 dark:text-emerald-200">
                        {category}
                      </TableCell>
                    </TableRow>
                    {categoryFeatures.map((feature, index) => (
                      <TableRow
                        key={index}
                        className="bg-white dark:bg-gray-800 hover:bg-emerald-50 dark:hover:bg-gray-700 transition"
                      >
                        <TableCell className="p-4 text-gray-900 dark:text-gray-100">
                          <div className="flex items-center gap-2">
                            <span>{feature.name}</span>
                            {feature.info && (
                              <Tooltip content={feature.info}>
                                <CircleHelp className="h-4 w-4 text-gray-400 cursor-pointer" />
                              </Tooltip>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="p-4 text-center">
                          <FeatureStatus hasFeature={feature.simple} />
                        </TableCell>
                        <TableCell className="p-4 text-center">
                          <FeatureStatus hasFeature={feature.pro} />
                        </TableCell>
                        <TableCell className="p-4 text-center">
                          <FeatureStatus hasFeature={feature.premium} />
                        </TableCell>
                      </TableRow>
                    ))}
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Call to Action remains the same */}
          <div className="mt-12 flex justify-center gap-6">
            <button className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition">
              Empezar ahora
            </button>
            <button className="px-6 py-3 rounded-xl border border-emerald-600 text-emerald-600 dark:text-emerald-400 font-semibold hover:bg-emerald-50 dark:hover:bg-gray-800 transition">
              Contactar ventas
            </button>
          </div>
        </div>
      </section>
    </>
  );
}