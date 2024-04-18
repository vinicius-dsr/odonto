import { ChevronDown } from "lucide-react";
import Header from "./components/Header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import "./global.css";

function App() {
  return (
    <>
      <main className="container min-h-dvh mx-auto max-w-screen-4xl scroll-smooth">
        <Header />
        <h1 className="font-bold text-2xl md:text-3xl md:text-center text-center lg:text-left text-[#F3788E]">
          Autoexame
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-10">
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-2">
              <img src="/1.png" alt="" className="w-16" />
              <span className="font-bold text-3xl text-[#F3788E]">1</span>
              <p className="font-bold text-[#0079ff]">Examine os lábios</p>
            </div>
            <div>
              <Accordion type="single" collapsible className="w-full mt-3">
                <AccordionItem value="item 1">
                  <AccordionTrigger className="text-sm">
                    O que observar?
                  </AccordionTrigger>
                  <AccordionContent>
                    Observe se há mudanças de cor e apalpe com os dedos para
                    procurar áreas mais endurecidas. Vire os lábios, e examine a
                    parte interna.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-2">
              <img src="/2.png" alt="" className="w-16" />
              <span className="font-bold text-3xl text-[#F3788E]">2</span>
              <p className="font-bold text-[#0079ff]">Examine a bochecha</p>
            </div>
            <div>
              <Accordion type="single" collapsible className="w-full mt-3">
                <AccordionItem value="item 2">
                  <AccordionTrigger className="text-sm">
                    O que observar?
                  </AccordionTrigger>
                  <AccordionContent>
                    Verifique em ambos os lados se há alguma ferida ou saliência
                    diferente na parte interna das bochechas.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-2">
              <img src="/3.png" alt="" className="w-16" />
              <span className="font-bold text-3xl text-[#F3788E]">3</span>
              <p className="font-bold text-[#0079ff]">Apalpe a língua</p>
            </div>
            <div>
              <Accordion type="single" collapsible className="w-full mt-3">
                <AccordionItem value="item 3">
                  <AccordionTrigger className="text-sm">
                    O que observar?
                  </AccordionTrigger>
                  <AccordionContent>
                    Apalpe a superfície, procurando alterações, Lembre-se de que
                    uma camada branca pode se acumular sobre a língua se esta
                    não for higienizada.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-2">
              <img src="/4.png" alt="" className="w-16" />
              <span className="font-bold text-3xl text-[#F3788E]">4</span>
              <p className="font-bold text-[#0079ff]">Língua para um lado</p>
            </div>
            <div>
              <Accordion type="single" collapsible className="w-full mt-3">
                <AccordionItem value="item 4">
                  <AccordionTrigger className="text-sm">
                    O que observar?
                  </AccordionTrigger>
                  <AccordionContent>
                    Coloque a língua para fora e vire para um lado e depois para
                    o outro. Observe bem e passe o dedo.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-2">
              <img src="5.png" alt="" className="w-16" />
              <span className="font-bold text-3xl text-[#F3788E]">5</span>
              <p className="font-bold text-[#0079ff]">Embaixo da língua</p>
            </div>
            <div>
              <Accordion type="single" collapsible className="w-full mt-3">
                <AccordionItem value="item 5">
                  <AccordionTrigger className="text-sm">
                    O que observar?
                  </AccordionTrigger>
                  <AccordionContent>
                    Incline a cabeça para a frente e observe embaixo da língua.
                    Não se esqueça de passar o dedo para sentir se há caroços
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-2">
              <img src="/6.png" alt="" className="w-16" />
              <span className="font-bold text-3xl text-[#F3788E]">6</span>
              <p className="font-bold text-[#0079ff]">Observe o céu da boca</p>
            </div>
            <div>
              <Accordion type="single" collapsible className="w-full mt-3">
                <AccordionItem value="item 6">
                  <AccordionTrigger className="text-sm">
                    O que observar?
                  </AccordionTrigger>
                  <AccordionContent>
                    Incline a cabeça para trás e olhe. Um pequeno espelho pode
                    ajudar.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-2">
              <img src="/7.png" alt="" className="w-16" />
              <span className="font-bold text-3xl text-[#F3788E]">7</span>
              <p className="font-bold text-[#0079ff]">Agora a garganta</p>
            </div>
            <div>
              <Accordion type="single" collapsible className="w-full mt-3">
                <AccordionItem value="item 7">
                  <AccordionTrigger className="text-sm">
                    O que observar?
                  </AccordionTrigger>
                  <AccordionContent>
                    Examine bem sua garganta enquanto diga "AAA" em frente ao
                    espelho.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-2">
              <img src="/8.png" alt="" className="w-16" />
              <span className="font-bold text-3xl text-[#F3788E]">8</span>
              <p className="font-bold text-[#0079ff]">Examine o pescoço</p>
            </div>
            <div>
              <Accordion type="single" collapsible className="w-full mt-3">
                <AccordionItem value="item 8">
                  <AccordionTrigger className="text-sm">
                    O que observar?
                  </AccordionTrigger>
                  <AccordionContent>
                    Apalpe-o embaixo da mandíbula verifique se há presença de
                    caroços.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <div className="flex flex-col items-center text-center mt-10 md:mt-20">
          <span className="text-[#F3788E] font-bold text-xl md:text-2xl mb-5">
            Assista à um vídeo demonstração
          </span>
          <a href="#video">
            <ChevronDown
              size={40}
              className="hidden md:inline-flex text-muted-foreground animate-bounce py-1"
            />
          </a>
        </div>
        <section
          id="video"
          className="md:max-w-[75rem] flex items-center mx-auto mt-5 mb-10 md:p-10 md:mt-10 border space- bg-zinc-300/5 p-2 ring-1 ring-inset ring-gray-300/10"
        >
          <video controls poster="/thumb.png" width="100%">
            <source src="/video-teste.mp4" />
          </video>
        </section>
      </main>
      <footer className="flex flex-col items-center text-center py-4">
        <a
          href="https://www.instagram.com/vinicius_dev/"
          target="_blank"
          className="text-muted-foreground font-medium md:text-[13px] text-[10px] hover:text-zinc-900 transition-colors"
        >
          Desenvolvido com ❤️ por Vinícius Reis
        </a>
      </footer>
    </>
  );
}

export default App;
