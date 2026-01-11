/**
 * Componente BestiaSporaleModal
 * 
 * Modal per visualizzare informazioni dettagliate sulla Bestia Sporale.
 * 
 * @param {boolean} isOpen - Stato di apertura/chiusura del modal
 * @param {() => void} onClose - Callback per chiudere il modal
 * @returns {JSX.Element | null} Il modal se aperto, null altrimenti
 */
import React from 'react';

interface BestiaSporaleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BestiaSporaleModal: React.FC<BestiaSporaleModalProps> = ({ isOpen, onClose }) => {
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
