
import React, { useState, useEffect } from 'react';
import { StatBlock } from './components/StatBlock';
import { ImageGallery } from './components/ImageGallery';
import { StoryModal } from './components/StoryModal';
import { FableModal } from './components/FableModal';
import { EldricGuideModal } from './components/EldricGuideModal';
import { PianaModal } from './components/PianaModal';
import { BestiaSporaleModal } from './components/BestiaSporaleModal';
import { TesoriPianaModal } from './components/TesoriPianaModal';
import { MedaglioneModal } from './components/MedaglioneModal';
import { ScritteRaduraModal } from './components/ScritteRaduraModal';
import { EldricGuideS2Modal } from './components/EldricGuideS2Modal';
import { TempioModal } from './components/TempioModal';
import { SpiritiCorrottiModal } from './components/SpiritiCorrottiModal';
import { GuardianoRadiciModal } from './components/GuardianoRadiciModal';
import { TesoriS2Modal } from './components/TesoriS2Modal';
import { DiarioMorghulModal } from './components/DiarioMorghulModal';
import { MonsterStats } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('intro');
  const [isStoryModalOpen, setIsStoryModalOpen] = useState<boolean>(false);
  const [isFableModalOpen, setIsFableModalOpen] = useState<boolean>(false);
  const [isEldricGuideModalOpen, setIsEldricGuideModalOpen] = useState<boolean>(false);
  const [isPianaModalOpen, setIsPianaModalOpen] = useState<boolean>(false);
  const [isBestiaSporaleModalOpen, setIsBestiaSporaleModalOpen] = useState<boolean>(false);
  const [isTesoriPianaModalOpen, setIsTesoriPianaModalOpen] = useState<boolean>(false);
  const [isMedaglioneModalOpen, setIsMedaglioneModalOpen] = useState<boolean>(false);
  const [isScritteRaduraModalOpen, setIsScritteRaduraModalOpen] = useState<boolean>(false);
  const [isEldricGuideS2ModalOpen, setIsEldricGuideS2ModalOpen] = useState<boolean>(false);
  const [isTempioModalOpen, setIsTempioModalOpen] = useState<boolean>(false);
  const [isSpiritiCorrottiModalOpen, setIsSpiritiCorrottiModalOpen] = useState<boolean>(false);
  const [isGuardianoRadiciModalOpen, setIsGuardianoRadiciModalOpen] = useState<boolean>(false);
  const [isTesoriS2ModalOpen, setIsTesoriS2ModalOpen] = useState<boolean>(false);
  const [isDiarioMorghulModalOpen, setIsDiarioMorghulModalOpen] = useState<boolean>(false);

  const bossStats: MonsterStats = {
    name: "Bestia Sporale Minore",
    tagline: "Boss Sessione 1",
    size: "Media",
    type: "Bestia corrotta",
    alignment: "Neutrale",
    ac: "12 (pelle fungina)",
    hp: "38 (5d8 + 15)",
    speed: "9 m",
    abilities: {
      str: { label: "FOR", value: 14, mod: "+2" },
      dex: { label: "DES", value: 12, mod: "+1" },
      con: { label: "COS", value: 16, mod: "+3" },
      int: { label: "INT", value: 2, mod: "-4" },
      wis: { label: "SAG", value: 10, mod: "+0" },
      cha: { label: "CAR", value: 5, mod: "-3" },
    },
    savingThrows: "Costituzione +5",
    resistances: ["Danni da veleno"],
    specialAbilities: [
        { name: "Nube Sporale (Ricarica 5-6)", description: "La bestia rilascia spore in un raggio di 3 m. TS Costituzione CD 12. Fallimento: 1d6 danni da veleno e velocità dimezzata per 1 turno. Successo: metà danni, nessun effetto secondario." }
    ],
    actions: [
      { 
        name: "Morso Fungino", 
        description: "Attacco con arma da mischia: +4 a colpire, portata 1,5 m, un bersaglio. Danni: 1d8 + 2 perforanti + 1d4 veleno. Il bersaglio deve superare un TS Costituzione CD 12 o essere Avvelenato fino alla fine del suo prossimo turno." 
      },
      { 
        name: "🐾 Graffio Fungino (attacco debole)", 
        description: "DESCRIZIONE NARRATIVA: La bestia si avvicina strisciando. Le zampe anteriori sono coperte da escrescenze dure, come artigli di legno marcio. Non è un colpo potente, ma taglia la pelle lasciando residui violacei. ⸻ STATISTICHE: Attacco con arma da mischia: +4 a colpire, portata 1,5 m, un bersaglio. Danni: 1d4 + 1 danno da veleno (fisso). Effetto secondario (facoltativo, per colore): Il bersaglio sente bruciore e prurito, ma nessun TS richiesto. 👉 Usalo come attacco base quando: la creatura vuole \"tenere a distanza\", non vuoi rischiare di buttare giù un PG." 
      },
      { 
        name: "🌫️ Soffio Putrescente (attacco ad area debole)", 
        description: "Questo è molto tematico, poco letale, ma fastidioso. DESCRIZIONE NARRATIVA: La bestia si ferma. Il torace si gonfia in modo innaturale. Dalla bocca e dalle fessure del corpo esce un fiato caldo e umido, carico di spore. L'aria diventa irrespirabile per un istante. ⸻ STATISTICHE: Azione — Ricarica 4–6. Cono di 4,5 m. Tutte le creature nell'area devono superare un TS Costituzione CD 11. Fallimento: svantaggio al prossimo tiro per colpire prima della fine del turno successivo. Successo: Nessun danno, nessun effetto secondario." 
      }
    ]
  };

  const sections = [
    { id: 'intro', title: 'Benvenuti a Selvarotta', emoji: '🌲' },
    { id: 'eldric', title: 'Eldric Muschiosecco', emoji: '🧙‍♂️' },
    { id: 'lore', title: 'Il Cuore di Spora', emoji: '🍄' },
    { id: 'error', title: 'L\'Errore di Morghul', emoji: '🌑' },
    { id: 'session1', title: 'S1: Piana del Respiro Marcio', emoji: '🌫️' },
    { id: 'session2', title: 'S2: Santuario delle Radici', emoji: '🏯' },
    { id: 'session3', title: 'S3: Il Boss Finale', emoji: '⚔️' },
    { id: 'epilogue', title: 'Epilogo', emoji: '🌅' }
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
        const scrollPosition = window.scrollY + 200;
        for (const section of sections) {
            const el = document.getElementById(section.id);
            if (el && el.offsetTop <= scrollPosition && el.offsetTop + el.offsetHeight > scrollPosition) {
                setActiveSection(section.id);
                break;
            }
        }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex bg-rot-gradient selection:bg-purple-500/30">
      {/* Sidebar Navigation */}
      <aside className="hidden lg:flex w-72 flex-col fixed inset-y-0 border-r border-slate-800 bg-slate-900/50 backdrop-blur-xl p-6 overflow-y-auto z-40">
        <div className="mb-8 flex items-center space-x-2">
            <span className="text-3xl">🍄</span>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-emerald-400 uppercase tracking-tighter">Selvarotta</h1>
        </div>
        <nav className="space-y-1">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center space-x-3 ${
                activeSection === s.id 
                ? 'bg-purple-600/20 text-purple-400 border-l-4 border-purple-500 font-semibold shadow-lg shadow-purple-900/20' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <span className="text-lg">{s.emoji}</span>
              <span className="truncate">{s.title}</span>
            </button>
          ))}
        </nav>
        <div className="mt-auto pt-8">
            <div className="p-4 rounded-xl bg-purple-900/20 border border-purple-500/20">
                <p className="text-xs font-semibold text-purple-400 uppercase mb-1">Status Campagna</p>
                <p className="text-sm text-slate-300 italic">"La foresta sta ricordando..."</p>
            </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-72 p-4 md:p-12 max-w-5xl mx-auto">
        
        {/* Header Section */}
        <section id="intro" className="mb-24 pt-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-6">
            <span className="mr-2">🌲</span> CAMPAGNA D&D 5E
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tight">
            La Putrefazione <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-purple-400 to-emerald-500">di Selvarotta</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose-rot text-xl">
              <p className="mb-6 font-serif italic text-2xl text-slate-300 border-l-4 border-purple-500 pl-6 py-2">
                "La Selvarotta non sta semplicemente marcendo: una antica fonte di vita druidica, chiamata <strong>Il Cuore di Spora</strong>, è stata corrotta."
              </p>
              <p>
                Questa entità, un tempo usata per rigenerare la foresta, ora trasforma la vita in <strong>decomposizione senziente</strong>.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 shadow-2xl">
              <h3 className="text-emerald-400 font-bold mb-4 uppercase text-sm tracking-widest">Origini della Corruzione</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-3 mt-1">✦</span>
                  <span>Un rituale interrotto secoli fa.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-3 mt-1">✦</span>
                  <span>Un vincolo spezzato tra la foresta e i suoi custodi.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-3 mt-1">✦</span>
                  <span>Una creatura che ha tentato di dominare la forza del Cuore per proteggere le rotte commerciali.</span>
                </li>
              </ul>
            </div>
          </div>

          <ImageGallery />
        </section>

        {/* NPC SECTION */}
        <section id="eldric" className="mb-24 scroll-mt-24">
          <div className="flex items-center space-x-4 mb-8">
            <span className="text-4xl">🧙‍♂️</span>
            <h2 className="text-4xl font-bold uppercase tracking-tighter">PNG Guida: Eldric Muschiosecco</h2>
          </div>
          <div className="bg-slate-900/80 rounded-3xl p-8 border border-slate-700 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4 col-span-2">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-slate-800/50 p-4 rounded-xl">
                    <p className="text-slate-500 uppercase font-bold text-xs">Razza</p>
                    <p className="font-semibold text-slate-200">Umano anziano</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-xl">
                    <p className="text-slate-500 uppercase font-bold text-xs">Classe</p>
                    <p className="font-semibold text-slate-200">Druido (Circolo delle Spore, "pentito")</p>
                  </div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl">
                   <p className="text-slate-500 uppercase font-bold text-xs mb-1">Aspetto</p>
                   <p className="text-slate-300">Barba intrecciata di licheni, mantello verde marcio, bastone nodoso con funghi secchi.</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl border-l-4 border-amber-600">
                   <p className="text-amber-500 uppercase font-bold text-xs mb-1">Il Grande Segreto</p>
                   <p className="text-slate-300 italic">"È stato uno dei druidi che sigillò il Cuore di Spora, ma il sigillo sta cedendo."</p>
                </div>
              </div>
              <div className="bg-emerald-950/20 p-6 rounded-2xl border border-emerald-500/10 h-full">
                <h4 className="text-emerald-400 font-bold mb-3 uppercase text-xs">Ruolo Narrativo</h4>
                <ul className="text-sm space-y-3 text-emerald-200/80">
                  <li>• Spiega la putrescenza</li>
                  <li>• Indica i luoghi chiave</li>
                  <li>• Fornisce rituali e mappe</li>
                  <li className="text-red-400/80">• Non combatte direttamente</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* LORE SECTION */}
        <section id="lore" className="mb-24 scroll-mt-24">
           <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <span className="text-4xl">🍄</span>
              <h2 className="text-4xl font-bold uppercase tracking-tighter">Cos'era il Cuore di Spora</h2>
            </div>
            <button
              onClick={() => setIsStoryModalOpen(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/40 hover:border-purple-500/60 text-purple-400 rounded-lg transition-all text-sm font-semibold"
            >
              <span>📖</span>
              <span>Storia Completa</span>
            </button>
          </div>
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsFableModalOpen(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-amber-600/20 hover:bg-amber-600/30 border border-amber-500/40 hover:border-amber-500/60 text-amber-400 rounded-lg transition-all text-sm font-semibold"
            >
              <span>📜</span>
              <span>La Favola</span>
            </button>
          </div>
          <div className="prose-rot text-xl space-y-8">
            <p className="bg-slate-800/30 p-8 rounded-3xl border border-slate-700 italic font-serif">
                "Immagina la foresta come un grande giardino. Quando qualcosa muore, cade a terra, marcisce e diventa terra buona per nuove piante. Il Cuore di Spora era il cuore di questo giardino."
            </p>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                    <h4 className="text-purple-400 font-bold mb-4">Cosa faceva in pratica?</h4>
                    <ul className="space-y-3 text-lg">
                        <li className="flex items-center"><span className="text-purple-500 mr-2">✔️</span> Un animale morto spariva in pochi giorni</li>
                        <li className="flex items-center"><span className="text-purple-500 mr-2">✔️</span> Le piante crescevano più forti</li>
                        <li className="flex items-center"><span className="text-purple-500 mr-2">✔️</span> Il terreno era sempre ricco e vivo</li>
                    </ul>
                </div>
                <div className="p-6 rounded-2xl bg-emerald-900/10 border border-emerald-900/20">
                    <h4 className="text-emerald-400 font-bold mb-4">Perché i Druidi lo usarono?</h4>
                    <p className="text-lg">Quando arrivarono le carovane, gli uomini tagliavano alberi e rompevano il terreno. La foresta si arrabbiava. I druidi vollero usare il Cuore per "tenere calmi i sentieri" e proteggere le persone.</p>
                </div>
            </div>
          </div>
        </section>

        {/* ERROR SECTION */}
        <section id="error" className="mb-24 scroll-mt-24">
           <div className="flex items-center space-x-4 mb-8">
            <span className="text-4xl">🌑</span>
            <h2 className="text-4xl font-bold uppercase tracking-tighter">L'Errore di Morghul</h2>
          </div>
          <div className="bg-red-950/10 p-12 rounded-[3rem] border border-red-900/20 relative overflow-hidden">
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -ml-20 -mb-20"></div>
             <div className="max-w-2xl mx-auto text-center space-y-6">
                <h3 className="text-3xl font-serif italic text-slate-200">"Se il Cuore smette di funzionare, la foresta morirà."</h3>
                <p className="text-lg text-slate-400">Morghul era un druido elfico buono. Amava la foresta. Ha visto il Cuore faticare e ha avuto paura. Ha cercato di entrare nel Cuore per aiutarlo... ma il Cuore non è una persona.</p>
                <div className="flex justify-center space-x-4 py-8">
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-red-900/20 border border-red-500/40 flex items-center justify-center text-2xl mb-2">☠️</div>
                        <span className="text-xs uppercase font-bold text-slate-500">Morghul è morto</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-purple-900/20 border border-purple-500/40 flex items-center justify-center text-2xl mb-2">👻</div>
                        <span className="text-xs uppercase font-bold text-slate-500">È rimasto come ombra</span>
                    </div>
                </div>
                <p className="text-xl font-bold text-purple-400">I Druidi chiusero tutto sotto terra. Come mettere un coperchio sopra qualcosa che respira.</p>
             </div>
          </div>
        </section>

        {/* SESSION 1 */}
        <section id="session1" className="mb-24 scroll-mt-24">
          <div className="flex items-center justify-between mb-4">
             <div className="flex items-center space-x-4">
                <span className="text-4xl">🌫️</span>
                <h2 className="text-4xl font-bold uppercase tracking-tighter">S1: La Piana del Respiro Marcio</h2>
             </div>
             <span className="bg-purple-600 text-white px-3 py-1 rounded text-xs font-bold">LIVELLO 1 → 2</span>
          </div>

          {/* Pulsanti popup */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            <button
              onClick={() => setIsEldricGuideModalOpen(true)}
              className="flex items-center justify-center space-x-2 px-4 py-2 bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 hover:border-emerald-500/60 text-emerald-400 rounded-lg transition-all text-sm font-semibold"
            >
              <span>🧙‍♂️</span>
              <span>La Guida di Eldric</span>
            </button>
            <button
              onClick={() => setIsPianaModalOpen(true)}
              className="flex items-center justify-center space-x-2 px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/40 hover:border-purple-500/60 text-purple-400 rounded-lg transition-all text-sm font-semibold"
            >
              <span>🌫️</span>
              <span>La Piana</span>
            </button>
            <button
              onClick={() => setIsBestiaSporaleModalOpen(true)}
              className="flex items-center justify-center space-x-2 px-4 py-2 bg-red-600/20 hover:bg-red-600/30 border border-red-500/40 hover:border-red-500/60 text-red-400 rounded-lg transition-all text-sm font-semibold"
            >
              <span>☠️</span>
              <span>La Bestia Sporale</span>
            </button>
            <button
              onClick={() => setIsTesoriPianaModalOpen(true)}
              className="flex items-center justify-center space-x-2 px-4 py-2 bg-amber-600/20 hover:bg-amber-600/30 border border-amber-500/40 hover:border-amber-500/60 text-amber-400 rounded-lg transition-all text-sm font-semibold"
            >
              <span>💰</span>
              <span>I Tesori</span>
            </button>
          </div>

          <div className="space-y-8">
            <div className="prose-rot text-lg bg-slate-800/30 p-8 rounded-2xl border border-slate-700">
                <p className="font-bold text-emerald-400 uppercase text-xs mb-2 tracking-widest">Descrizione del Luogo</p>
                <p>Gli alberi intorno alla radura sono bassi, piegati verso l’esterno come se evitassero il centro. Il terreno è scuro, spugnoso e rilascia un odore dolciastro e marcio. Al centro crescono <strong>tre grandi funghi viola</strong> disposti in cerchio perfetto.</p>
            </div>

            <StatBlock stats={bossStats} />

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                    <h4 className="text-emerald-400 font-bold mb-3 flex items-center">
                        <span className="mr-2">💰</span> Tesori e Segreti
                    </h4>
                    <ul className="text-sm space-y-4">
                        <li className="border-b border-slate-800 pb-2">
                            <strong className="text-purple-400 block">Veleno Sporale Raffinato</strong>
                            3 dosi, azione bonus, +1d4 danni da veleno.
                        </li>
                        <li className="border-b border-slate-800 pb-2">
                            <strong className="text-purple-400 block">Pergamena - Incantesimo</strong>
                            Freccia Acida o Raggio Rovente (rune cresciute).
                        </li>
                        <li>
                            <strong className="text-purple-400 block">Amuleto Druidico Rotto</strong>
                            Pendente di legno e osso. Inciso con simboli della radura.
                        </li>
                    </ul>
                </div>
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 border-l-4 border-emerald-500">
                    <h4 className="text-emerald-400 font-bold mb-3 flex items-center">
                        <span className="mr-2">🔍</span> Prova di Natura (CD 12-14)
                    </h4>
                    <p className="text-slate-300 italic mb-4">"I funghi non stanno colonizzando. Non si diffondono. Sono nutriti da energia, non dal terreno."</p>
                    <div className="p-4 bg-emerald-500/10 rounded-xl">
                        <p className="text-emerald-400 font-bold text-center">CONCLUSIONE CHIAVE:</p>
                        <p className="text-white text-center text-lg">Non è un'invasione. È un richiamo.</p>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* SESSION 2 & 3 SUMMARY */}
        <section id="session2" className="mb-24 scroll-mt-24">
            <div className="flex items-center space-x-4 mb-4">
                <span className="text-4xl">🏯</span>
                <h2 className="text-4xl font-bold uppercase tracking-tighter">S2: Il Santuario delle Radici Sospese</h2>
            </div>

            {/* Pulsanti popup S2 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              <button
                onClick={() => setIsMedaglioneModalOpen(true)}
                className="flex items-center justify-center space-x-2 px-4 py-2 bg-amber-600/20 hover:bg-amber-600/30 border border-amber-500/40 hover:border-amber-500/60 text-amber-400 rounded-lg transition-all text-sm font-semibold"
              >
                <span>🔍</span>
                <span>Analisi Medaglione</span>
              </button>
              <button
                onClick={() => setIsScritteRaduraModalOpen(true)}
                className="flex items-center justify-center space-x-2 px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/40 hover:border-purple-500/60 text-purple-400 rounded-lg transition-all text-sm font-semibold"
              >
                <span>📜</span>
                <span>Scritte Radura</span>
              </button>
              <button
                onClick={() => setIsEldricGuideS2ModalOpen(true)}
                className="flex items-center justify-center space-x-2 px-4 py-2 bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 hover:border-emerald-500/60 text-emerald-400 rounded-lg transition-all text-sm font-semibold"
              >
                <span>🧙‍♂️</span>
                <span>Guida Eldric</span>
              </button>
              <button
                onClick={() => setIsTempioModalOpen(true)}
                className="flex items-center justify-center space-x-2 px-4 py-2 bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 hover:border-emerald-500/60 text-emerald-400 rounded-lg transition-all text-sm font-semibold"
              >
                <span>🏯</span>
                <span>Il Tempio</span>
              </button>
              <button
                onClick={() => setIsSpiritiCorrottiModalOpen(true)}
                className="flex items-center justify-center space-x-2 px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/40 hover:border-purple-500/60 text-purple-400 rounded-lg transition-all text-sm font-semibold"
              >
                <span>👻</span>
                <span>Spiriti Corrotti</span>
              </button>
              <button
                onClick={() => setIsGuardianoRadiciModalOpen(true)}
                className="flex items-center justify-center space-x-2 px-4 py-2 bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 hover:border-emerald-500/60 text-emerald-400 rounded-lg transition-all text-sm font-semibold"
              >
                <span>🌳</span>
                <span>Guardiano Radici</span>
              </button>
              <button
                onClick={() => setIsTesoriS2ModalOpen(true)}
                className="flex items-center justify-center space-x-2 px-4 py-2 bg-amber-600/20 hover:bg-amber-600/30 border border-amber-500/40 hover:border-amber-500/60 text-amber-400 rounded-lg transition-all text-sm font-semibold"
              >
                <span>💰</span>
                <span>I Tesori</span>
              </button>
              <button
                onClick={() => setIsDiarioMorghulModalOpen(true)}
                className="flex items-center justify-center space-x-2 px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/40 hover:border-purple-500/60 text-purple-400 rounded-lg transition-all text-sm font-semibold"
              >
                <span>📖</span>
                <span>Diario Morghul</span>
              </button>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-6">
                <p className="text-xl">Un antico tempio elfico-druidico sospeso tra alberi giganteschi. Qui si custodiva l’equilibrio tra decomposizione e rinascita.</p>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <h4 className="text-purple-400 font-bold">Nemici:</h4>
                        <p className="text-slate-300">• Spiriti della Foresta Corrotti</p>
                        <p className="text-slate-300">• <strong>Guardiano delle Radici</strong> (Ex protettore elfico)</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-emerald-400 font-bold">Rivelazione Chiave:</h4>
                        <p className="text-slate-300">Il Cuore di Spora è stato legato a un custode mortale, ma il vincolo è instabile.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="session3" className="mb-24 scroll-mt-24">
            <div className="flex items-center space-x-4 mb-8">
                <span className="text-4xl">⚔️</span>
                <h2 className="text-4xl font-bold uppercase tracking-tighter">S3: Il Cuore di Spora</h2>
            </div>
            <div className="bg-purple-900/10 border border-purple-500/20 p-8 rounded-[3rem] space-y-8">
                <div className="text-center max-w-xl mx-auto">
                    <h3 className="text-3xl font-serif italic mb-4">La Caverna Vivente</h3>
                    <p className="text-lg text-slate-400">Radici come vene, funghi giganti pulsanti. Al centro: <strong>Morghul, il Custode Decomposto</strong>.</p>
                </div>

                <div className="bg-slate-900/80 p-8 rounded-2xl border border-slate-700">
                    <h4 className="text-2xl font-bold text-red-400 mb-4 text-center">SCELTE MORALI FINALI</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-center">
                            <p className="font-bold text-red-500 mb-1">DISTRUGGERLO</p>
                            <p className="text-xs text-slate-400">La foresta cambia per sempre.</p>
                        </div>
                        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                            <p className="font-bold text-emerald-500 mb-1">PURIFICARLO</p>
                            <p className="text-xs text-slate-400">Eldric si sacrifica per la foresta.</p>
                        </div>
                        <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-center">
                            <p className="font-bold text-purple-500 mb-1">SIGILLARLO</p>
                            <p className="text-xs text-slate-400">La minaccia tornerà tra secoli.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* EPILOGUE */}
        <section id="epilogue" className="mb-24 pb-24 scroll-mt-24 text-center">
            <div className="flex flex-col items-center justify-center space-y-8">
                <span className="text-6xl">🌅</span>
                <h2 className="text-5xl font-bold uppercase tracking-tighter">Epilogo</h2>
                <div className="max-w-2xl text-2xl font-serif italic text-slate-300 leading-relaxed">
                    "Le carovane riprendono. La foresta cambia: non è più 'pura', ma viva e consapevole. Tuonceppo riconosce gli eroi. E Selvarotta... li ricorderà."
                </div>
                <div className="pt-12">
                   <button 
                    onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                    className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-bold transition-all shadow-lg shadow-emerald-900/40"
                   >
                    Torna all'Inizio
                   </button>
                </div>
            </div>
        </section>

      </main>

      {/* Footer / Credits */}
      <footer className="fixed bottom-0 left-72 right-0 p-4 bg-slate-900/80 backdrop-blur-md border-t border-slate-800 text-center text-xs text-slate-500 z-30 hidden lg:block">
        © 2024 La Putrefazione di Selvarotta - Campagna D&D 5e - Creato con ❤️ per i Dungeon Master
      </footer>

      {/* Story Modal */}
      <StoryModal isOpen={isStoryModalOpen} onClose={() => setIsStoryModalOpen(false)} />
      
      {/* Fable Modal */}
      <FableModal isOpen={isFableModalOpen} onClose={() => setIsFableModalOpen(false)} />

      {/* Session 1 Modals */}
      <EldricGuideModal isOpen={isEldricGuideModalOpen} onClose={() => setIsEldricGuideModalOpen(false)} />
      <PianaModal isOpen={isPianaModalOpen} onClose={() => setIsPianaModalOpen(false)} />
      <BestiaSporaleModal isOpen={isBestiaSporaleModalOpen} onClose={() => setIsBestiaSporaleModalOpen(false)} />
      <TesoriPianaModal isOpen={isTesoriPianaModalOpen} onClose={() => setIsTesoriPianaModalOpen(false)} />

      {/* Session 2 Modals */}
      <MedaglioneModal isOpen={isMedaglioneModalOpen} onClose={() => setIsMedaglioneModalOpen(false)} />
      <ScritteRaduraModal isOpen={isScritteRaduraModalOpen} onClose={() => setIsScritteRaduraModalOpen(false)} />
      <EldricGuideS2Modal isOpen={isEldricGuideS2ModalOpen} onClose={() => setIsEldricGuideS2ModalOpen(false)} />
      <TempioModal isOpen={isTempioModalOpen} onClose={() => setIsTempioModalOpen(false)} />
      <SpiritiCorrottiModal isOpen={isSpiritiCorrottiModalOpen} onClose={() => setIsSpiritiCorrottiModalOpen(false)} />
      <GuardianoRadiciModal isOpen={isGuardianoRadiciModalOpen} onClose={() => setIsGuardianoRadiciModalOpen(false)} />
      <TesoriS2Modal isOpen={isTesoriS2ModalOpen} onClose={() => setIsTesoriS2ModalOpen(false)} />
      <DiarioMorghulModal isOpen={isDiarioMorghulModalOpen} onClose={() => setIsDiarioMorghulModalOpen(false)} />
    </div>
  );
};

export default App;
