import AuravantLogo from "@/assets/avt-logo.svg";
import ReactLogo from "@/assets/react.svg";
import TypeScriptLogo from "@/assets/typescript.svg";
import TailwindLogo from "@/assets/tailwind.svg";

const logoStyle = "size-10 hover:scale-110 transition-all cursor-pointer";

export const TechSection = () => {
  return (
    <div className="flex w-full items-center justify-center gap-4">
      <img className="size-80" src={AuravantLogo} alt="Auravant Logo" />

      <img className={logoStyle} src={ReactLogo} alt="React Logo" />
      <img className={logoStyle} src={TypeScriptLogo} alt="TypeScript Logo" />
      <img className={logoStyle} src={TailwindLogo} alt="Tailwind Logo" />
    </div>
  );
};
