/**
 * Componente DiarioMorghulModal
 * 
 * Modal per visualizzare il diario di Morghul nella S2.
 * 
 * @param {boolean} isOpen - Stato di apertura/chiusura del modal
 * @param {() => void} onClose - Callback per chiudere il modal
 * @returns {JSX.Element | null} Il modal se aperto, null altrimenti
 */
import React from 'react';

interface DiarioMorghulModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiarioMorghulModal: React.FC<DiarioMorghulModalProps> = ({ isOpen, onClose }) => {
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
            <span className="text-3xl">📖</span>
            <h2 className="text-3xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-400">
              Il Diario di Morghul
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
              <span className="text-3xl">📖</span>
              <h3 className="text-2xl font-bold uppercase tracking-tighter text-purple-400">
                IL DIARIO DI MORGHUL
              </h3>
            </div>
            <p className="text-slate-400 italic text-sm">
              (Rilegatura in corteccia, pagine di fibra vegetale, scrittura ordinata ma sempre più irregolare col tempo)
            </p>
          </div>

          {/* Pagina I */}
          <div className="bg-amber-50 rounded-2xl border-4 border-amber-800 shadow-xl p-8" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(139, 69, 19, 0.1) 0%, transparent 50%, rgba(139, 69, 19, 0.1) 100%),
              repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 69, 19, 0.03) 2px, rgba(139, 69, 19, 0.03) 4px)
            `,
            boxShadow: 'inset 0 0 30px rgba(139, 69, 19, 0.1)'
          }}>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🌱</span>
              <h4 className="text-lg font-bold text-amber-900" style={{ fontFamily: 'serif' }}>
                PAGINA I – MOLTI ANNI PRIMA
              </h4>
            </div>
            <div className="space-y-3 text-amber-900 leading-relaxed" style={{ fontFamily: 'serif' }}>
              <p className="text-base">
                Oggi il Cuore ha risposto.
              </p>
              <p className="text-base">
                Le spore hanno cantato quando abbiamo aperto la radura.<br/>
                La terra era calda sotto le mani.
              </p>
              <p className="text-base">
                Eldric dice che dobbiamo essere cauti.<br/>
                Io dico che la foresta ci ha già scelti.
              </p>
              <p className="text-base">
                Non comandiamo nulla.<br/>
                Ascoltiamo.
              </p>
              <p className="text-base font-semibold italic">
                Questo posto sarà buono.
              </p>
            </div>
          </div>

          {/* Pagina II */}
          <div className="bg-amber-50 rounded-2xl border-4 border-amber-800 shadow-xl p-8" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(139, 69, 19, 0.1) 0%, transparent 50%, rgba(139, 69, 19, 0.1) 100%),
              repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 69, 19, 0.03) 2px, rgba(139, 69, 19, 0.03) 4px)
            `,
            boxShadow: 'inset 0 0 30px rgba(139, 69, 19, 0.1)'
          }}>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🌿</span>
              <h4 className="text-lg font-bold text-amber-900" style={{ fontFamily: 'serif' }}>
                PAGINA II – DOPO IL PATTO CON LE CAROVANE
              </h4>
            </div>
            <div className="space-y-3 text-amber-900 leading-relaxed" style={{ fontFamily: 'serif' }}>
              <p className="text-base">
                Le strade restano aperte.
              </p>
              <p className="text-base">
                I carri passano senza che gli alberi si chiudano.<br/>
                Gli uomini sono grati.
              </p>
              <p className="text-base">
                Ma il Cuore…<br/>
                lavora in silenzio.
              </p>
              <p className="text-base">
                Prima respirava ovunque.<br/>
                Ora solo dove gli diciamo noi.
              </p>
              <p className="text-base">
                È stanco.<br/>
                Non lo dico agli altri.
              </p>
            </div>
          </div>

          {/* Pagina III */}
          <div className="bg-amber-50 rounded-2xl border-4 border-amber-800 shadow-xl p-8" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(139, 69, 19, 0.1) 0%, transparent 50%, rgba(139, 69, 19, 0.1) 100%),
              repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 69, 19, 0.03) 2px, rgba(139, 69, 19, 0.03) 4px)
            `,
            boxShadow: 'inset 0 0 30px rgba(139, 69, 19, 0.1)'
          }}>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🍂</span>
              <h4 className="text-lg font-bold text-amber-900" style={{ fontFamily: 'serif' }}>
                PAGINA III – I PRIMI DUBBI
              </h4>
            </div>
            <div className="space-y-3 text-amber-900 leading-relaxed" style={{ fontFamily: 'serif' }}>
              <p className="text-base">
                La foresta non guarisce più come prima.
              </p>
              <p className="text-base">
                Dove cade un cervo, la terra impiega giorni.<br/>
                Prima bastavano ore.
              </p>
              <p className="text-base">
                Le spore crescono lente.<br/>
                Come se aspettassero un permesso.
              </p>
              <p className="text-base">
                Eldric dice che è normale.<br/>
                Io sento che non lo è.
              </p>
            </div>
          </div>

          {/* Pagina IV */}
          <div className="bg-amber-50 rounded-2xl border-4 border-amber-800 shadow-xl p-8" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(139, 69, 19, 0.1) 0%, transparent 50%, rgba(139, 69, 19, 0.1) 100%),
              repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 69, 19, 0.03) 2px, rgba(139, 69, 19, 0.03) 4px)
            `,
            boxShadow: 'inset 0 0 30px rgba(139, 69, 19, 0.1)'
          }}>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🌑</span>
              <h4 className="text-lg font-bold text-amber-900" style={{ fontFamily: 'serif' }}>
                PAGINA IV – LA PAURA
              </h4>
            </div>
            <div className="space-y-3 text-amber-900 leading-relaxed" style={{ fontFamily: 'serif' }}>
              <p className="text-base">
                Stanotte il Cuore non ha cantato.
              </p>
              <p className="text-base">
                Solo un battito, lento.<br/>
                Pesante.
              </p>
              <p className="text-base">
                Ho sognato radici che stringono qualcosa che vuole muoversi.
              </p>
              <p className="text-base font-semibold">
                Se il Cuore si ferma…<br/>
                cosa resterà della Selvarotta?
              </p>
            </div>
          </div>

          {/* Pagina V */}
          <div className="bg-amber-50 rounded-2xl border-4 border-amber-800 shadow-xl p-8" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(139, 69, 19, 0.1) 0%, transparent 50%, rgba(139, 69, 19, 0.1) 100%),
              repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 69, 19, 0.03) 2px, rgba(139, 69, 19, 0.03) 4px)
            `,
            boxShadow: 'inset 0 0 30px rgba(139, 69, 19, 0.1)'
          }}>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🩸</span>
              <h4 className="text-lg font-bold text-amber-900" style={{ fontFamily: 'serif' }}>
                PAGINA V – LA DECISIONE
              </h4>
            </div>
            <p className="text-amber-700 text-xs italic mb-3" style={{ fontFamily: 'serif' }}>
              (scrittura più inclinata, alcune parole cancellate)
            </p>
            <div className="space-y-3 text-amber-900 leading-relaxed" style={{ fontFamily: 'serif' }}>
              <p className="text-base">
                Non posso aspettare.
              </p>
              <p className="text-base">
                Gli altri parlano di sigilli.<br/>
                Di contenere.
              </p>
              <p className="text-base">
                Ma non si chiude un cuore.
              </p>
              <p className="text-base">
                Se il Cuore è stanco…<br/>
                allora gli darò la mia forza.
              </p>
            </div>
          </div>

          {/* Pagina VI */}
          <div className="bg-amber-50 rounded-2xl border-4 border-amber-800 shadow-xl p-8" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(139, 69, 19, 0.1) 0%, transparent 50%, rgba(139, 69, 19, 0.1) 100%),
              repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 69, 19, 0.03) 2px, rgba(139, 69, 19, 0.03) 4px)
            `,
            boxShadow: 'inset 0 0 30px rgba(139, 69, 19, 0.1)'
          }}>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🌘</span>
              <h4 className="text-lg font-bold text-amber-900" style={{ fontFamily: 'serif' }}>
                PAGINA VI – L'ULTIMA PRIMA DEL RITO
              </h4>
            </div>
            <p className="text-amber-700 text-xs italic mb-3" style={{ fontFamily: 'serif' }}>
              (inchiostro irregolare, macchie)
            </p>
            <div className="space-y-3 text-amber-900 leading-relaxed" style={{ fontFamily: 'serif' }}>
              <p className="text-base">
                Ho paura.
              </p>
              <p className="text-base">
                Non di morire.
              </p>
              <p className="text-base">
                Ho paura che nessuno ascolti più la foresta<br/>
                se io fallisco.
              </p>
              <p className="text-base font-semibold">
                Se queste parole restano,<br/>
                vuol dire che non sono tornato.
              </p>
            </div>
          </div>

          {/* Pagina Finale */}
          <div className="bg-amber-50 rounded-2xl border-4 border-amber-800 shadow-xl p-8" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(139, 69, 19, 0.1) 0%, transparent 50%, rgba(139, 69, 19, 0.1) 100%),
              repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 69, 19, 0.03) 2px, rgba(139, 69, 19, 0.03) 4px)
            `,
            boxShadow: 'inset 0 0 30px rgba(139, 69, 19, 0.1)'
          }}>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🕳️</span>
              <h4 className="text-lg font-bold text-amber-900" style={{ fontFamily: 'serif' }}>
                PAGINA FINALE – SCRITTA POCO PRIMA DI UNIRSI AL CUORE
              </h4>
            </div>
            <p className="text-amber-700 text-xs italic mb-3" style={{ fontFamily: 'serif' }}>
              (le parole sembrano quasi incise, non scritte)
            </p>
            <div className="space-y-3 text-amber-900 leading-relaxed" style={{ fontFamily: 'serif' }}>
              <p className="text-base font-semibold">
                Cuore, ascoltami.
              </p>
              <p className="text-base">
                Non ti chiedo di obbedire.
              </p>
              <p className="text-base">
                Ti chiedo di respirare con me.
              </p>
              <p className="text-base">
                Se devo restare,<br/>
                resterò.
              </p>
              <p className="text-base">
                Se devo sparire,<br/>
                sparirò.
              </p>
              <p className="text-base font-bold text-center mt-4">
                Basta che la foresta<br/>
                non smetta di vivere.
              </p>
            </div>
          </div>
        </div>
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
