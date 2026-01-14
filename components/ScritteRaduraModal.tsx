/**
 * Componente ScritteRaduraModal
 * 
 * Modal per visualizzare l'analisi delle scritte nella radura nella S2.
 * 
 * @param {boolean} isOpen - Stato di apertura/chiusura del modal
 * @param {() => void} onClose - Callback per chiudere il modal
 * @returns {JSX.Element | null} Il modal se aperto, null altrimenti
 */
import React from 'react';

interface ScritteRaduraModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScritteRaduraModal: React.FC<ScritteRaduraModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
            <span className="text-3xl">📜</span>
            <h2 className="text-3xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">
              Analisi delle Scritte nella Radura
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
          {/* Titolo principale */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <span className="text-3xl">🍃</span>
              <h3 className="text-2xl font-bold uppercase tracking-tighter text-emerald-400">
                LA TRADUZIONE DELL'ALTARE DEI FUNGHI
              </h3>
            </div>
          </div>

          {/* Prima citazione */}
          <div className="space-y-4">
            <p className="font-serif italic text-emerald-300 text-lg border-l-4 border-emerald-500/40 pl-6 py-2">
              «Qui…»
            </p>
            <p className="font-serif italic text-emerald-300 text-lg border-l-4 border-emerald-500/40 pl-6 py-2">
              «Qui la foresta respirava con noi.»
            </p>
            <p className="text-slate-400 text-sm italic">
              Fa una pausa.
            </p>
            <p className="font-serif italic text-emerald-300 text-lg border-l-4 border-emerald-500/40 pl-6 py-2">
              «Non è una preghiera.<br/>
              È una promessa.»
            </p>
            <p className="text-slate-400 text-sm italic">
              Continua, lentamente.
            </p>
          </div>

          {/* Prima traduzione */}
          <div className="mt-8 pt-6 border-t-2 border-slate-700">
            <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-purple-500">
              <p className="text-slate-300 text-lg leading-relaxed mb-4 font-serif italic">
                "Quando il respiro si fa pesante,<br/>
                cercate dove le radici non spezzano la pietra."
              </p>
              <p className="text-slate-400 text-sm italic">
                Eldric alza lo sguardo.
              </p>
              <p className="font-serif italic text-purple-300 text-lg border-l-4 border-purple-500/40 pl-4 py-2 mt-3">
                «Questo parla del tempio.»
              </p>
            </div>
          </div>

          {/* Seconda traduzione */}
          <div className="mt-8 pt-6 border-t-2 border-slate-700">
            <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-emerald-500">
              <p className="text-slate-300 text-lg leading-relaxed mb-4 font-serif italic">
                "Lì dove il cerchio è aperto al cielo,<br/>
                e l'uomo non ha chiuso la foresta."
              </p>
              <p className="text-slate-400 text-sm italic">
                Un mezzo sorriso amaro.
              </p>
              <p className="font-serif italic text-emerald-300 text-lg border-l-4 border-emerald-500/40 pl-4 py-2 mt-3">
                «Un tempio senza porte.»
              </p>
            </div>
          </div>

          {/* Terza traduzione */}
          <div className="mt-8 pt-6 border-t-2 border-slate-700">
            <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-purple-500">
              <p className="text-slate-300 text-lg leading-relaxed mb-4 font-serif italic">
                "Non chiamate il Cuore con la voce.<br/>
                Chiamatelo con le mani."
              </p>
              <p className="text-slate-400 text-sm italic">
                Eldric inspira profondamente.
              </p>
            </div>
          </div>

          {/* Quarta traduzione */}
          <div className="mt-8 pt-6 border-t-2 border-slate-700">
            <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-emerald-500">
              <p className="text-slate-300 text-lg leading-relaxed mb-4 font-serif italic">
                "Toccate ciò che un tempo ci univa,<br/>
                e il Cuore ricorderà come ascoltare."
              </p>
              <p className="text-slate-400 text-sm italic">
                Chiude gli occhi.
              </p>
            </div>
          </div>
        </div>
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
