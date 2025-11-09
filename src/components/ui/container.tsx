import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
   className?: string;
   children: React.ReactNode;
   as?: React.ElementType;
}

export default function Container({
   className,
   children,
   as: Tag = "div",
   ...props
}: ContainerProps) {
   return (
      <Tag
         className={cn("mx-auto w-[90%] max-w-[90%] px-4 py-20 md:max-w-7xl md:py-32", className)}
         {...props}
      >
         {children}
      </Tag>
   );
}
