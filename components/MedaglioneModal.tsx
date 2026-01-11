/**
 * Componente MedaglioneModal
 * 
 * Modal per visualizzare l'analisi del medaglione nella S2.
 * 
 * @param {boolean} isOpen - Stato di apertura/chiusura del modal
 * @param {() => void} onClose - Callback per chiudere il modal
 * @returns {JSX.Element | null} Il modal se aperto, null altrimenti
 */
import React, { useState } from 'react';
import amuletoDruidico from '../assets/Amuleto druidico.png';

interface MedaglioneModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MedaglioneModal: React.FC<MedaglioneModalProps> = ({ isOpen, onClose }) => {
  const [isImageOpen, setIsImageOpen] = useState(false);

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
            <span className="text-3xl">🔍</span>
            <h2 className="text-3xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
              Analisi del Medaglione
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
                AMULETO DRUIDICO DEL RESPIRO VERDE
              </h3>
            </div>
            <p className="text-slate-400 italic text-sm">
              (oggetto non magico → raro narrativo → magico leggero)
            </p>
          </div>

          {/* Immagine zoomabile */}
          <div className="mb-8">
            <div 
              className="group relative cursor-zoom-in overflow-hidden rounded-xl bg-slate-800 border border-slate-700 hover:border-emerald-500 transition-all duration-300 shadow-lg"
              onClick={() => setIsImageOpen(true)}
            >
              <img 
                src={amuletoDruidico} 
                alt="Amuleto Druidico del Respiro Verde" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white bg-emerald-600/80 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">Ingrandisci</span>
              </div>
            </div>
          </div>

          {/* Modal immagine */}
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
                  src={amuletoDruidico} 
                  alt="Amuleto Druidico del Respiro Verde" 
                  className="max-h-full max-w-full object-contain shadow-2xl rounded-lg animate-in zoom-in-95 duration-300"
                />
              </div>
            </div>
          )}

          {/* Descrizione iniziale */}
          <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-emerald-500 mb-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              L'amuleto, una volta riparato (con rituale, artigiano o Eldric), non diventa subito potente.<br/>
              Riconosce prima le intenzioni di chi lo porta.
            </p>
          </div>

          {/* Benefici */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">🌱</span>
              <h4 className="text-xl font-bold text-emerald-400 uppercase tracking-tighter">
                BENEFICI (BASE – SUBITO DOPO LA RIPARAZIONE)
              </h4>
            </div>
            <p className="text-slate-400 text-sm italic mb-4">
              (Ideale per livelli 2–3)
            </p>

            <div className="bg-emerald-900/20 p-6 rounded-xl border border-emerald-500/20 space-y-6">
              <div>
                <p className="text-emerald-300 font-bold mb-3 flex items-center">
                  <span className="text-2xl mr-2">📿</span>
                  Oggetto Meraviglioso, comune (richiede sintonia)
                </p>
                
                <div className="ml-6 space-y-4">
                  <div className="bg-slate-800/50 p-4 rounded-xl">
                    <p className="font-semibold text-emerald-300 mb-2">Focus Naturale</p>
                    <p className="text-slate-300 text-sm">
                      Può essere usato come focus per incantesimi basati su natura o vita.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 p-4 rounded-xl">
                    <p className="font-semibold text-emerald-300 mb-2">Respiro della Terra</p>
                    <p className="text-slate-300 text-sm mb-2">
                      1 volta al giorno, come azione bonus, il portatore ottiene:
                    </p>
                    <ul className="space-y-1 ml-4">
                      <li className="flex items-start">
                        <span className="text-emerald-400 mr-2 mt-1">•</span>
                        <span className="text-slate-300 text-sm">vantaggio al prossimo tiro salvezza su Costituzione oppure</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-400 mr-2 mt-1">•</span>
                        <span className="text-slate-300 text-sm">resistenza ai danni da veleno fino all'inizio del suo prossimo turno</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-800/50 p-4 rounded-xl">
                    <p className="font-semibold text-emerald-300 mb-2">Sussurri del Bosco (passivo)</p>
                    <p className="text-slate-300 text-sm mb-2">
                      Il portatore ha vantaggio alle prove di Natura per identificare:
                    </p>
                    <ul className="space-y-1 ml-4">
                      <li className="flex items-start">
                        <span className="text-emerald-400 mr-2 mt-1">•</span>
                        <span className="text-slate-300 text-sm">piante</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-400 mr-2 mt-1">•</span>
                        <span className="text-slate-300 text-sm">funghi</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-400 mr-2 mt-1">•</span>
                        <span className="text-slate-300 text-sm">veleni naturali</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
