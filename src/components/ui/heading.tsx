import { cn } from "@/lib/utils";

interface HeadingProps {
   className?: string;
   text: string;
   as?: "h1" | "h2";
}
export default function Heading({ className, text, as: Tag = "h2" }: HeadingProps) {
   return (
      <Tag
         className={cn(
            "font-brand text-2xl font-semibold tracking-tight md:text-4xl lg:text-6xl",
            className
         )}
      >
         {text}
      </Tag>
   );
}
