import { PropsWithChildren } from "react";

interface SectionProps {
  title: string;
}

export const Section = ({
  title,
  children,
}: PropsWithChildren<SectionProps>) => (
  <section>
    <h3>{title}</h3>
    {children}
  </section>
);
