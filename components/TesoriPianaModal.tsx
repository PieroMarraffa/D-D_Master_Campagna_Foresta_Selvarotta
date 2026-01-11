/**
 * Componente TesoriPianaModal
 * 
 * Modal per visualizzare i tesori e i segreti della Piana del Respiro Marcio.
 * 
 * @param {boolean} isOpen - Stato di apertura/chiusura del modal
 * @param {() => void} onClose - Callback per chiudere il modal
 * @returns {JSX.Element | null} Il modal se aperto, null altrimenti
 */
import React from 'react';

interface TesoriPianaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TesoriPianaModal: React.FC<TesoriPianaModalProps> = ({ isOpen, onClose }) => {
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
            <span className="text-3xl">💰</span>
            <h2 className="text-3xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
              I Tesori della Piana
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
              <span className="text-3xl">💰</span>
              <h3 className="text-2xl font-bold uppercase tracking-tighter text-amber-400">
                TESORI E SEGRETI
              </h3>
            </div>
          </div>

          {/* Veleno Sporale Raffinato */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">🌿</span>
              <h4 className="text-xl font-bold text-emerald-400">
                Veleno Sporale Raffinato
              </h4>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-emerald-500 space-y-4">
              <p className="text-slate-300 text-lg leading-relaxed">
                Liquido viola scuro, denso, conservato in piccoli flaconi di corteccia sigillata.
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">3 dosi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Applicazione: azione bonus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Effetto: +1d4 danni da veleno al prossimo colpo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Odore: fungino, dolciastro</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-slate-700">
                <p className="text-slate-400 text-sm uppercase tracking-widest mb-2">Eldric lo riconosce:</p>
                <p className="font-serif italic text-emerald-300 text-lg border-l-4 border-emerald-500/40 pl-4 py-2">
                  «Questo è respiro della foresta… usato con cautela.»
                </p>
              </div>
            </div>
          </div>

          {/* Pergamena - Incantesimo */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">📜</span>
              <h4 className="text-xl font-bold text-purple-400">
                Pergamena – Incantesimo
              </h4>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-purple-500 space-y-4">
              <p className="text-slate-300 text-lg leading-relaxed">
                Scritta su carta vegetale.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Scegli una:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Freccia Acida</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Raggio Rovente</span>
                </li>
              </ul>
              <p className="text-slate-400 italic mt-4">
                Le rune sembrano cresciute, non scritte.
              </p>
            </div>
          </div>

          {/* Baule semi-interrato */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">💰</span>
              <h4 className="text-xl font-bold text-amber-400">
                Baule semi-interrato
              </h4>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-amber-500 space-y-4">
              <p className="text-slate-300 text-lg leading-relaxed">
                Vecchio, rinforzato con ferro annerito.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed font-semibold">
                Contiene:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">35 monete d'oro</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">un sacchetto di semi secchi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">un amuleto druidico spezzato</span>
                </li>
              </ul>
            </div>
          </div>

          {/* L'Amuleto Druidico Rotto */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">🍃</span>
              <h4 className="text-xl font-bold text-emerald-400">
                L'Amuleto Druidico Rotto
              </h4>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-emerald-500 space-y-4">
              <p className="text-slate-300 text-lg leading-relaxed">
                Un pendente di legno intrecciato e osso.
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Spezzato a metà</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Inciso con lo stesso simbolo della radura</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-slate-700">
                <p className="text-slate-400 text-sm uppercase tracking-widest mb-2">Se riparato più avanti:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300">può diventare un focus druidico</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300">o un talismano legato al Cuore</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-700">
                <p className="text-slate-300">
                  Eldric lo riconosce subito.<br/>
                  Non dice di chi fosse.
                </p>
              </div>
            </div>
          </div>

          {/* PROVA DI NATURA */}
          <div className="mt-10 pt-6 border-t-2 border-slate-700">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">🔍</span>
              <h4 className="text-xl font-bold text-emerald-400 uppercase tracking-tighter">
                PROVA DI NATURA (CD 12–14)
              </h4>
            </div>
            <div className="bg-emerald-900/20 p-6 rounded-xl border-l-4 border-emerald-500 space-y-4">
              <p className="text-slate-300 text-lg leading-relaxed">
                Chi esamina i funghi o la radura può capire:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">I funghi non stanno colonizzando</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Non si diffondono</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Crescono solo qui</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Sono nutriti da energia, non dal terreno</span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-emerald-500/40">
                <p className="text-slate-400 text-sm uppercase tracking-widest mb-2">Conclusione chiave:</p>
                <p className="text-xl font-bold text-emerald-400 text-center bg-slate-900/50 p-4 rounded-xl">
                  Non è un'invasione. È un richiamo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-slate-900/95 backdrop-blur-sm border-t border-slate-700 px-8 py-4 rounded-b-3xl">
          <button
            onClick={onClose}
            className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-amber-900/40"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  );
};
