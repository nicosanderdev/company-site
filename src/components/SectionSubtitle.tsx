"use client";

import { createTheme } from "flowbite-react/helpers/create-theme";
import { get } from "flowbite-react/helpers/get";
import { resolveProps } from "flowbite-react/helpers/resolve-props";
import { useResolveTheme } from "flowbite-react/helpers/resolve-theme";
import { twMerge } from "flowbite-react/helpers/tailwind-merge";
import { useThemeProvider } from "flowbite-react/theme/provider";
import type { ThemingProps } from "flowbite-react/types";
import { forwardRef, type ComponentProps } from "react";

declare module "flowbite-react/types" {
  interface FlowbiteTheme {
    sectionSubtitle: SectionSubtitleTheme;
  }

  interface FlowbiteProps {
    sectionSubtitle: Partial<WithoutThemingProps<SectionSubtitleProps>>;
  }
}

export interface SectionSubtitleTheme {
  base: string;
}

export const SectionSubtitleTheme = createTheme<SectionSubtitleTheme>({
  base: "max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl text-gray-500 dark:text-gray-300",
});

export interface SectionSubtitleProps extends ComponentProps<"p">, ThemingProps<SectionSubtitleTheme> {}

export const SectionSubtitle = forwardRef<HTMLDivElement, SectionSubtitleProps>((props, ref) => {
  const provider = useThemeProvider();

  const theme = useResolveTheme(
    [SectionSubtitleTheme, provider.theme?.sectionSubtitle, props.theme],
    [get(provider.clearTheme, "sectionSubtitle"), props.clearTheme],
    [get(provider.applyTheme, "sectionSubtitle"), props.applyTheme],
  );

  const { children, className, ...restProps } = resolveProps(props, provider.props?.sectionSubtitle);

  return (
    <div ref={ref} className={twMerge(theme.base, className)} {...restProps}>
      {children}
    </div>
  );
});

SectionSubtitle.displayName = "SectionSubtitle";