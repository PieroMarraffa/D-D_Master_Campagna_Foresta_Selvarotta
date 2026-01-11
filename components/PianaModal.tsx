/**
 * Componente PianaModal
 * 
 * Modal per visualizzare informazioni dettagliate sulla Piana del Respiro Marcio.
 * 
 * @param {boolean} isOpen - Stato di apertura/chiusura del modal
 * @param {() => void} onClose - Callback per chiudere il modal
 * @returns {JSX.Element | null} Il modal se aperto, null altrimenti
 */
import React from 'react';

interface PianaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PianaModal: React.FC<PianaModalProps> = ({ isOpen, onClose }) => {
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
            <span className="text-3xl">🌫️</span>
            <h2 className="text-3xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">
              La Piana del Respiro Marcio
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
              <span className="text-3xl">🌿</span>
              <h3 className="text-2xl font-bold uppercase tracking-tighter text-purple-400">
                LA PIANA DEL RESPIRO MARCIO
              </h3>
            </div>
            <p className="text-slate-400 italic text-sm">
              (antica radura del Cuore di Spora)
            </p>
          </div>

          {/* Descrizione del luogo */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">🌫️</span>
              <h4 className="text-xl font-bold text-emerald-400 uppercase tracking-tighter">
                Descrizione del luogo
              </h4>
            </div>

            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                La foresta si apre all'improvviso.
              </p>

              <p>
                Gli alberi intorno alla radura sono più bassi, piegati verso l'esterno come se evitassero il centro.<br/>
                L'erba è quasi assente: il terreno è scuro, morbido, spugnoso sotto i piedi, e rilascia un odore dolciastro e marcio a ogni passo.
              </p>

              <p>
                L'aria è pesante, come dopo un temporale che non arriva mai. Respirare richiede attenzione: non soffoca, ma stanca.
              </p>

              <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-purple-500 mt-6">
                <p className="font-semibold text-purple-300 mb-4">Al centro della piana:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span>crescono tre grandi funghi viola, alti quanto un uomo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span>disposti in cerchio perfetto</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span>i cappelli sono lucidi, venati di nero</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span>dal gambo colano lentamente gocce lattiginose</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-emerald-500 mt-4">
                <p className="font-semibold text-emerald-300 mb-4">Intorno ai funghi:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span>il terreno è inciso da antichi simboli, quasi cancellati</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span>le radici affiorano come vene</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span>il silenzio è totale: nessun insetto, nessun uccello</span>
                  </li>
                </ul>
              </div>

              <p className="mt-6 italic text-slate-400 text-center bg-slate-800/30 p-4 rounded-xl">
                È chiaro che questo non è un luogo naturale, ma qualcosa che lo era.
              </p>
            </div>
          </div>

          {/* Nemici */}
          <div className="mt-10 pt-6 border-t-2 border-slate-700">
            <h4 className="text-xl font-bold text-red-400 mb-4 uppercase tracking-tighter">
              Nemici
            </h4>
            <div className="space-y-4">
              <div className="bg-slate-800/50 p-4 rounded-xl">
                <p className="text-slate-300 mb-2">
                  <span className="text-purple-400">•</span> Funghi viola (già introdotti)
                </p>
              </div>
              <div className="bg-red-900/20 p-4 rounded-xl border-l-4 border-red-500">
                <p className="text-slate-300 mb-3">
                  <span className="text-red-400">•</span> <strong className="text-red-300">Bestia Sporale Minore</strong> (Boss 1)
                </p>
                <ul className="space-y-1 ml-6 text-sm text-slate-400">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2 mt-1">o</span>
                    <span>Corpo animale ricoperto di funghi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2 mt-1">o</span>
                    <span>Rilascia nubi velenose</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2 mt-1">o</span>
                    <span>Meccanica semplice, perfetta per lvl 1</span>
                  </li>
                </ul>
              </div>
            </div>
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
