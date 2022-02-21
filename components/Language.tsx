import { i18n, useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { ChangeEventHandler } from "react";

interface LanguageProps {}

export const Language: React.FC<LanguageProps> = ({}) => {
  const router = useRouter();
  const { t } = useTranslation();
  const languages = ["de", "en"];
  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    router.push(router.pathname, router.asPath, { locale: e.target.value });
  };
  return (
    <div className="w-full border rounded-lg p-4 mb-4">
      <h2 className="text-lg">{t("language")} </h2>
      <select onChange={handleChange}>
        {languages.map((language, i) => (
          <option key={i} value={language} defaultValue="en">
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};
