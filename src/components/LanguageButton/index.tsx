import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { LANGUAGES } from "../../contexts/TranslateContext";

export const LanguageButton = () => {
  const { asPath, locale } = useRouter()

  const localeTo = locale === LANGUAGES.EN_US ? LANGUAGES.PT_BR : LANGUAGES.EN_US
  const iconPath = locale === LANGUAGES.PT_BR ? "/icons/usa-flag-80.png" : "/icons/brazil-flag-80.png"
  const altText = locale === LANGUAGES.EN_US ? "English" : "Português"

  return (
    <div className="flex items-center opacity-50 hover:opacity-100 transition-all duration-1000">
      <Link href={asPath} locale={localeTo}>
        <a className="flex items-center">
          <Image alt={altText} width={32} height={32} src={iconPath}/>
        </a>
      </Link>
    </div>
  )
}