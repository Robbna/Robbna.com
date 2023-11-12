import styles from "./ContactSection.module.css";
import { BaseSection } from "@/app/common/components/base-section/BaseSection";
import { useDataContext } from "@/app/contexts/DataContext";
import { useLocalization } from "@/app/hooks/useLocalization";
import { useRef, useState } from "react";

export const ContactSection: React.FC = () => {
  const { data } = useDataContext();
  const { getLocalization } = useLocalization();

  const formElement = useRef<HTMLFormElement>(null);

  const [showUserError, setShowUserError] = useState(false);
  const [showSubjectError, setShowSubjectError] = useState(false);
  const [showMessageError, setShowMessageError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!formElement.current) return;

    e.preventDefault();

    const form = new FormData(formElement.current);
    const formData = Object.fromEntries(form.entries());

    const name = (formData.name as string).trim();
    setShowUserError(!name);

    const subject = (formData.subject as string).trim();
    setShowSubjectError(!subject);

    const textarea = (formData.textarea as string).trim();
    setShowMessageError(!textarea);

    if (!name || !subject || !textarea) return;

    window.open(
      `mailto:${data?.email}?subject=${encodeURIComponent(`${name}: ${subject}`)}&body=${encodeURIComponent(
        textarea
      )}`
    );

    formElement.current.reset();
  };

  const handleTextareaKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      formElement.current?.requestSubmit();
    }
  };

  return (
    <BaseSection id="contact" hasHeader headerTitle={getLocalization("elements.contact")}>
      <div className={styles.formMainWrapper}>
        <div className={styles.formContainer}>
          <form ref={formElement} className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">{getLocalization("elements.form.name")}</label>
              <input name="name" id="name" type="text" />
              {showUserError && (
                <small className={styles.errorLabel}>{getLocalization("elements.form.requiredLabel")}</small>
              )}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject">{getLocalization("elements.form.subject")}</label>
              <input name="subject" id="subject" type="text" />
              {showSubjectError && (
                <small className={styles.errorLabel}>{getLocalization("elements.form.requiredLabel")}</small>
              )}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="textarea">{getLocalization("elements.form.message")}</label>
              <textarea cols={50} rows={10} id="textarea" name="textarea" onKeyDown={handleTextareaKeyPress} />
              {showMessageError && (
                <small className={styles.errorLabel}>{getLocalization("elements.form.requiredLabel")}</small>
              )}
            </div>
            <div className={styles.buttonWrapper}>
              <button type="submit" className={styles.formSubmitBtn}>
                {getLocalization("elements.form.submit")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </BaseSection>
  );
};
