import styles from "./HeroSection.module.css";
import { useLocalization } from "@/app/hooks/useLocalization";
import { useDataContext } from "@/app/contexts/DataContext";
import { BaseSection } from "@/app/common/components/base-section/BaseSection";
import { useRef } from "react";

export const HeroSection: React.FC = () => {
  const { data } = useDataContext();
  const { getLocalization } = useLocalization();
  const bannerElement = useRef<HTMLImageElement>(null);

  return (
    data && (
      <BaseSection id="home" hasSeparator={false}>
        <div className={styles.heroWrapper}>
          <div className={styles.infoWrapper}>
            <div>
              <h1 className={styles.name}>{data?.name}</h1>
              <p className={styles.description}> {getLocalization(data?.description)}</p>
            </div>
            <div className={styles.socialsWrapper}>
              {data?.socials.map((social) => {
                return (
                  <a key={social.name} href={social.url} target="_blank" rel="noreferrer" className={styles.socialLink}>
                    <i className={`${styles.socialIcon} ${social.icon}`} />
                  </a>
                );
              })}
            </div>
          </div>
          <img ref={bannerElement} src={data.bannerUrl} alt="hero" className={styles.image} />
          <img src={data.pictureUrl} alt="hero" className={styles.picture} />
        </div>
      </BaseSection>
    )
  );
};
