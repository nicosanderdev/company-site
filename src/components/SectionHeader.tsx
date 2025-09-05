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
    sectionHeader: SectionHeaderTheme;
  }

  interface FlowbiteProps {
    sectionHeader: Partial<WithoutThemingProps<SectionHeaderProps>>;
  }
}

export interface SectionHeaderTheme {
  base: string;
}

export const sectionHeaderTheme = createTheme<SectionHeaderTheme>({
  base: "mx-auto max-w-2xl mb-8 text-4xl font-semibold tracking-tight leading-none text-center md:text-5xl xl:text-6xl text-gray-900 dark:text-white",
});

export interface SectionHeaderProps extends ComponentProps<"h2">, ThemingProps<SectionHeaderTheme> {}

export const SectionHeader = forwardRef<HTMLHeadingElement, SectionHeaderProps>((props, ref) => {
  const provider = useThemeProvider();

  const theme = useResolveTheme(
    [sectionHeaderTheme, provider.theme?.sectionHeader, props.theme],
    [get(provider.clearTheme, "sectionHeader"), props.clearTheme],
    [get(provider.applyTheme, "sectionHeader"), props.applyTheme],
  );

  const { children, className, ...restProps } = resolveProps(props, provider.props?.sectionHeader);

  return (
    <h2 ref={ref} className={twMerge(theme.base, className)} {...restProps}>
      {children}
    </h2>
  );
});

SectionHeader.displayName = "SectionHeader";