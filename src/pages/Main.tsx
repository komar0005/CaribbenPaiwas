import Logo from "../assets/logo.svg";
import LanguageSelector from "../components/LanguageSelector";
import { useTranslation } from "react-i18next";
import EmailForm from "../components/forms/EmailForm";
import Tarjet from "../components/img/Tarjet";

const Main = () => {
  const { t } = useTranslation();
  return (
    <>
      <section>
        <div className="content gap-6 md:gap-10">
          <div className="img">
            <LanguageSelector />
            <img src={Logo} alt="logo" width={260} height={88.88} />
          </div>

          <div className="flex flex-col gap-6 w-[312px] lg:w-[1100px] sm:w-[720px]">
            <h3 className="text-xl sm:text-3xl  font-extrabold">
              {t("TITLE")}
            </h3>

            <p className="text-base sm:text-xl font-normal">{t("SUBTITLE")}</p>
          </div>
          <EmailForm />
        </div>
      </section>
      <Tarjet />
    </>
  );
};

export default Main;
