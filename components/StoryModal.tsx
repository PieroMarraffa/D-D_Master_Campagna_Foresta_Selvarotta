/**
 * Componente StoryModal
 * 
 * Modal per visualizzare la storia completa del Cuore di Spora.
 * Mostra informazioni dettagliate in un popup elegante con animazioni.
 * 
 * @param {boolean} isOpen - Stato di apertura/chiusura del modal
 * @param {() => void} onClose - Callback per chiudere il modal
 * @returns {JSX.Element | null} Il modal se aperto, null altrimenti
 */
import React from 'react';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose }) => {
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
            <span className="text-3xl">🍄</span>
            <h2 className="text-3xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">
              Storia Completa del Cuore di Spora
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
          {/* SEZIONE 1: Cos'era il Cuore di Spora */}
          <div className="bg-emerald-900/10 p-8 rounded-2xl border border-emerald-500/20">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl">🌱</span>
              <h3 className="text-2xl font-bold text-emerald-400 uppercase tracking-tighter">
                Cos'era il Cuore di Spora
              </h3>
            </div>
            
            <div className="space-y-6 text-slate-300">
              <p className="text-lg leading-relaxed font-serif italic border-l-4 border-emerald-500/40 pl-6 py-2">
                Immagina la foresta come un grande giardino.
              </p>
              
              <div className="bg-slate-800/50 p-6 rounded-xl">
                <p className="mb-4 text-base leading-relaxed">
                  Nel giardino, quando qualcosa muore (una foglia, un animale, un albero):
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span>cade a terra</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span>col tempo marcisce</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span>e diventa terra buona per nuove piante</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/80 p-6 rounded-xl border-l-4 border-purple-500">
                <p className="text-lg font-semibold text-purple-300 mb-3">
                  Il Cuore di Spora era il "cuore del giardino".
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-slate-400">Non era una persona.</p>
                  <p className="text-slate-400">Non era un mostro.</p>
                  <p className="text-emerald-300 font-medium mt-3">
                    Era come una grossa radice viva, piena di funghi, che faceva una cosa sola:
                  </p>
                </div>
                <p className="text-xl font-bold text-emerald-400 mt-4 text-center italic">
                  "Aiutava le cose morte a tornare velocemente terra buona."
                </p>
                <p className="text-center text-slate-500 mt-2 text-sm">Tutto qui.</p>
              </div>
            </div>
          </div>

          {/* SEZIONE 2: Cosa faceva in pratica */}
          <div className="bg-purple-900/10 p-8 rounded-2xl border border-purple-500/20">
            <h3 className="text-2xl font-bold text-purple-400 mb-6 uppercase tracking-tighter">
              Cosa faceva, in pratica
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start bg-slate-800/50 p-4 rounded-xl">
                <span className="text-purple-400 mr-4 mt-1 text-xl">•</span>
                <div>
                  <span className="font-semibold text-slate-200">Un animale morto</span>
                  <span className="text-slate-400 mx-2">→</span>
                  <span className="text-slate-300">spariva in pochi giorni</span>
                </div>
              </li>
              <li className="flex items-start bg-slate-800/50 p-4 rounded-xl">
                <span className="text-purple-400 mr-4 mt-1 text-xl">•</span>
                <span className="text-slate-300">Le piante crescevano più forti</span>
              </li>
              <li className="flex items-start bg-slate-800/50 p-4 rounded-xl">
                <span className="text-purple-400 mr-4 mt-1 text-xl">•</span>
                <span className="text-slate-300">Il terreno era sempre ricco</span>
              </li>
            </ul>
            <p className="mt-6 text-slate-300 italic text-center bg-slate-800/30 p-4 rounded-xl">
              La foresta non puzzava, non era marcia.<br/>
              <span className="font-semibold text-emerald-400">Era molto viva.</span>
            </p>
          </div>

          {/* SEZIONE 3: Perché i druidi lo usavano */}
          <div className="bg-amber-900/10 p-8 rounded-2xl border border-amber-500/20">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl">🌿</span>
              <h3 className="text-2xl font-bold text-amber-400 uppercase tracking-tighter">
                Perché i Druidi lo Usavano
              </h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-slate-800/50 p-6 rounded-xl">
                <p className="text-base text-slate-300 mb-4">
                  Quando sono arrivate le carovane:
                </p>
                <ul className="space-y-2 ml-4 mb-4">
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300">uomini che camminavano</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300">carri che rompevano il terreno</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300">alberi tagliati</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500">
                <p className="text-base text-slate-300 mb-4">
                  La foresta si arrabbiava:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300">sentieri che cambiavano</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300">animali che attaccavano</span>
                  </li>
                </ul>
              </div>

              <div className="bg-emerald-900/20 p-6 rounded-xl border-l-4 border-emerald-500">
                <p className="text-slate-300 mb-4">
                  I druidi volevano proteggere <span className="font-semibold text-emerald-400">la foresta E le persone</span>.
                </p>
                <p className="text-lg font-serif italic text-center text-emerald-300 bg-slate-900/50 p-4 rounded-lg">
                  "Usiamo il Cuore per tenere calmi questi sentieri."
                </p>
              </div>
            </div>
          </div>

          {/* SEZIONE 4: Cosa hanno fatto (errore semplice) */}
          <div className="bg-red-900/10 p-8 rounded-2xl border border-red-500/20">
            <h3 className="text-2xl font-bold text-red-400 mb-6 uppercase tracking-tighter">
              Cosa hanno fatto (errore semplice)
            </h3>
            
            <div className="space-y-6">
              <div className="bg-slate-800/50 p-6 rounded-xl">
                <p className="text-base text-slate-300 mb-4">
                  Il Cuore lavorava dappertutto nella foresta.<br/>
                  I druidi invece volevano che lavorasse solo in certi posti.
                </p>
              </div>

              <div className="bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500">
                <p className="text-base text-slate-300 mb-4">Quindi:</p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300">lo hanno legato</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300">lo hanno costretto</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300">gli hanno detto dove poteva agire e dove no</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/80 p-6 rounded-xl border border-amber-500/40">
                <p className="text-lg font-serif italic text-center text-amber-300 mb-2">
                  Come dire a un fiume:
                </p>
                <p className="text-xl font-bold text-center text-red-400">
                  "Scorri solo qui. Mai più da un'altra parte."
                </p>
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
