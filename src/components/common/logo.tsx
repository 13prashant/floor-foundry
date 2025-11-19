import { cn } from "@/lib/utils";
import Link from "next/link";

interface LogoProps {
   className?: string;
}
export default function Logo({ className }: LogoProps) {
   return (
      <Link className={cn("flex w-fit flex-col", className)} href="/">
         <h4 className="text-brand w-fit text-4xl leading-none font-extrabold">Elite</h4>
         <h6 className="w-fit text-lg leading-none font-bold tracking-tighter">Flooring Source</h6>
      </Link>
   );
}
