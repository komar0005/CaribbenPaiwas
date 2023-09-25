import Logo from "../assets/logo.svg";
import LanguageSelector from "../components/LanguageSelector";
import { useTranslation } from "react-i18next";
import Tarjet from "../components/img/Tarjet";
 


const Joined = () => {
    const { t } = useTranslation();
  return (
    <>
      <section >
        <div className="content gap-10 -top-16">
          <div className="img">
            <LanguageSelector />
            <img src={Logo} alt="logo" width={260} height={88.88} />
          </div>

          <div className="flex flex-col gap-6 w-[312px] lg:w-[1100px] sm:w-[720px]">
            <h3 className="text-xl sm:text-3xl  font-extrabold">
              {t("TITELE2")}
            </h3>

            <p className="text-base sm:text-xl font-normal">{t("SUBTITLE2")}</p>
          </div>
        </div>
      </section>

     <Tarjet />
    </>
  )
}

export default Joined