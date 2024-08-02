import { TechSection } from "@/components/TechSection";
import { ComponentsSection } from "@/components/ComponentsSection";

function App() {
  console.log("You should remove this!");

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center">
      <TechSection />
      <ComponentsSection />
    </main>
  );
}

export default App;