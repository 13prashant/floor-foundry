import { cn } from "@/lib/utils";

interface TilesProps {
   className?: string;
}
export default function Tiles({ className }: TilesProps) {
   return (
      <div className={cn("grid grid-cols-3", className)}>
         <span className="bg-brand block h-1 w-1 md:h-2 md:w-2" />
         <span className="block h-1 w-1 bg-transparent md:h-2 md:w-2" />
         <span className="bg-brand block h-1 w-1 md:h-2 md:w-2" />
         <span className="block h-1 w-1 bg-transparent md:h-2 md:w-2" />
         <span className="bg-brand block h-1 w-1 md:h-2 md:w-2" />
         <span className="block h-1 w-1 bg-transparent md:h-2 md:w-2" />
         <span className="bg-brand block h-1 w-1 md:h-2 md:w-2" />
      </div>
   );
}
