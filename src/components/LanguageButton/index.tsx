import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export const LanguageButton = () => {
  const { asPath, locale } = useRouter()

  const localeTo = locale === "en-US" ? "pt-BR" : "en-US"
  const iconPath = locale === "en-US" ? "/icons/usa-flag-80.png" : "/icons/brazil-flag-80.png"
  const altText = locale === "en-US" ? "English" : "Português"

  return (
    <div className="flex items-center">
      <p className="mr-3">Language:</p>
      <Link href={asPath} locale={localeTo}>
        <a className="flex items-center">
          <Image alt={altText} width={32} height={32} src={iconPath}/>
        </a>
      </Link>
    </div>
  )
}