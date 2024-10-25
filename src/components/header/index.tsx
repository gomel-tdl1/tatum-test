import { TATUM_HOME_LINK } from "@/constants/links";
import { useLocation } from "preact-iso";
import TatumLogo from "@/assets/tatum-logo.svg";
import { headerTabsConfig } from "./config";
import { cn } from "@/lib/utils";

export function Header() {
  const { url } = useLocation();

  return (
    <header className="bg-white flex items-center justify-center drop-shadow-md py-3">
      <div className="lg:max-w-[1280px] max-w-[90%] w-full flex items-center gap-12">
        <a href={TATUM_HOME_LINK} target="_blank" rel="noreferrer">
          <img src={TatumLogo} alt="Tatum logo" className="max-h-6" />
        </a>
        <nav className="flex items-center gap-4">
          {headerTabsConfig.map((c, i) => (
            <a
              key={`${i}-${c.href}`}
              href={c.href}
              className={cn(
                "md:text-[16px] text-[18px] font-[500] text-neutral_1 hover:text-primary_2 transition-all",
                url === c.href && "text-primary_1",
              )}
            >
              {c.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
