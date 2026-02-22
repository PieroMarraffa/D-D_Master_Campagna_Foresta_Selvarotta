/**
 * Componente SconfittaMorghulModal
 * 
 * Modal per visualizzare informazioni sulla sconfitta di Morghul nella S3.
 * 
 * @param {boolean} isOpen - Stato di apertura/chiusura del modal
 * @param {() => void} onClose - Callback per chiudere il modal
 * @returns {JSX.Element | null} Il modal se aperto, null altrimenti
 */
import React from 'react';

interface SconfittaMorghulModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SconfittaMorghulModal: React.FC<SconfittaMorghulModalProps> = ({ isOpen, onClose }) => {
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
            <span className="text-3xl">⚔️</span>
            <h2 className="text-3xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400">
              La Sconfitta di Morghul
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
              <span className="text-3xl">💀</span>
              <h3 className="text-2xl font-bold uppercase tracking-tighter text-red-400">
                LA SCONFITTA DI MORGHUL
              </h3>
            </div>
            <p className="text-slate-400 italic text-sm">
              (Il momento della liberazione)
            </p>
          </div>

          {/* La sconfitta */}
          <div className="space-y-6">
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed font-serif">
              <p className="font-semibold text-red-300 text-xl mb-4">
                DOPO LA SCONFITTA DI MORGHUL
              </p>

              <p>
                Morghul cade in ginocchio.
              </p>

              <p>
                Non crolla come un mostro.<br/>
                Crolla come un uomo stanco.
              </p>

              <p>
                Le radici che lo tenevano in piedi si allentano.<br/>
                I funghi sul suo corpo impallidiscono.<br/>
                La sua voce non è più un sussurro nella testa: è un fiato reale.
              </p>

              <p>
                Per un istante, Morghul vi guarda con occhi quasi lucidi.
              </p>

              <div className="bg-purple-900/20 p-6 rounded-xl border-l-4 border-purple-500/40 ml-4 mt-4">
                <p className="font-semibold text-purple-300 italic">
                  «…non volevo… perderla…»
                </p>
              </div>

              <p className="mt-6">
                Poi il suo corpo si sbriciola in:
              </p>

              <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-red-500/40 ml-4">
                <ul className="space-y-2 text-slate-200">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span>corteccia secca</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span>spore leggere</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span>un ultimo frammento di maschera lignea</span>
                  </li>
                </ul>
              </div>

              <p className="mt-6">
                E nel momento esatto in cui Morghul "sparisce"…<br/>
                la grotta respira.
              </p>

              <p className="font-semibold text-red-300 text-2xl text-center my-6">
                Un battito enorme.
              </p>

              <p className="font-semibold text-red-400 text-3xl text-center mb-6">
                BUM.
              </p>

              <p>
                Le spore nell'aria cambiano direzione.<br/>
                Le radici sulle pareti si tendono come corde.<br/>
                Il Cuore di Spora, libero dalla volontà di Morghul, si risveglia davvero.
              </p>

              <p className="mt-6 font-semibold text-purple-300 italic text-center bg-slate-800/30 p-4 rounded-xl">
                E adesso non c'è più un nemico.
              </p>

              <p className="font-semibold text-red-300 text-xl italic text-center bg-red-900/20 p-4 rounded-xl">
                C'è una forza.
              </p>
            </div>
          </div>

          {/* Le conseguenze */}
          <div className="mt-10 pt-6 border-t-2 border-slate-700">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">🌿</span>
              <h4 className="text-xl font-bold text-emerald-400 uppercase tracking-tighter">
                Le conseguenze
              </h4>
            </div>
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                La sconfitta di Morghul ha conseguenze immediate:
              </p>
              <div className="bg-emerald-900/20 p-6 rounded-xl border-l-4 border-emerald-500 mt-4">
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span>i funghi nella grotta iniziano a appassire</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span>le radici corrotte si ritraggono</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span>l'aria diventa più leggera, più respirabile</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span>ma il Cuore stesso è ancora instabile</span>
                  </li>
                </ul>
              </div>
              <p className="mt-4">
                È chiaro che qualcosa deve essere fatto. E deve essere fatto ora.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-slate-900/95 backdrop-blur-sm border-t border-slate-700 px-8 py-4 rounded-b-3xl">
          <button
            onClick={onClose}
            className="w-full py-3 bg-red-600 hover:bg-red-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-red-900/40"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  );
};
