import { useEffect, useState } from "react";

/**
 * Design Philosophy: Minimalismo Contemplativo
 * - Tipografia como protagonista (Playfair Display + Lora)
 * - Abundância de whitespace para respiro visual
 * - Elegância discreta com transições suaves
 * - Fluxo narrativo que guia o leitor através de uma jornada emocional
 */

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(
    new Set()
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleSections((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-index]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const isVisible = (index: number) => visibleSections.has(index);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/manus-storage/logo_be462839.png"
              alt="Logo"
              className="w-10 h-10"
            />
            <h1 className="text-2xl font-semibold text-primary">Sempre Aqui</h1>
          </div>
          <nav className="hidden md:flex gap-8 text-sm text-muted-foreground">
            <a href="#inicio" className="hover:text-foreground transition-colors">
              Início
            </a>
            <a href="#conteudo" className="hover:text-foreground transition-colors">
              Conteúdo
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/manus-storage/hero-background_421e3e68.png')",
            opacity: 0.4,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />

        <div className="relative z-10 container mx-auto px-4 max-w-3xl text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible(0)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            data-index="0"
          >
            <p className="text-lg text-muted-foreground mb-8 tracking-wide">
              Uma declaração de amor e permanência
            </p>
            <h2 className="text-6xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
              Nunca precisei que o mundo inteiro te enxergasse como eu vejo.
            </h2>
            <p className="text-2xl text-primary font-medium mb-12">
              Basta que você saiba:
            </p>
            <p className="text-xl text-foreground font-semibold">
              Eu sempre estive aqui. Sempre estarei.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="conteudo" className="bg-background py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Section 1 */}
          <div
            className={`mb-20 transition-all duration-1000 ${
              isVisible(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            data-index="1"
          >
            <div className="mb-6 h-1 w-12 bg-primary/30" />
            <p className="text-lg leading-relaxed text-foreground mb-6">
              Com amor de verdade, aquele que não vacila nem desiste.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              Independentemente do que venha a acontecer, eu sempre estarei aqui.
              Faça chuva ou faça sol. Na saúde e na doença. Tenha terremoto ou
              furacão; tsunami ou meteoros. Ainda assim, eu estarei aqui.
            </p>
          </div>

          {/* Pull Quote 1 */}
          <div
            className={`my-16 p-8 border-l-4 border-primary bg-secondary/30 transition-all duration-1000 ${
              isVisible(2) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
            data-index="2"
          >
            <p className="text-2xl font-semibold text-primary italic">
              "Mesmo que o mundo desabe, mesmo que tudo fique difícil, mesmo que
              a vida tente pesar sobre nós, eu não vou desistir de você."
            </p>
          </div>

          {/* Section 2 */}
          <div
            className={`mb-20 transition-all duration-1000 ${
              isVisible(3) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            data-index="3"
          >
            <div className="mb-6 h-1 w-12 bg-primary/30" />
            <p className="text-lg leading-relaxed text-foreground mb-6">
              Não existe dificuldade grande o bastante para me fazer ir embora.
              Não existe fase ruim, distância, medo, problema, silêncio ou
              tempestade capaz de apagar o que eu sinto.
            </p>
            <p className="text-lg leading-relaxed text-foreground mb-6">
              Eu não estou aqui só quando é fácil.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              Eu estou aqui quando dói. Quando cansa. Quando aperta. Quando
              ninguém entende. Quando você nem souber explicar o que está
              sentindo.
            </p>
          </div>

          {/* Section 3 */}
          <div
            className={`mb-20 transition-all duration-1000 ${
              isVisible(4) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            data-index="4"
          >
            <div className="mb-6 h-1 w-12 bg-primary/30" />
            <p className="text-lg leading-relaxed text-foreground mb-6 font-semibold">
              Eu sempre, sempre, sempre mesmo estarei aqui.
            </p>
            <p className="text-lg leading-relaxed text-foreground mb-6">
              Para qualquer coisa que você precisar. Para te apoiar, te ouvir,
              te acalmar, te fazer companhia, te proteger, te cuidar, te amar,
              te satisfazer, te levantar quando faltar força e te lembrar do
              quanto você é importante para mim.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              Estarei aqui para te apoiar, te fazer companhia, te fazer feliz,
              te amar, te cuidar, te satisfazer e te lembrar, todos os dias, que
              você nunca estará sozinha.
            </p>
          </div>

          {/* Pull Quote 2 */}
          <div
            className={`my-16 p-8 border-l-4 border-primary bg-secondary/30 transition-all duration-1000 ${
              isVisible(5) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
            data-index="5"
          >
            <p className="text-2xl font-semibold text-primary italic">
              "Se precisar conversar, eu estarei aqui. Se precisar chorar, eu
              estarei aqui. Se precisar de silêncio, eu também estarei."
            </p>
          </div>

          {/* Section 4 */}
          <div
            className={`mb-20 transition-all duration-1000 ${
              isVisible(6) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            data-index="6"
          >
            <div className="mb-6 h-1 w-12 bg-primary/30" />
            <p className="text-lg leading-relaxed text-foreground mb-6">
              Se precisar de colo, de paciência, de carinho, de presença ou
              simplesmente de alguém que não solte sua mão, eu serei esse
              alguém.
            </p>
            <p className="text-lg leading-relaxed text-foreground mb-6">
              E não importa quantas vezes a vida tente te quebrar, eu vou estar
              aqui para te lembrar que você ainda merece amor, cuidado, paz e
              alguém que fique. Não vou te abandonar no meio da confusão. Não
              vou virar as costas quando as coisas ficarem difíceis. Não vou
              sumir quando você mais precisar de presença.
            </p>
            <p className="text-lg leading-relaxed text-foreground font-semibold">
              Eu quero ser aquele lugar seguro para onde seu coração possa voltar
              sem medo.
            </p>
          </div>

          {/* Section 5 - The Definition */}
          <div
            className={`mb-20 transition-all duration-1000 ${
              isVisible(7) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            data-index="7"
          >
            <div className="mb-6 h-1 w-12 bg-primary/30" />
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Porque amar você...
            </h3>
            <p className="text-lg leading-relaxed text-foreground mb-6">
              Não é só dizer "eu te amo". É permanecer. É escolher ficar mesmo
              quando o mundo pesa. É segurar sua mão nos dias bons e,
              principalmente, nos dias difíceis. É ser abrigo quando tudo
              parecer tempestade. É ser calma quando tudo for barulho. É ser
              presença quando o resto for ausência.
            </p>
          </div>

          {/* Pull Quote 3 */}
          <div
            className={`my-16 p-8 border-l-4 border-primary bg-secondary/30 transition-all duration-1000 ${
              isVisible(8) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
            data-index="8"
          >
            <p className="text-2xl font-semibold text-primary italic">
              "Porque o que eu sinto por você não é fraco. Não é passageiro. É
              amor de permanência. É amor que fica. É amor que enfrenta."
            </p>
          </div>

          {/* Section 6 */}
          <div
            className={`mb-20 transition-all duration-1000 ${
              isVisible(9) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            data-index="9"
          >
            <div className="mb-6 h-1 w-12 bg-primary/30" />
            <p className="text-lg leading-relaxed text-foreground mb-6">
              É amor que escolhe você mesmo quando tudo parece tentar me afastar.
            </p>
            <p className="text-lg leading-relaxed text-foreground mb-6">
              Eu quero cuidar do teu sorriso, dos teus medos, dos teus sonhos e
              até dos teus silêncios. Quero estar contigo nas pequenas coisas,
              nos detalhes simples, nos momentos bobos e nos dias que ninguém vê.
            </p>
            <p className="text-lg leading-relaxed text-foreground mb-6">
              Quero estar quando você estiver forte, mas também quando estiver
              cansada. Quando estiver sorrindo, mas também quando estiver sem
              vontade de falar. Quando estiver leve, mas também quando estiver
              carregando pesos que ninguém percebe.
            </p>
            <p className="text-lg leading-relaxed text-foreground font-semibold">
              Eu quero ser presença de verdade, não promessa vazia.
            </p>
          </div>

          {/* Section 7 - Promises */}
          <div
            className={`mb-20 transition-all duration-1000 ${
              isVisible(10) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            data-index="10"
          >
            <div className="mb-6 h-1 w-12 bg-primary/30" />
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Minhas promessas para você
            </h3>
            <div className="space-y-4 text-lg leading-relaxed text-foreground">
              <p>Não prometo que tudo será perfeito.</p>
              <p>Mas prometo verdade.</p>
              <p>Prometo esforço.</p>
              <p>Prometo respeito.</p>
              <p className="font-semibold">
                Prometo amor sem desistência, sem orgulho maior que nós, sem
                distância capaz de apagar o que sinto.
              </p>
            </div>
          </div>

          {/* Section 8 - The Weight */}
          <div
            className={`mb-20 transition-all duration-1000 ${
              isVisible(11) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            data-index="11"
          >
            <div className="mb-6 h-1 w-12 bg-primary/30" />
            <p className="text-lg leading-relaxed text-foreground mb-6">
              Eu não prometo que a vida será leve todos os dias. Mas prometo que
              você nunca vai precisar enfrentar o peso dela sozinha.
            </p>
            <p className="text-lg leading-relaxed text-foreground font-semibold">
              Enquanto eu existir, haverá alguém no mundo torcendo por você,
              cuidando de você, querendo seu bem e disposto a ficar.
            </p>
          </div>

          {/* Pull Quote 4 */}
          <div
            className={`my-16 p-8 border-l-4 border-primary bg-secondary/30 transition-all duration-1000 ${
              isVisible(12) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
            data-index="12"
          >
            <p className="text-2xl font-semibold text-primary italic">
              "E, se algum dia tudo parecer pesado demais, lembra: eu fico."
            </p>
          </div>

          {/* Section 9 - The Refrain */}
          <div
            className={`mb-20 transition-all duration-1000 ${
              isVisible(13) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            data-index="13"
          >
            <div className="mb-6 h-1 w-12 bg-primary/30" />
            <div className="space-y-4 text-lg leading-relaxed text-foreground">
              <p>Se o dia for ruim, eu fico.</p>
              <p>Se a noite for longa, eu fico.</p>
              <p>Se o medo vier, eu fico.</p>
              <p>Se o mundo parecer frio, eu fico.</p>
              <p className="font-semibold">
                Se você achar que está difícil demais de ser amada, eu fico
                mesmo assim.
              </p>
            </div>
          </div>

          {/* Section 10 - Final Affirmation */}
          <div
            className={`mb-20 transition-all duration-1000 ${
              isVisible(14) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            data-index="14"
          >
            <div className="mb-6 h-1 w-12 bg-primary/30" />
            <p className="text-lg leading-relaxed text-foreground mb-6">
              Não há dificuldade que me faça desistir de você. Não há problema
              que me faça esquecer o que sinto. Não há fase ruim que seja maior
              do que a vontade que eu tenho de permanecer.
            </p>
            <p className="text-lg leading-relaxed text-foreground font-semibold">
              Eu estarei aqui para qualquer coisa que você precisar. Sempre.
              Sempre. Sempre mesmo.
            </p>
          </div>

          {/* Final Section */}
          <div
            className={`mb-20 transition-all duration-1000 ${
              isVisible(15) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            data-index="15"
          >
            <div className="mb-6 h-1 w-12 bg-primary/30" />
            <h3 className="text-3xl font-bold text-foreground mb-8">
              E, se um dia você duvidar...
            </h3>
            <p className="text-lg leading-relaxed text-foreground mb-6">
              Lembra disso: eu nunca precisei que o mundo inteiro entendesse.
              Basta que você saiba.
            </p>
            <p className="text-lg leading-relaxed text-foreground mb-6">
              Eu não estou aqui por acaso. Eu estou aqui porque escolhi você. E
              eu escolheria de novo. Quantas vezes fossem necessárias.
            </p>
            <p className="text-2xl font-bold text-primary mt-12">
              Eu sempre estive aqui.
            </p>
            <p className="text-2xl font-bold text-primary">Sempre estarei.</p>
            <p className="text-2xl font-bold text-primary">
              Sem vacilar. Sem desistir. Sem deixar de te amar.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border py-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="mb-4">
            Uma declaração de amor, permanência e compromisso.
          </p>
          <p className="text-sm">
            © 2026 Sempre Aqui. Criado com amor e dedicação.
          </p>
        </div>
      </footer>
    </div>
  );
}
