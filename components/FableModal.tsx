/**
 * Componente FableModal
 * 
 * Modal per visualizzare la favola completa del Cuore di Spora.
 * Stilizzato come una vecchia pergamena con design antico e elegante.
 * 
 * @param {boolean} isOpen - Stato di apertura/chiusura del modal
 * @param {() => void} onClose - Callback per chiudere il modal
 * @returns {JSX.Element | null} Il modal se aperto, null altrimenti
 */
import React from 'react';

interface FableModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FableModal: React.FC<FableModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm transition-all animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-amber-50 rounded-3xl border-8 border-amber-800 shadow-2xl animate-in zoom-in-95 duration-300"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(139, 69, 19, 0.1) 0%, transparent 50%, rgba(139, 69, 19, 0.1) 100%),
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 69, 19, 0.03) 2px, rgba(139, 69, 19, 0.03) 4px)
          `,
          boxShadow: 'inset 0 0 50px rgba(139, 69, 19, 0.2), 0 20px 60px rgba(0, 0, 0, 0.5)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header con stile pergamena */}
        <div className="sticky top-0 bg-amber-50/95 backdrop-blur-sm border-b-4 border-amber-800 px-8 py-6 flex items-center justify-between rounded-t-3xl z-10">
          <div className="flex items-center space-x-4">
            <span className="text-3xl">📜</span>
            <h2 className="text-3xl font-bold tracking-tighter text-amber-900" style={{ fontFamily: 'serif' }}>
              La Favola del Cuore che Voleva Aiutare
            </h2>
          </div>
          <button 
            className="text-amber-800 hover:text-amber-950 transition-colors p-2 bg-amber-100/80 hover:bg-amber-200 rounded-full border-2 border-amber-800"
            onClick={onClose}
            aria-label="Chiudi"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content - Stile pergamena */}
        <div className="p-8 space-y-8 text-amber-900" style={{ fontFamily: 'serif' }}>
          
          {/* Introduzione */}
          <div className="text-center mb-8">
            <span className="text-4xl mb-4 block">🌲</span>
            <h3 className="text-2xl font-bold mb-6 text-amber-950">La favola del Cuore che voleva aiutare</h3>
          </div>

          <div className="space-y-6 text-lg leading-relaxed">
            <p className="italic text-amber-800">
              «Tanto tempo fa,» dice Eldric,<br/>
              «questa foresta era come un bambino che cresce in fretta.»
            </p>

            <p>
              «Quando qualcosa cadeva e moriva, non restava lì a lungo.<br/>
              La terra lo prendeva, lo stringeva, e subito faceva nascere qualcosa di nuovo.»
            </p>

            <p>
              Eldric disegna un cerchio nella terra con un dito.
            </p>

            <p className="italic text-amber-800">
              «In mezzo alla foresta batteva un cuore.<br/>
              Non un cuore come il nostro…<br/>
              ma un cuore fatto di radici e funghi.»
            </p>
          </div>

          {/* Sezione: Il cuore buono */}
          <div className="mt-10 pt-6 border-t-2 border-amber-700">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl">🌱</span>
              <h4 className="text-xl font-bold text-amber-950">Il cuore buono</h4>
            </div>
            <div className="space-y-4 text-lg leading-relaxed">
              <p className="italic text-amber-800">
                «Quel cuore aveva un solo lavoro:<br/>
                aiutare le cose stanche a riposare<br/>
                e trasformarle in forza per quelle nuove.»
              </p>

              <p className="italic text-amber-800">
                «Non faceva male.<br/>
                Non puzzava.<br/>
                Faceva crescere.»
              </p>

              <p>Eldric sorride appena.</p>
            </div>
          </div>

          {/* Sezione: Gli uomini e le strade */}
          <div className="mt-10 pt-6 border-t-2 border-amber-700">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl">🚶‍♂️</span>
              <h4 className="text-xl font-bold text-amber-950">Gli uomini e le strade</h4>
            </div>
            <div className="space-y-4 text-lg leading-relaxed">
              <p className="italic text-amber-800">
                «Poi arrivarono gli uomini con i carri.<br/>
                Volevano attraversare il bosco senza perdersi.»
              </p>

              <p className="italic text-amber-800">
                «La foresta non capiva.<br/>
                Si spostava.<br/>
                Si chiudeva.»
              </p>

              <p className="italic text-amber-800">
                «Allora alcuni di noi dissero:<br/>
                "Chiediamo al cuore di tenere fermi i sentieri."»
              </p>

              <p>Eldric stringe il bastone.</p>
            </div>
          </div>

          {/* Sezione: Il cuore legato */}
          <div className="mt-10 pt-6 border-t-2 border-amber-700">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl">🪢</span>
              <h4 className="text-xl font-bold text-amber-950">Il cuore legato</h4>
            </div>
            <div className="space-y-4 text-lg leading-relaxed">
              <p className="italic text-amber-800">
                «Ma un cuore non nasce per stare fermo.»
              </p>

              <p className="italic text-amber-800">
                «Noi lo legammo.<br/>
                Gli dicemmo dove poteva lavorare e dove no.»
              </p>

              <p className="italic text-amber-800">
                «E il cuore obbedì…<br/>
                ma smise di respirare bene.»
              </p>
            </div>
          </div>

          {/* Sezione: Morghul */}
          <div className="mt-10 pt-6 border-t-2 border-amber-700">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl">🌙</span>
              <h4 className="text-xl font-bold text-amber-950">Morghul</h4>
            </div>
            <div className="space-y-4 text-lg leading-relaxed">
              <p className="italic text-amber-800">
                «Tra noi c'era un elfo di nome Morghul.<br/>
                Amava la foresta più di tutti.»
              </p>

              <p className="italic text-amber-800">
                «Vide il cuore faticare.<br/>
                Sentì il bosco diventare rigido.»
              </p>

              <p className="italic text-amber-800">
                «E pensò una cosa sbagliata…<br/>
                ma piena d'amore.»
              </p>

              <p>Eldric chiude gli occhi.</p>
            </div>
          </div>

          {/* Sezione: L'errore */}
          <div className="mt-10 pt-6 border-t-2 border-amber-700">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl">🕳️</span>
              <h4 className="text-xl font-bold text-amber-950">L'errore</h4>
            </div>
            <div className="space-y-4 text-lg leading-relaxed">
              <p className="italic text-amber-800">
                «Morghul cercò di entrare nel cuore<br/>
                per aiutarlo a battere.»
              </p>

              <p className="italic text-amber-800">
                «Ma un cuore non può tenere un uomo dentro.»
              </p>

              <p className="italic text-amber-800">
                «Morghul morì…<br/>
                ma non se ne andò.»
              </p>

              <p>Il fuoco scoppietta.</p>
            </div>
          </div>

          {/* Sezione: Il coperchio */}
          <div className="mt-10 pt-6 border-t-2 border-amber-700">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl">🔒</span>
              <h4 className="text-xl font-bold text-amber-950">Il coperchio</h4>
            </div>
            <div className="space-y-4 text-lg leading-relaxed">
              <p className="italic text-amber-800">
                «Noi avemmo paura.»
              </p>

              <p className="italic text-amber-800">
                «Chiudemmo il cuore sotto terra.<br/>
                Come si fa con qualcosa che non si capisce.»
              </p>

              <p className="italic text-amber-800">
                «Ma un cuore chiuso…<br/>
                batte più forte.»
              </p>
            </div>
          </div>

          {/* Sezione: La putrefazione */}
          <div className="mt-10 pt-6 border-t-2 border-amber-700">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl">☠️</span>
              <h4 className="text-xl font-bold text-amber-950">La putrefazione</h4>
            </div>
            <div className="space-y-4 text-lg leading-relaxed">
              <p className="italic text-amber-800">
                «Ora il cuore fa l'unica cosa che ricorda.»
              </p>

              <p className="italic text-amber-800">
                «Trasforma.<br/>
                Consuma.<br/>
                Spinge.»
              </p>

              <p className="italic text-amber-800">
                «I funghi viola sono il suo respiro.»
              </p>

              <p>Eldric vi guarda, uno per uno.</p>
            </div>
          </div>

          {/* Sezione: Morghul oggi */}
          <div className="mt-10 pt-6 border-t-2 border-amber-700">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl">🌘</span>
              <h4 className="text-xl font-bold text-amber-950">Morghul oggi</h4>
            </div>
            <div className="space-y-4 text-lg leading-relaxed">
              <p className="italic text-amber-800">
                «Morghul è rimasto lì.»
              </p>

              <p className="italic text-amber-800">
                «Non è più un uomo.<br/>
                Non è un mostro.»
              </p>

              <p className="italic text-amber-800">
                «È una volontà stanca che sussurra:<br/>
                "Non cambiate più."»
              </p>
            </div>
          </div>

          {/* Sezione: Perché ora */}
          <div className="mt-10 pt-6 border-t-2 border-amber-700">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl">⏳</span>
              <h4 className="text-xl font-bold text-amber-950">Perché ora</h4>
            </div>
            <div className="space-y-4 text-lg leading-relaxed">
              <p className="italic text-amber-800">
                «Il coperchio si rompe.<br/>
                Io sono vecchio.<br/>
                E la foresta è ferita.»
              </p>

              <p className="italic text-amber-800">
                «Il cuore vuole uscire.»
              </p>
            </div>
          </div>

          {/* Sezione: La scelta */}
          <div className="mt-10 pt-6 border-t-2 border-amber-700">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl">🌿</span>
              <h4 className="text-xl font-bold text-amber-950">La scelta</h4>
            </div>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>Eldric abbassa la voce.</p>

              <p className="italic text-amber-800">
                «Se lo romperete,<br/>
                la foresta piangerà… ma guarirà.»
              </p>

              <p className="italic text-amber-800">
                «Se lo libererete,<br/>
                io resterò con lui.»
              </p>

              <p className="italic text-amber-800">
                «Se lo chiuderete di nuovo,<br/>
                tornerà il silenzio… per un po'.»
              </p>

              <p className="mt-6">Si alza con fatica.</p>

              <p className="italic text-amber-800">
                «Io ho già scelto male una volta.»
              </p>

              <p className="italic text-amber-800 mt-4">
                «Ora…<br/>
                tocca a voi.»
              </p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-amber-50/95 backdrop-blur-sm border-t-4 border-amber-800 px-8 py-4 rounded-b-3xl">
          <button
            onClick={onClose}
            className="w-full py-3 bg-amber-800 hover:bg-amber-900 text-amber-50 rounded-xl font-bold transition-all shadow-lg border-2 border-amber-950"
            style={{ fontFamily: 'serif' }}
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  );
};
