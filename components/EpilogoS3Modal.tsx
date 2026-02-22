/**
 * Componente EpilogoS3Modal
 * 
 * Modal per visualizzare l'epilogo della sezione 3 (Il Cuore di Spora).
 * 
 * @param {boolean} isOpen - Stato di apertura/chiusura del modal
 * @param {() => void} onClose - Callback per chiudere il modal
 * @returns {JSX.Element | null} Il modal se aperto, null altrimenti
 */
import React from 'react';

interface EpilogoS3ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EpilogoS3Modal: React.FC<EpilogoS3ModalProps> = ({ isOpen, onClose }) => {
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
            <span className="text-3xl">🌅</span>
            <h2 className="text-3xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-400">
              Epilogo
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
              <span className="text-3xl">🌲</span>
              <h3 className="text-2xl font-bold uppercase tracking-tighter text-emerald-400">
                EPILOGO
              </h3>
            </div>
            <p className="text-slate-400 italic text-sm">
              (Il futuro della Selvarotta)
            </p>
          </div>

          {/* Epilogo generale */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">📖</span>
              <h4 className="text-xl font-bold text-emerald-400 uppercase tracking-tighter">
                Il futuro della foresta
              </h4>
            </div>

            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p className="font-serif italic text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                "Le carovane riprendono. La foresta cambia: non è più 'pura', ma viva e consapevole."
              </p>

              <p>
                Qualsiasi scelta abbiano fatto i giocatori, la Selvarotta non sarà più la stessa.
              </p>

              <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-emerald-500 mt-6">
                <p className="font-semibold text-emerald-300 mb-4">Cosa succede dopo:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span>la corruzione si ferma, la foresta inizia a guarire</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span>i funghi viola appassiscono, le radici corrotte si ritraggono</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span>gli animali tornano, gli uccelli cantano di nuovo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span>Tuonceppo riconosce gli eroi come salvatori della foresta</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Epilogo basato sulla scelta */}
          <div className="mt-10 pt-6 border-t-2 border-slate-700">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">⚖️</span>
              <h4 className="text-xl font-bold text-purple-400 uppercase tracking-tighter">
                Epilogo basato sulla scelta
              </h4>
            </div>

            <div className="space-y-6">
              <div className="bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500">
                <p className="font-bold text-red-300 mb-3 text-lg">Se hanno DISTRUTTO il Cuore:</p>
                <div className="space-y-3 text-slate-300">
                  <p>
                    La foresta perde la sua magia naturale. Gli alberi crescono più lentamente, i druidi perdono parte del loro potere.
                  </p>
                  <p>
                    Ma la minaccia è eliminata per sempre. La foresta è libera, anche se più fragile.
                  </p>
                  <p className="italic text-red-200 mt-3">
                    "La foresta non sarà più la stessa. Ma almeno sarà libera."
                  </p>
                </div>
              </div>

              <div className="bg-emerald-900/20 p-6 rounded-xl border-l-4 border-emerald-500">
                <p className="font-bold text-emerald-300 mb-3 text-lg">Se hanno PURIFICATO il Cuore:</p>
                <div className="space-y-3 text-slate-300">
                  <p>
                    Eldric muore, ma il Cuore torna al suo stato originale. La foresta riacquista tutta la sua magia e guarisce rapidamente.
                  </p>
                  <p>
                    I giocatori vengono ricordati come eroi che hanno salvato la foresta, ma devono fare i conti con la perdita di Eldric.
                  </p>
                  <p className="italic text-emerald-200 mt-3">
                    "Eldric ha dato la sua vita per la foresta. La foresta lo ricorderà per sempre."
                  </p>
                </div>
              </div>

              <div className="bg-purple-900/20 p-6 rounded-xl border-l-4 border-purple-500">
                <p className="font-bold text-purple-300 mb-3 text-lg">Se hanno SIGILLATO il Cuore:</p>
                <div className="space-y-3 text-slate-300">
                  <p>
                    Il Cuore viene sigillato, la grotta è chiusa. La foresta guarisce, ma il Cuore rimane una minaccia potenziale.
                  </p>
                  <p>
                    Eldric sopravvive, ma è esausto. I giocatori sanno che la minaccia tornerà tra secoli, ma hanno tempo per prepararsi.
                  </p>
                  <p className="italic text-purple-200 mt-3">
                    "La minaccia è sigillata. Ma non dimenticate: tornerà. Siate pronti."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Il ritorno a Tuonceppo */}
          <div className="mt-10 pt-6 border-t-2 border-slate-700">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">🏘️</span>
              <h4 className="text-xl font-bold text-amber-400 uppercase tracking-tighter">
                Il ritorno a Tuonceppo
              </h4>
            </div>
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                Quando i giocatori tornano a Tuonceppo, vengono accolti come eroi.
              </p>
              <div className="bg-amber-900/20 p-6 rounded-xl border-l-4 border-amber-500 mt-4">
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 mt-1">•</span>
                    <span>la città organizza una festa in loro onore</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 mt-1">•</span>
                    <span>ricevono ricompense dai mercanti e dagli abitanti</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 mt-1">•</span>
                    <span>vengono riconosciuti come salvatori della Selvarotta</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 mt-1">•</span>
                    <span>le carovane possono finalmente viaggiare in sicurezza</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Messaggio finale */}
          <div className="mt-10 pt-6 border-t-2 border-slate-700">
            <div className="bg-slate-800/50 p-8 rounded-xl text-center">
              <p className="text-slate-300 text-xl font-serif italic leading-relaxed">
                "E Selvarotta... li ricorderà."
              </p>
              <p className="text-slate-400 text-sm mt-4">
                La foresta non dimentica. Gli eroi che hanno salvato il Cuore di Spora saranno ricordati per sempre.
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
