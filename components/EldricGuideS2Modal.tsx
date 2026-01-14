/**
 * Componente EldricGuideS2Modal
 * 
 * Modal per visualizzare la guida di Eldric per la S2.
 * 
 * @param {boolean} isOpen - Stato di apertura/chiusura del modal
 * @param {() => void} onClose - Callback per chiudere il modal
 * @returns {JSX.Element | null} Il modal se aperto, null altrimenti
 */
import React from 'react';

interface EldricGuideS2ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EldricGuideS2Modal: React.FC<EldricGuideS2ModalProps> = ({ isOpen, onClose }) => {
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
            <span className="text-3xl">🧙‍♂️</span>
            <h2 className="text-3xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-400">
              La Guida di Eldric (S2)
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
          {/* IL DISCORSO DI ELDRIC */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-emerald-400 flex items-center gap-2">
              <span>🍃</span>
              <span>IL DISCORSO DI ELDRIC</span>
            </h3>

            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «Quelle parole…»
              </p>
              <p className="text-slate-400 italic pl-6">dice piano,</p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «non servivano a spiegare.»
              </p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «Servivano a ricordare.»
              </p>
              <p className="text-slate-400 italic pl-6">Fa un passo verso di voi.</p>
            </div>

            <div className="my-6 text-center text-slate-600">⸻</div>

            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «La radura dei funghi non era un tempio.»
              </p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «Era un punto di passaggio.»
              </p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «Il Cuore non viveva lì.»
              </p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «Lì… respirava.»
              </p>
            </div>

            <div className="my-6 text-center text-slate-600">⸻</div>

            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p className="text-slate-400 italic pl-6">Eldric disegna un cerchio nell'aria con la mano.</p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «Quando il Cuore era stanco,<br/>
                quando la foresta aveva troppo da digerire,<br/>
                noi venivamo lì.»
              </p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «Non per comandare.»
              </p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «Per sentire se stava ancora con noi.»
              </p>
            </div>

            <div className="my-6 text-center text-slate-600">⸻</div>

            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p className="text-slate-400 italic pl-6">Si interrompe.<br/>Poi continua.</p>
            </div>

            <div className="my-6 text-center text-slate-600">⸻</div>

            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «Le parole parlano di radici che non spezzano la pietra.»
              </p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «Di un cerchio aperto al cielo.»
              </p>
              <p className="text-slate-400 italic pl-6">Un sorriso amaro.</p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «Parlano del tempio.»
              </p>
            </div>
          </div>

          {/* PERCHÉ NON VE LO HA DETTO SUBITO */}
          <div className="space-y-6 pt-6 border-t border-slate-700">
            <h3 className="text-2xl font-bold text-emerald-400 flex items-center gap-2">
              <span>🏛️</span>
              <span>PERCHÉ NON VE LO HA DETTO SUBITO</span>
            </h3>

            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p className="text-slate-400 italic pl-6">Eldric abbassa lo sguardo.</p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «Non vi ho mandato subito lì perché…<br/>
                quel posto non è solo pietra.»
              </p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «È memoria.»
              </p>
              <p className="text-slate-400 italic pl-6">Vi guarda, uno per uno.</p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «Chi entra nel tempio senza aver visto prima<br/>
                cosa è diventato il respiro del Cuore…»
              </p>
              <p className="text-slate-400 italic pl-6">Scuote la testa.</p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «…non capisce.»
              </p>
            </div>

            <div className="my-6 text-center text-slate-600">⸻</div>

            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «Dovevate prima vedere la putrefazione.»
              </p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «Dovevate capire che non è un'invasione.»
              </p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «È qualcosa che cerca di tornare a casa.»
              </p>
            </div>
          </div>

          {/* COSA C'ERA DAVVERO NEL TEMPIO */}
          <div className="space-y-6 pt-6 border-t border-slate-700">
            <h3 className="text-2xl font-bold text-emerald-400 flex items-center gap-2">
              <span>🌱</span>
              <span>COSA C'ERA DAVVERO NEL TEMPIO</span>
            </h3>

            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p className="text-slate-400 italic pl-6">La voce di Eldric si fa più bassa.</p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «Il tempio era il luogo dove parlavamo col Cuore.»
              </p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «Non dove viveva.»
              </p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «Il Cuore non aveva bisogno di un tetto.»
              </p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «Aveva bisogno di mani.»
              </p>
            </div>

            <div className="my-6 text-center text-slate-600">⸻</div>

            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p className="text-slate-400 italic pl-6">Indica il centro immaginario di una stanza.</p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «C'era un altare.»
              </p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «Semplice.»
              </p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «Liscio.»
              </p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «Lo toccavamo.»
              </p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «E lui rispondeva.»
              </p>
            </div>
          </div>

          {/* COSA POTREBBERO TROVARE ORA */}
          <div className="space-y-6 pt-6 border-t border-slate-700">
            <h3 className="text-2xl font-bold text-emerald-400 flex items-center gap-2">
              <span>🌑</span>
              <span>COSA POTREBBERO TROVARE ORA</span>
            </h3>

            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p className="text-slate-400 italic pl-6">Eldric esita.</p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «Non so cosa troverete.»
              </p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «Forse solo silenzio.»
              </p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «Forse spiriti che non vogliono più ricordare.»
              </p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «Forse un guardiano che non sa più cosa protegge.»
              </p>
              <p className="text-slate-400 italic pl-6">Poi aggiunge, quasi sottovoce:</p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «O forse…<br/>
                il Cuore si è avvicinato.»
              </p>
            </div>

            <div className="my-6 text-center text-slate-600">⸻</div>

            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p className="text-slate-400 italic pl-6">Vi guarda con serietà.</p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «Se il Cuore non riesce più a respirare nel sottosuolo…»<br/>
                «se il sigillo sta cedendo…»
              </p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «Potrebbe aver cercato l'unico posto<br/>
                dove qualcuno lo ascoltava.»
              </p>
            </div>
          </div>

          {/* IL CUORE È NEL TEMPIO? */}
          <div className="space-y-6 pt-6 border-t border-slate-700">
            <h3 className="text-2xl font-bold text-emerald-400 flex items-center gap-2">
              <span>❤️</span>
              <span>IL CUORE È NEL TEMPIO?</span>
            </h3>

            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p className="text-slate-400 italic pl-6">Eldric non dà una risposta certa.</p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «Non doveva esserci.»
              </p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «Ma non doveva neanche soffrire.»
              </p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «Se il Cuore è lì…»
              </p>
              <p className="text-slate-400 italic pl-6">fa una pausa,</p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «non sarà come lo ricordavamo.»
              </p>
            </div>
          </div>

          {/* L'ULTIMO CONSIGLIO */}
          <div className="space-y-6 pt-6 border-t border-slate-700">
            <h3 className="text-2xl font-bold text-emerald-400 flex items-center gap-2">
              <span>✋</span>
              <span>L'ULTIMO CONSIGLIO</span>
            </h3>

            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p className="text-slate-400 italic pl-6">Eldric si avvicina al fuoco.</p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «Quando entrerete nel tempio,<br/>
                non preparate armi.»
              </p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «Preparate mani e occhi.»
              </p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «E se troverete l'altare…»
              </p>
              <p className="text-slate-400 italic pl-6">alza lentamente la mano e la posa a terra,</p>
              <p className="font-serif italic text-emerald-300 text-xl border-l-4 border-emerald-500/40 pl-6 py-2">
                «…toccatelo.»
              </p>
            </div>
          </div>
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
