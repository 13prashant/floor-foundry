import { Button } from "../ui/button";
import Container from "../ui/container";
import { products } from "./helpers";
import Logo from "./logo";

export default function Footer() {
   return (
      <footer className="border-t border-gray-200 bg-white/70">
         <Container className="">
            <div className="flex flex-col gap-10 md:flex-row md:gap-24">
               <div>
                  <Logo className="mb-6" />
                  <Button className="w-fit" size="lg">
                     Contact us Today
                  </Button>
               </div>
               <div>
                  <h3 className="mb-2 font-semibold text-gray-600">Products</h3>
                  <ul className="flex flex-col gap-1">
                     {products.map((product) => (
                        <li key={product.id}>{product.name}</li>
                     ))}
                  </ul>
               </div>
            </div>
         </Container>
      </footer>
   );
}
