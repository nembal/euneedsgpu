import { hero } from "@/components/hero";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      {hero()}
    </div>
  );
}
