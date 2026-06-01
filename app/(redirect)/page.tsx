import { permanentRedirect } from "next/navigation";
import { defaultLocale } from "@/infrastructure/translations/dictionaries";

const RootPage = () => {
  permanentRedirect(`/${defaultLocale}`);
};

export default RootPage;
