/**
 * Componente GuardianoRadiciModal
 * 
 * Modal per visualizzare informazioni sul Guardiano delle Radici nella S2.
 * 
 * @param {boolean} isOpen - Stato di apertura/chiusura del modal
 * @param {() => void} onClose - Callback per chiudere il modal
 * @returns {JSX.Element | null} Il modal se aperto, null altrimenti
 */
import React from 'react';

interface GuardianoRadiciModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GuardianoRadiciModal: React.FC<GuardianoRadiciModalProps> = ({ isOpen, onClose }) => {
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
            <span className="text-3xl">🌳</span>
            <h2 className="text-3xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">
              Il Guardiano delle Radici
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
        <div className="p-8 space-y-6">
          <p className="text-slate-300 text-lg leading-relaxed">
            Contenuto sul Guardiano delle Radici da inserire...
          </p>
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
