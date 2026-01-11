/**
 * Componente EldricGuideModal
 * 
 * Modal per visualizzare la guida di Eldric per la Piana del Respiro Marcio.
 * 
 * @param {boolean} isOpen - Stato di apertura/chiusura del modal
 * @param {() => void} onClose - Callback per chiudere il modal
 * @returns {JSX.Element | null} Il modal se aperto, null altrimenti
 */
import React from 'react';

interface EldricGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EldricGuideModal: React.FC<EldricGuideModalProps> = ({ isOpen, onClose }) => {
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
        {/* Header */}
        <div className="sticky top-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 px-8 py-6 flex items-center justify-between rounded-t-3xl z-10">
          <div className="flex items-center space-x-4">
            <span className="text-3xl">🧙‍♂️</span>
            <h2 className="text-3xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-400">
              La Guida di Eldric
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
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
            <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
              «C'è un posto nella Selvarotta dove la foresta respirava insieme a noi.»
            </p>

            <div className="bg-slate-800/50 p-6 rounded-xl space-y-4">
              <p className="font-serif italic text-slate-200">
                «Era una radura.<br/>
                Non sacra.<br/>
                Necessaria.»
              </p>
            </div>

            <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
              «Se vedrete funghi viola disposti come dita che stringono qualcosa…<br/>
              allora siete arrivati.»
            </p>

            <div className="mt-8 pt-6 border-t border-slate-700">
              <p className="text-slate-400 text-sm uppercase tracking-widest mb-4">Se insistono:</p>
              <p className="font-serif italic text-red-300 text-xl border-l-4 border-red-500/40 pl-6 py-2">
                «Lì il Cuore lasciava uscire il suo respiro.<br/>
                Ora… esce senza controllo.»
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
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
