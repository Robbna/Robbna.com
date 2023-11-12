import styles from "./BaseSection.module.css";
import { ReactNode } from "react";
import { BaseSeparator } from "@/app/common/components/base-separator/BaseSeparator";

interface IPropsSection {
  id: string;
  children: ReactNode;
  hasHeader?: boolean;
  headerTitle?: string;
  hasSeparator?: boolean;
}

export const BaseSection: React.FC<IPropsSection> = ({ id, hasSeparator = true, children, hasHeader, headerTitle }) => {
  return (
    <section id={id}>
      {hasHeader && <h1 className={styles.header}>{headerTitle}</h1>}
      {hasSeparator && <BaseSeparator />}
      {children}
    </section>
  );
};
