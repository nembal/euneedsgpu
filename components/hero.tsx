/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/tWaiOTK8pkM
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import { Button } from "@/components/ui/button";
import SignupForm from "@/components/SingupForm";

export function hero() {
  return (
    <div className="space-y-32">
      <section className="relative flex flex-col items-center justify-center max-h-[66vh] min-h-[66vh] bg-blue-100">
        <div className="text-center animate-fadeIn">
          <p className="text-lg">A STATEMENT</p>
          <h1 className="text-4xl font-bold">
            Europe needs <br /> more GPUs for AI
          </h1>
          <a href="#signup">
            <Button className="mt-4 rounded-full">Get GPUs in Europe</Button>
          </a>
        </div>
        <div className="absolute bottom-0 w-full text-center pb-4">
          <p className="text-sm">
            Brought to you by <a href="https://bearmetal.co" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">BearMetal</a>
          </p>
        </div>
      </section>
      <section className="max-w-2xl mx-auto space-y-4">
        <h2 className="text-xl font-bold">Hardware and Software: The Foundation for AI Leadership in Europe</h2>
        <p>
          As a technology company deeply invested in Europe's future, we firmly believe that robust EU-based compute infrastructure, both hardware and software, is the bedrock upon which European AI innovation must be built. The two are inextricably linked – without significant local computing power, particularly GPU resources, and advanced software, there can be no meaningful AI development in the EU.
        </p>
        <h2 className="text-xl font-bold">The Importance of AI</h2>
        <p>
          The future of AI in Europe hinges on our ability to develop and maintain world-class computing infrastructure within our borders. This is not merely a matter of technological advancement, but a cornerstone of European digital sovereignty and competitiveness. EU-based compute ensures that sensitive European data remains within our jurisdiction, adhering to our stringent privacy standards. It allows us to develop AI models that reflect European values, languages, and cultural nuances. By fostering a robust AI ecosystem built on EU compute resources, we create high-skilled jobs and drive economic growth across the continent.
        </p>
        <p>
          <a href="https://example.com/open-letter" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            Read and Sign the Open Letter on AI Regulation
          </a>
        </p>
        <h2 className="text-xl font-bold">The Importance of Hardware</h2>
        <p>
          Within this broader compute landscape, GPUs play a crucial role. These powerful processors are essential for training large-scale AI models efficiently, offer superior energy efficiency aligning with EU's green initiatives, and support a wide range of scientific and industrial applications beyond AI. By investing in EU-based compute infrastructure, particularly GPU clusters, we lay the groundwork for a thriving AI industry that could potentially contribute billions of euros to the EU economy and position Europe as a global leader in AI innovation.
        </p>
        <p>
          To realize this vision, we need a cohesive EU-wide strategy that recognizes the symbiotic relationship between local compute resources and AI development. This strategy should encourage both private and public investment in EU-based high-performance computing facilities, provide clear and consistent regulations on the deployment and use of large-scale compute resources for AI research and development, and facilitate the sharing of compute resources across EU member states to foster a truly European AI ecosystem.
        </p>
        <p>
          As a company, we are prepared to invest significantly in developing EU-based compute infrastructure. However, this investment must be met with a supportive policy environment that recognizes the foundational role of local compute in driving AI innovation. We urge EU policymakers to act decisively in creating a unified strategy that places EU-based compute at the heart of our AI ambitions. This is not just about keeping pace with global competitors; it's about charting a uniquely European path in AI development – one that reflects our values, protects our data, and drives our economy forward.
        </p>
        <p>
          The future of AI in Europe is intrinsically tied to our compute capabilities. By working together to build this foundation, we can secure Europe's place at the forefront of the AI revolution, ensuring that our continent remains a leader in technological innovation for generations to come.
        </p>
      </section>
      <section className="flex flex-col items-center justify-center max-w-4xl mx-auto md:flex-row md:space-x-8">
        <div className="w-full md:w-1/2">
          <img
            src="/vector_image.jpg"
            alt="AI illustration"
            className="w-full h-auto"
            width="300"
            height="300"
            style={{ aspectRatio: "300/300", objectFit: "cover" }}
          />
        </div>
        <div className="w-full mt-8 space-y-4 md:w-1/2 md:mt-0">
          <p className="text-4xl font-bold">
            Research estimates that Generative AI could increase global GDP by 10% over the coming decade<sup>1</sup>{" "}
            and EU citizens shouldn`t be denied that growth.
          </p>
        </div>
      </section>

      <section className="w-full bg-blue-100 space-y-32 py-32">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-xl font-bold">GPUs for Europe</h2>
          <p>
            we are prepared to invest significantly in developing EU-based compute infrastructure. However, this investment must be met with a supportive policy environment that recognizes the foundational role of local compute in driving AI innovation. We urge EU policymakers to act decisively in creating a unified strategy that places EU-based compute at the heart of our AI ambitions. This is not just about keeping pace with global competitors; it's about charting a uniquely European path in AI development – one that reflects our values, protects our data, and drives our economy forward.
          </p>
        </div>
      </section>
      <section className="max-w-2xl mx-auto space-y-4">
        <p>
        The future of AI in Europe is intrinsically tied to our compute capabilities. By working together to build this foundation, we can secure Europe's place at the forefront of the AI revolution, ensuring that our continent remains a leader in technological innovation for generations to come.
        </p>
        <p className="text-sm text-gray-600 pt-8">
          1. <a href="https://www.jpmorgan.com/insights/global-research/artificial-intelligence/generative-ai" target="_blank" rel="noopener noreferrer">"Is generative AI a game changer?", JP Morgan, February 2024</a>
        </p>
      </section>
      <section className="max-w-2xl mx-auto space-y-4">
        <SignupForm />
      </section>
    </div>
  )
}
