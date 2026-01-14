/**
 * Componente BestiaSporaleModal
 * 
 * Modal per visualizzare informazioni dettagliate sulla Bestia Sporale.
 * 
 * @param {boolean} isOpen - Stato di apertura/chiusura del modal
 * @param {() => void} onClose - Callback per chiudere il modal
 * @returns {JSX.Element | null} Il modal se aperto, null altrimenti
 */
import React, { useState } from 'react';
import bestiaSporale from '../assets/Bestia sporale.png';
import { StatBlock } from './StatBlock';
import { MonsterStats } from '../types';

interface BestiaSporaleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BestiaSporaleModal: React.FC<BestiaSporaleModalProps> = ({ isOpen, onClose }) => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  
  if (!isOpen) return null;

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

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm transition-all animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-slate-900 rounded-3xl border border-slate-700 shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 px-8 py-6 flex items-center justify-between rounded-t-3xl z-10">
          <div className="flex items-center space-x-4">
            <span className="text-3xl">☠️</span>
            <h2 className="text-3xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-400">
              La Bestia Sporale Minore (BOSS 1)
            </h2>
          </div>
          <button 
            className="text-slate-400 hover:text-white transition-colors p-2 bg-slate-800/50 hover:bg-slate-700 rounded-full"
            onClick={onClose}
            aria-label="Chiudi"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Titolo principale */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <span className="text-3xl">☠️</span>
              <h3 className="text-2xl font-bold uppercase tracking-tighter text-red-400">
                LA BESTIA SPORALE MINORE (BOSS 1)
              </h3>
            </div>
          </div>

          {/* Immagine zoomabile */}
          <div className="mb-8">
            <div 
              className="group relative cursor-zoom-in overflow-hidden rounded-xl bg-slate-800 border border-slate-700 hover:border-purple-500 transition-all duration-300 shadow-lg"
              onClick={() => setIsImageOpen(true)}
            >
              <img 
                src={bestiaSporale} 
                alt="La Bestia Sporale" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white bg-purple-600/80 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">Ingrandisci</span>
              </div>
            </div>
          </div>

          {/* Modal immagine zoomata */}
          {isImageOpen && (
            <div 
              className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm transition-all animate-in fade-in duration-300"
              onClick={() => setIsImageOpen(false)}
            >
              <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center">
                <button 
                  className="absolute top-4 right-4 text-white hover:text-purple-400 transition-colors p-2 bg-white/10 rounded-full z-10"
                  onClick={(e) => { e.stopPropagation(); setIsImageOpen(false); }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <img 
                  src={bestiaSporale} 
                  alt="La Bestia Sporale" 
                  className="max-h-full max-w-full object-contain shadow-2xl rounded-lg animate-in zoom-in-95 duration-300"
                />
              </div>
            </div>
          )}

          {/* Cos'è */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-purple-400 uppercase tracking-tighter mb-4">
              Cos'è
            </h4>
            <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-red-500 space-y-4">
              <p className="text-slate-300 text-lg leading-relaxed">
                La Bestia Sporale non è un mostro nato così.<br/>
                È un animale morto (puoi scegliere: cervo, lupo enorme, cinghiale) che non è mai diventato terra.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Il Cuore, incapace di trasformare correttamente, lo ha riempito di funghi e rimesso in piedi.
              </p>
            </div>
          </div>

          {/* Aspetto */}
          <div className="mt-8 space-y-4">
            <h4 className="text-xl font-bold text-purple-400 uppercase tracking-tighter mb-4">
              Aspetto
            </h4>
            <div className="bg-slate-800/50 p-6 rounded-xl space-y-3">
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Corpo animalesco piegato in modo innaturale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Parti della pelle mancanti, sostituite da escrescenze violacee</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Un fungo più grande cresce dalla schiena come una gobba</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Gli occhi sono lattiginosi, senza pupille</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Ogni respiro rilascia una nuvola sottile di spore</span>
                </li>
              </ul>

              <div className="mt-6 pt-4 border-t border-slate-700">
                <p className="text-slate-400 text-sm uppercase tracking-widest mb-3">Si muove:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300">lentamente</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300">ma con scatti improvvisi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300">lasciando impronte umide e nere</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700">
                <p className="text-slate-300 italic">
                  Non ruggisce.<br/>
                  Emette un suono gorgogliante, come qualcosa che fermenta.
                </p>
              </div>
            </div>
          </div>

          {/* Comportamento in combattimento */}
          <div className="mt-8 pt-6 border-t-2 border-slate-700">
            <h4 className="text-xl font-bold text-red-400 uppercase tracking-tighter mb-4">
              Comportamento in combattimento
            </h4>
            <div className="bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500">
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Attacca chi si avvicina al cerchio dei funghi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Non insegue a lungo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Se ferita gravemente, rilascia più spore</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Non combatte con intelligenza, ma difende il luogo</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Stat Block */}
          <div className="mt-10 pt-6 border-t-2 border-slate-700">
            <h4 className="text-xl font-bold text-red-400 uppercase tracking-tighter mb-4">
              📊 Statistiche
            </h4>
            <StatBlock stats={bossStats} />
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-slate-900/95 backdrop-blur-sm border-t border-slate-700 px-8 py-4 rounded-b-3xl">
          <button
            onClick={onClose}
            className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-purple-900/40"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  );
};
