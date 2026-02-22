/**
 * Componente GrottaCuoreModal
 * 
 * Modal per visualizzare informazioni sulla Grotta del Cuore nella S3.
 * 
 * @param {boolean} isOpen - Stato di apertura/chiusura del modal
 * @param {() => void} onClose - Callback per chiudere il modal
 * @returns {JSX.Element | null} Il modal se aperto, null altrimenti
 */
import React, { useState } from 'react';
import grottaCuore from '../assets/La sala del cuore.png';

interface GrottaCuoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GrottaCuoreModal: React.FC<GrottaCuoreModalProps> = ({ isOpen, onClose }) => {
  const [isImageOpen, setIsImageOpen] = useState<boolean>(false);
  
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
            <span className="text-3xl">💚</span>
            <h2 className="text-3xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-400">
              La Grotta del Cuore
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
              <span className="text-3xl">🍄</span>
              <h3 className="text-2xl font-bold uppercase tracking-tighter text-emerald-400">
                LA GROTTA DEL CUORE
              </h3>
            </div>
            <p className="text-slate-400 italic text-sm">
              (Il nucleo del Cuore di Spora)
            </p>
          </div>

          {/* Immagine zoomabile */}
          <div className="mb-8">
            <div 
              className="group relative cursor-zoom-in overflow-hidden rounded-xl bg-slate-800 border border-slate-700 hover:border-emerald-500 transition-all duration-300 shadow-lg"
              onClick={() => setIsImageOpen(true)}
            >
              <img 
                src={grottaCuore} 
                alt="La grotta del cuore" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white bg-emerald-600/80 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">Ingrandisci</span>
              </div>
              <div className="p-3 text-sm text-slate-300 bg-slate-900/80 italic text-center border-t border-slate-800">
                La grotta del cuore
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
                  src={grottaCuore} 
                  alt="La grotta del cuore" 
                  className="max-h-full max-w-full object-contain shadow-2xl rounded-lg animate-in zoom-in-95 duration-300"
                />
              </div>
            </div>
          )}

          {/* Il Cuore di Spora */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">💚</span>
              <h4 className="text-xl font-bold text-emerald-400 uppercase tracking-tighter">
                Il Cuore di Spora (come appare davvero)
              </h4>
            </div>

            <div className="space-y-4 text-slate-300 text-lg leading-relaxed font-serif">
              <p>
                Il Cuore non è un cristallo, non è una sfera perfetta.
              </p>

              <p>
                È una massa viva grande quanto un carro, fatta di:
              </p>

              <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-emerald-500/40 ml-4">
                <ul className="space-y-2 text-slate-200">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span>radici spesse intrecciate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span>funghi sovrapposti come scaglie</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span>membrane lucide che tremano come pelle bagnata</span>
                  </li>
                </ul>
              </div>

              <p>
                Non emette luce forte.<br/>
                Emette un bagliore basso, pallido, come una brace sotto la cenere.
              </p>

              <p className="font-semibold text-emerald-300 mb-2">Quando pulsa:</p>
              <div className="bg-emerald-900/20 p-6 rounded-xl border-l-4 border-emerald-500/40 ml-4">
                <ul className="space-y-2 text-slate-200">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span>l'aria si muove</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span>le spore nell'aria cambiano direzione</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span>si sente un suono profondo, come un tamburo lontano</span>
                  </li>
                </ul>
              </div>

              <p>
                Il Cuore non comunica con parole.<br/>
                Comunica con sensazioni:
              </p>

              <div className="bg-purple-900/20 p-6 rounded-xl border-l-4 border-purple-500/40 ml-4">
                <ul className="space-y-2 text-slate-200">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span>nausea improvvisa</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span>ricordi che non sono vostri</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span>tristezza senza motivo</span>
                  </li>
                </ul>
              </div>

              <p className="mt-6 font-semibold text-red-300 italic text-center bg-slate-800/30 p-4 rounded-xl">
                È un cuore che vuole fare il suo lavoro.<br/>
                Ma non riesce.
              </p>
            </div>
          </div>

          {/* Morghul */}
          <div className="mt-10 pt-6 border-t-2 border-slate-700">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">🌑</span>
              <h4 className="text-xl font-bold text-purple-400 uppercase tracking-tighter">
                Morghul (il Custode Decomposto)
              </h4>
            </div>

            <div className="space-y-4 text-slate-300 text-lg leading-relaxed font-serif">
              <p>
                Morghul non è "un uomo in piedi".
              </p>

              <p>
                È… ciò che resta di un uomo che non ha più confini.
              </p>

              <p>
                Lo vedete vicino al Cuore, ma non separato da esso.
              </p>

              <p className="font-semibold text-purple-300 mb-2">Il suo corpo è mezzo formato e mezzo incompleto:</p>
              <div className="bg-purple-900/20 p-6 rounded-xl border-l-4 border-purple-500/40 ml-4">
                <ul className="space-y-2 text-slate-200">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span>un busto elfico sottile, coperto da radici che entrano nella pelle</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span>un braccio vero e uno fatto di legno e funghi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span>il volto è ancora riconoscibile… ma sembra scolpito nella corteccia, come una maschera viva</span>
                  </li>
                </ul>
              </div>

              <p className="mt-4">
                Gli occhi sono la cosa peggiore:<br/>
                non sono vuoti.<br/>
                Sono pieni di qualcosa che vi guarda come se vi conoscesse già.
              </p>

              <p>
                Morghul non respira.<br/>
                Ma il Cuore respira per lui.
              </p>

              <p>
                Quando parla (se parla), non muove davvero la bocca:<br/>
                le parole arrivano come se fossero sussurrate direttamente nella testa.
              </p>

              <p className="mt-6 font-semibold text-red-300 italic">
                E la cosa più inquietante è questa:
              </p>

              <p className="font-semibold text-red-300 italic">
                Morghul non sembra arrabbiato.
              </p>

              <p className="font-semibold text-red-300 italic">
                Sembra… convinto.
              </p>

              <p className="mt-4">
                Convinto che quello che sta facendo sia giusto.
              </p>

              <p className="font-semibold text-red-300 italic">
                Che fermare tutto sia l'unico modo per "salvare" la foresta.
              </p>
            </div>
          </div>

          {/* Frasi d'impatto */}
          <div className="mt-10 pt-6 border-t-2 border-slate-700">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">🎭</span>
              <h4 className="text-xl font-bold text-amber-400 uppercase tracking-tighter">
                Frasi d'impatto (se vuoi farlo parlare)
              </h4>
            </div>

            <div className="space-y-4 text-slate-300 text-lg leading-relaxed font-serif">
              <p className="mb-4">
                Quando vi vede, può dire:
              </p>

              <div className="bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500/40 ml-4">
                <p className="font-semibold text-red-300 mb-2 italic">
                  «Non dovreste essere qui.<br/>
                  Qui si decide cosa resta.<br/>
                  E cosa marcisce.»
                </p>
              </div>

              <p className="mt-6">
                Oppure, più triste:
              </p>

              <div className="bg-purple-900/20 p-6 rounded-xl border-l-4 border-purple-500/40 ml-4">
                <p className="font-semibold text-purple-300 mb-2 italic">
                  «Ho dato tutto per non farla morire.<br/>
                  E voi… siete venuti a farla cambiare.»
                </p>
              </div>
            </div>
          </div>

          {/* La struttura della grotta */}
          <div className="mt-10 pt-6 border-t-2 border-slate-700">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">🏛️</span>
              <h4 className="text-xl font-bold text-emerald-400 uppercase tracking-tighter">
                La struttura della grotta
              </h4>
            </div>
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                La grotta è divisa in tre livelli concentrici:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="bg-slate-800/50 p-4 rounded-xl">
                  <p className="font-bold text-purple-300 mb-2">Livello Esterno</p>
                  <p className="text-sm text-slate-400">Funghi e radici corrotte. Nemici minori.</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl">
                  <p className="font-bold text-red-300 mb-2">Livello Medio</p>
                  <p className="text-sm text-slate-400">Difese del Cuore. Trappole e guardiani.</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl">
                  <p className="font-bold text-emerald-300 mb-2">Livello Interno</p>
                  <p className="text-sm text-slate-400">Il Cuore stesso. Morghul.</p>
                </div>
              </div>
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
