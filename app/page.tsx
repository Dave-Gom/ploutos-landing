import { redirect } from "next/navigation";
import { defaultLocale } from "@/infrastructure/translations/dictionaries";

const RootPage = () => {
  redirect(`/${defaultLocale}`);
};

export default RootPage;
