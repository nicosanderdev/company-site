import { Button } from "flowbite-react";

type PricingCardProps = {
  title: string;
  description: string;
  price?: number | undefined;
  priceSuffix?: string | undefined;
  backendFeatures: string[];
  frontendFeatures: string[];
  buttonText: string;
  className?: string
};

const CheckIcon = () => (
  <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
  </svg>
);

const FeatureItem = ({ feature }: { feature: string }) => (
  <li className="flex items-center space-x-3">
    <CheckIcon />
    <span>{feature}</span>
  </li>
);

const FeatureSection = ({ title, features }: { title: string; features: string[] }) => {
  const MAX_FEATURES_TO_SHOW = 4;
  const featuresToShow = features.slice(0, MAX_FEATURES_TO_SHOW);
  const hasMoreFeatures = features.length > MAX_FEATURES_TO_SHOW;

  return (
    <div>
      <p><span className="text-sm font-bold text-black dark:text-white pb-2">{title}:</span></p>
      <ul role="list" className="mb-8 space-y-4 text-left">
        {featuresToShow.map((feature) => (
          <FeatureItem key={feature} feature={feature} />
        ))}
        {hasMoreFeatures && (
          <li className="flex items-center"><span className="ml-8 text-gray-500 dark:text-gray-400">...</span></li>
        )}
      </ul>
    </div>
  );
};

export const PricingCard = ({
  title,
  description,
  price,
  priceSuffix,
  backendFeatures,
  frontendFeatures,
  buttonText,
  className = 'bg-white dark:bg-gray-800',
}: PricingCardProps) => {
  return (
    <div className={`flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:text-white ${className}`}>
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">{description}</p>
      <div className="flex justify-center items-baseline my-8">
        {price && <span className="mr-2 text-5xl font-extrabold">${price}</span>}
        {priceSuffix && <span className="text-gray-500 dark:text-gray-400">{priceSuffix}</span>}
      </div>
      <div className="flex-grow">
        <FeatureSection title="Backend" features={backendFeatures} />
        <FeatureSection title="Frontend" features={frontendFeatures} />
      </div>
      <Button href="/#contact">{buttonText}</Button>
    </div>
  );
};