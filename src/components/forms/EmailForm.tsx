import { IconCheck } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

const EmailForm = () => {
  const { t } = useTranslation();

  return (
    <form action="/joined" className="flex flex-col items-center gap-6">
      <input
        type="text"
        placeholder={`${t("PLACEHOLDER")}`}
        className="w-[312px] sm:w-[627px] px-4 py-2 border-solid border-2 rounded-lg border-[#6E6E6E] text-base sm:text-xl font-medium text-[#AAA]"
        required
      />
      <button
        type="submit"
        className="bg-[#00B265] hover:bg-[#00A85B] flex justify-center items-center gap-2 sm:gap-5 rounded-lg text-white font-medium text-base sm:text-xl pl-8 pr-12 py-2 w-[312px] sm:w-[365px]"
      >
        <IconCheck />
        {t("LABEL")}
      </button>
    </form>
  );
};

export default EmailForm;
