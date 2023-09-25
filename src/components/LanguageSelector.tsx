import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
    const { t ,i18n } = useTranslation();

    const changeLanguage = (language: string) => {
      i18n.changeLanguage(language);
    };
  

  return (
    <div className="language-selector p-4 flex justify-center static sm:absolute sm:right-0">
      <label htmlFor="language-select">{t('TRASLATE')}:</label>
      <select id="language-select" onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
