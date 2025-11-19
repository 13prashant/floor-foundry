import { cn } from "@/lib/utils";
import Container from "../ui/container";
import { Boxes } from "./background-boxes";
import { Button } from "../ui/button";

export default function Cta() {
   return (
      <section className="border-t border-gray-300">
         <Container className="relative border-x border-gray-300 p-0 md:p-0">
            <div className="relative flex h-96 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-white">
               <div className="pointer-events-none absolute inset-0 z-20 h-full w-full bg-white mask-[radial-gradient(transparent,white)]" />

               <Boxes />
               <div className="relative z-20 flex flex-col items-center gap-6">
                  <h1 className={cn("text-center text-xl font-bold md:text-4xl")}>
                     Start your next project with the right materials.
                  </h1>
                  <Button className="w-fit" size="lg">
                     Contact us Today
                  </Button>
               </div>
            </div>
         </Container>
      </section>
   );
}
