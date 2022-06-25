import Link from "next/link";
import { useRouter } from "next/router";

export const LanguageButton = () => {
  const { asPath, locale } = useRouter()

  const localeTo = locale === "en-US" ? "pt-BR" : "en-US"

  return <Link href={asPath} locale={localeTo}><a>Language</a></Link>
}