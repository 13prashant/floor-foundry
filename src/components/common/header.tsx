import Container from "../ui/container";

export default function Header() {
   return (
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/70 backdrop-blur-xs">
         <Container className="py-4 md:py-6">Elite Flooring Source</Container>
      </header>
   );
}
