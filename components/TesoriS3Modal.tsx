/**
 * Componente TesoriS3Modal
 * 
 * Modal per visualizzare i tesori disponibili nella sezione 3 (Il Cuore di Spora).
 * 
 * @param {boolean} isOpen - Stato di apertura/chiusura del modal
 * @param {() => void} onClose - Callback per chiudere il modal
 * @returns {JSX.Element | null} Il modal se aperto, null altrimenti
 */
import React from 'react';

interface TesoriS3ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TesoriS3Modal: React.FC<TesoriS3ModalProps> = ({ isOpen, onClose }) => {
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
            <h2 className="text-3xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-emerald-400">
              I Tesori del Cuore
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
              <span className="text-3xl">💎</span>
              <h3 className="text-2xl font-bold uppercase tracking-tighter text-amber-400">
                I TESORI DEL CUORE DI SPORA
              </h3>
            </div>
            <p className="text-slate-400 italic text-sm">
              (Ricompense per aver raggiunto il cuore della corruzione)
            </p>
          </div>

          {/* Tesori dalla sconfitta di Morghul */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">👻</span>
              <h4 className="text-xl font-bold text-purple-400 uppercase tracking-tighter">
                Dalla sconfitta di Morghul
              </h4>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-purple-500">
                <p className="font-bold text-purple-300 mb-2">Bastone di Morghul</p>
                <p className="text-slate-300 text-sm mb-2">
                  <strong>Tipo:</strong> Bacchetta rara<br/>
                  <strong>Proprietà:</strong> +1 alle tiri per colpire e ai danni con incantesimi druidici<br/>
                  <strong>Potere speciale:</strong> Una volta al giorno, puoi lanciare "Controllo delle Piante" senza consumare uno slot incantesimo
                </p>
                <p className="text-slate-400 italic text-xs mt-2">
                  Il bastone di Morghul, un tempo strumento di vita, ora porta con sé l'eco della decomposizione.
                </p>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-emerald-500">
                <p className="font-bold text-emerald-300 mb-2">Amuleto del Custode</p>
                <p className="text-slate-300 text-sm mb-2">
                  <strong>Tipo:</strong> Amuleto raro<br/>
                  <strong>Proprietà:</strong> +2 alla CA quando indossato<br/>
                  <strong>Potere speciale:</strong> Resistenza ai danni da veleno e malattia
                </p>
                <p className="text-slate-400 italic text-xs mt-2">
                  Un amuleto che Morghul portava quando era ancora un druido. Porta con sé la protezione della foresta.
                </p>
              </div>
            </div>
          </div>

          {/* Tesori dalla grotta */}
          <div className="mt-10 pt-6 border-t-2 border-slate-700">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">🕳️</span>
              <h4 className="text-xl font-bold text-emerald-400 uppercase tracking-tighter">
                Dalla grotta del Cuore
              </h4>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-emerald-500">
                <p className="font-bold text-emerald-300 mb-2">Spore del Cuore</p>
                <p className="text-slate-300 text-sm mb-2">
                  <strong>Tipo:</strong> Consumabile raro (3 dosi)<br/>
                  <strong>Effetto:</strong> Quando consumato, rigenera 2d8+2 punti ferita e rimuove una condizione di malattia o veleno
                </p>
                <p className="text-slate-400 italic text-xs mt-2">
                  Spore raccolte direttamente dal Cuore di Spora. Portano con sé il potere della vita e della morte.
                </p>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-purple-500">
                <p className="font-bold text-purple-300 mb-2">Radice Vivente</p>
                <p className="text-slate-300 text-sm mb-2">
                  <strong>Tipo:</strong> Oggetto magico raro<br/>
                  <strong>Proprietà:</strong> Può essere piantata per creare un'area di terreno fertile permanente<br/>
                  <strong>Potere speciale:</strong> Una volta al giorno, puoi lanciare "Cura Ferite" senza consumare uno slot incantesimo
                </p>
                <p className="text-slate-400 italic text-xs mt-2">
                  Una radice che pulsa ancora con la vita del Cuore. Porta con sé il potere della rigenerazione.
                </p>
              </div>
            </div>
          </div>

          {/* Tesori basati sulla scelta finale */}
          <div className="mt-10 pt-6 border-t-2 border-slate-700">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">⚖️</span>
              <h4 className="text-xl font-bold text-amber-400 uppercase tracking-tighter">
                Basati sulla scelta finale
              </h4>
            </div>

            <div className="space-y-4">
              <div className="bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500">
                <p className="font-bold text-red-300 mb-2">Se DISTRUGGONO il Cuore:</p>
                <p className="text-slate-300 text-sm">
                  <strong>Frammento del Cuore:</strong> Un frammento dell'esplosione finale. Può essere usato per creare un'arma magica potente, ma instabile.
                </p>
              </div>

              <div className="bg-emerald-900/20 p-6 rounded-xl border-l-4 border-emerald-500">
                <p className="font-bold text-emerald-300 mb-2">Se PURIFICANO il Cuore:</p>
                <p className="text-slate-300 text-sm">
                  <strong>Benedizione del Cuore:</strong> I giocatori ricevono una benedizione permanente: +1 a tutti i tiri per colpire e ai danni con incantesimi druidici.
                </p>
              </div>

              <div className="bg-purple-900/20 p-6 rounded-xl border-l-4 border-purple-500">
                <p className="font-bold text-purple-300 mb-2">Se SIGILLANO il Cuore:</p>
                <p className="text-slate-300 text-sm">
                  <strong>Chiave del Sigillo:</strong> Un oggetto magico che permette di aprire il sigillo in futuro, se necessario. Può essere usato per accedere alla grotta sigillata.
                </p>
              </div>
            </div>
          </div>

          {/* Tesori monetari */}
          <div className="mt-10 pt-6 border-t-2 border-slate-700">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">💰</span>
              <h4 className="text-xl font-bold text-amber-400 uppercase tracking-tighter">
                Tesori monetari
              </h4>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl">
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-3 mt-1">•</span>
                  <span><strong>500-1000 mo</strong> in monete antiche trovate nella grotta</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-3 mt-1">•</span>
                  <span><strong>Gemme preziose</strong> (valore totale: 500 mo) incastonate nelle radici</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-3 mt-1">•</span>
                  <span><strong>Oggetti d'arte druidici</strong> (valore totale: 300 mo) lasciati dai custodi precedenti</span>
                </li>
              </ul>
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
