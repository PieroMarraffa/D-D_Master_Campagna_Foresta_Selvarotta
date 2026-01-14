/**
 * Componente GuardianoRadiciModal
 * 
 * Modal per visualizzare informazioni sul Guardiano delle Radici nella S2.
 * 
 * @param {boolean} isOpen - Stato di apertura/chiusura del modal
 * @param {() => void} onClose - Callback per chiudere il modal
 * @returns {JSX.Element | null} Il modal se aperto, null altrimenti
 */
import React, { useState } from 'react';
import guardianoRadici from '../assets/Guardiano delle radici.png';
import { StatBlock } from './StatBlock';
import { MonsterStats } from '../types';

interface GuardianoRadiciModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GuardianoRadiciModal: React.FC<GuardianoRadiciModalProps> = ({ isOpen, onClose }) => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  if (!isOpen) return null;

  const guardianoStats: MonsterStats = {
    name: "Guardiano delle Radici",
    tagline: "Boss Sessione 2",
    size: "Grande",
    type: "Costrutto naturale",
    alignment: "Neutrale",
    ac: "14 (pelle di corteccia e pietra)",
    hp: "75 (10d10 + 20)",
    speed: "6 m",
    abilities: {
      str: { label: "FOR", value: 18, mod: "+4" },
      dex: { label: "DES", value: 8, mod: "-1" },
      con: { label: "COS", value: 15, mod: "+2" },
      int: { label: "INT", value: 3, mod: "-4" },
      wis: { label: "SAG", value: 12, mod: "+1" },
      cha: { label: "CAR", value: 6, mod: "-2" },
    },
    resistances: ["Resistenza ai danni da veleno", "Immunità alla condizione Avvelenato"],
    specialAbilities: [
      { 
        name: "Custode del Santuario (Passiva)", 
        description: "Quando il Guardiano scende sotto metà PF: radici crescono più velocemente, ottiene vantaggio al prossimo attacco." 
      }
    ],
    actions: [
      { 
        name: "Colpo di Radice", 
        description: "Attacco con arma da mischia: +6 a colpire, portata 3 m. Danni: 1d8 + 2 danni contundenti. Se colpisce, il terreno si spacca sotto il bersaglio (dimezza la sua velocità al prossio turno)." 
      },
      { 
        name: "Avvinciare delle Radici (Ricarica 5-6)", 
        description: "Azione — ricarica 5–6. Radici emergono dal terreno in un raggio di 3 m. TS Forza CD 13. Fallimento: 1d6 danni contundenti e Afferrato (velocità 0) fino alla fine del prossimo turno del Guardiano. Successo: Metà danni, nessuna condizione." 
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
        <div className="sticky top-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 px-8 py-6 flex items-center justify-between rounded-t-3xl z-10">
          <div className="flex items-center space-x-4">
            <span className="text-3xl">🌳</span>
            <h2 className="text-3xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">
              Il Guardiano delle Radici (BOSS)
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
        <div className="p-8 space-y-8">
          {/* Immagine zoomabile */}
          <div className="mb-8">
            <div 
              className="group relative cursor-zoom-in overflow-hidden rounded-xl bg-slate-800 border border-slate-700 hover:border-emerald-500 transition-all duration-300 shadow-lg"
              onClick={() => setIsImageOpen(true)}
            >
              <img 
                src={guardianoRadici} 
                alt="Guardiano delle Radici" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white bg-emerald-600/80 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">Ingrandisci</span>
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
                  className="absolute top-4 right-4 text-white hover:text-emerald-400 transition-colors p-2 bg-white/10 rounded-full z-10"
                  onClick={(e) => { e.stopPropagation(); setIsImageOpen(false); }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <img 
                  src={guardianoRadici} 
                  alt="Guardiano delle Radici" 
                  className="max-h-full max-w-full object-contain shadow-2xl rounded-lg animate-in zoom-in-95 duration-300"
                />
              </div>
            </div>
          )}

          {/* Descrizione narrativa */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">🌳</span>
              <h3 className="text-2xl font-bold text-emerald-400">
                IL GUARDIANO DELLE RADICI
              </h3>
            </div>
            <p className="text-slate-400 italic text-sm mb-6">(descrizione ingannevole)</p>
            
            <div className="space-y-5 text-slate-300 text-lg leading-relaxed font-serif">
              <p>
                La radura del tempio si oscura.
              </p>
              <p>
                Le radici sotto i vostri piedi si tendono, come nervi.<br/>
                La pietra scricchiola.
              </p>
              <p>
                Dal centro del santuario qualcosa si solleva.
              </p>
              <p className="font-semibold text-emerald-300">
                È alto quasi tre metri.
              </p>
              <p>
                Il suo corpo è formato da radici enormi intrecciate a blocchi di pietra chiara, la stessa del tempio, come se la struttura stessa si fosse alzata in piedi.<br/>
                Tra le giunture crescono funghi pallidi, spenti, simili a cicatrici.
              </p>
              <p>
                Al posto del volto…<br/>
                una maschera lignea spezzata.
              </p>
              <p>
                Non è un viso completo.<br/>
                È come un volto che è stato strappato via, lasciando solo una forma vuota.
              </p>
              <p>
                Dal centro del torace emerge una radice spessa e pulsante, che si contrae lentamente.
              </p>
              <p className="text-emerald-300 font-semibold text-center py-2">
                Bat…<br/>
                bat…<br/>
                <span className="text-slate-300 font-normal">Come un cuore.</span>
              </p>
              <p className="font-semibold text-emerald-300 mt-6 mb-2">
                Quando la creatura si muove:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span>il terreno trema sotto il peso</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span>piccole radici emergono dal suolo, seguendo ogni passo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span>l'aria si fa più fredda, più umida</span>
                </li>
              </ul>
              <p className="mt-6">
                Per un istante, avete l'impressione che vi stia osservando, anche senza occhi.
              </p>
              <p className="mt-4 italic text-slate-400">
                E poi…<br/>
                una vibrazione attraversa il tempio.
              </p>
              <p className="mt-2 font-semibold text-red-300">
                Non è un suono.
              </p>
              <p className="mt-2 font-semibold text-red-300">
                È un ricordo che spinge.
              </p>
            </div>
          </div>

          {/* Comportamento */}
          <div className="mt-10 pt-6 border-t-2 border-slate-700">
            <h4 className="text-xl font-bold text-red-400 uppercase tracking-tighter mb-4">
              Comportamento
            </h4>
            <div className="bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500">
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Non parla</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Avanza lentamente</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Attacca chi danneggia le radici sacre</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Difende il luogo fino alla distruzione</span>
                </li>
              </ul>
              <p className="mt-4 italic text-red-200">
                Combatte come un muro che avanza.
              </p>
            </div>
          </div>

          {/* Stat Block */}
          <div className="mt-10 pt-6 border-t-2 border-slate-700">
            <h4 className="text-xl font-bold text-emerald-400 uppercase tracking-tighter mb-4">
              📊 Statistiche
            </h4>
            <StatBlock stats={guardianoStats} />
          </div>

          {/* Consigli di bilanciamento */}
          <div className="mt-10 pt-6 border-t-2 border-slate-700">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">⚖️</span>
              <h4 className="text-xl font-bold text-amber-400 uppercase tracking-tighter">
                CONSIGLI DI BILANCIAMENTO
              </h4>
            </div>
            <div className="bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 space-y-4">
              <p className="text-slate-300 font-semibold mb-2">Per 3 PG livello 2–3:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">2–3 Spiriti come scontro normale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Guardiano da solo come boss</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Aggiungi terreno difficile (radici) per tensione</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-amber-500/40">
                <p className="text-slate-300 font-semibold mb-2">Se vedi difficoltà:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300">riduci i PF del Guardiano a 60</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300">abbassa CD di 1</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky bottom-0 bg-slate-900/95 backdrop-blur-sm border-t border-slate-700 px-8 py-4 rounded-b-3xl">
          <button
            onClick={onClose}
            className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-emerald-900/40"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  );
};
