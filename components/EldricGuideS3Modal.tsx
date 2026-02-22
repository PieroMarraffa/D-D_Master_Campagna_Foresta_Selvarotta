/**
 * Componente EldricGuideS3Modal
 * 
 * Modal per visualizzare la guida di Eldric per la sezione 3 (Il Cuore di Spora).
 * 
 * @param {boolean} isOpen - Stato di apertura/chiusura del modal
 * @param {() => void} onClose - Callback per chiudere il modal
 * @returns {JSX.Element | null} Il modal se aperto, null altrimenti
 */
import React from 'react';

interface EldricGuideS3ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EldricGuideS3Modal: React.FC<EldricGuideS3ModalProps> = ({ isOpen, onClose }) => {
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
            <span className="text-3xl">🧙‍♂️</span>
            <h2 className="text-3xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-400">
              La Guida di Eldric
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
        <div className="p-8 space-y-6">
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-serif">
            <p>
              Eldric arriva al santuario quando il sole è ancora basso, come se avesse camminato tutta la notte.
              È più stanco del solito, ma quando vede i vostri volti capisce subito che non siete tornati a mani vuote.
            </p>

            <p>
              Si ferma davanti alla vasca. La guarda a lungo.
              Poi guarda voi.
            </p>

            <p className="font-semibold text-emerald-300 italic">
              «Cosa è successo qui?»
            </p>

            <p>
              Appena i PG parlano delle visioni non aspetta una risposta completa.
              Basta il modo in cui respirate, il silenzio che vi portate addosso.
            </p>

            <p className="font-semibold text-emerald-300 italic">
              «Ditemi cosa avete visto.»
            </p>

            <p>
              Quando gli raccontate della figura elfica avvolta da radici, del cuore fungino che pulsa, e della foresta che trattiene il respiro… Eldric chiude gli occhi come se quelle immagini gli facessero male.
            </p>

            <p className="font-semibold text-purple-300 italic">
              «Morghul…»
            </p>

            <p>
              Lo dice come si pronuncia un nome che non si ha più il diritto di usare.
            </p>

            <p>
              Poi si avvicina alla vasca e appoggia due dita sul bordo, piano.
            </p>

            <p className="font-semibold text-emerald-300 italic">
              «Allora è davvero sveglio.»
            </p>

            <p>
              Si gira verso di voi.
            </p>

            <p className="font-semibold text-emerald-300 italic">
              «Ascoltatemi bene, perché questo è il punto in cui molti sbagliano.»
            </p>

            <p>
              Fa un passo, e la sua voce diventa più ferma.
            </p>

            <p className="font-semibold text-emerald-300 italic">
              «Quello che avete combattuto qui non era lui.<br/>
              Il Guardiano non era un nemico.<br/>
              Era una serratura.»
            </p>

            <p className="font-semibold text-emerald-300 italic">
              «E voi… avete trovato la chiave.»
            </p>

            <p>
              Si interrompe, prende fiato, e il suo sguardo scivola tra le colonne coperte di radici.
            </p>

            <p className="font-semibold text-emerald-300 italic">
              «Morghul non voleva distruggere la foresta.<br/>
              Voleva salvarla… ma ha scelto la strada più pericolosa: trattenere tutto. Fermare tutto.»
            </p>

            <p>
              Eldric indica il suolo.
            </p>

            <p className="font-semibold text-emerald-300 italic">
              «Il Cuore di Spora non è cattivo.<br/>
              È un cuore. Fa quello che sa fare: trasformare, riciclare, nutrire.»
            </p>

            <p>
              Poi la sua mano si stringe sul bastone.
            </p>

            <p className="font-semibold text-emerald-300 italic">
              «Ma ora non è più solo.<br/>
              Ora c'è Morghul dentro.<br/>
              E Morghul non riesce più a distinguere il salvare dal possedere.»
            </p>

            <p>
              Fa una pausa, come se la frase gli pesasse in bocca.
            </p>

            <p className="font-semibold text-emerald-300 italic">
              «La visione vi ha mostrato una grotta perché… il Cuore sta chiamando da lì.»
            </p>

            <p className="font-semibold text-emerald-300 italic">
              «Non dal tempio.<br/>
              Non dalla radura.<br/>
              Da più in basso.»
            </p>

            <p>
              Eldric si china, raccoglie un pugno di terra e lo lascia scivolare tra le dita.
            </p>

            <p className="font-semibold text-emerald-300 italic">
              «Dove la foresta mette le cose che non vuole far vedere.<br/>
              Dove il suolo è caldo.<br/>
              Dove le radici diventano vene.»
            </p>

            <p>
              Alza lo sguardo.
            </p>

            <p className="font-semibold text-emerald-300 italic">
              «La chiamano la Caverna Vivente.<br/>
              Io l'ho vista una sola volta, molti anni fa.»
            </p>

            <p>
              La voce gli trema appena.
            </p>

            <p className="font-semibold text-emerald-300 italic">
              «Non ci sono sentieri per arrivarci.<br/>
              Solo segnali.»
            </p>

            <p>
              Eldric vi elenca i segnali con calma, come un vecchio che ha imparato a sopravvivere:
            </p>

            <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-emerald-500/40 ml-4">
              <ul className="space-y-3 text-slate-200">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span className="italic">«L'aria comincerà a profumare di pioggia… anche se non piove.»</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span className="italic">«Vedrete funghi pallidi che crescono come lanterne.»</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span className="italic">«Le cortecce degli alberi saranno umide, come se sudassero.»</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span className="italic">«E il terreno… sarà troppo morbido, come pelle.»</span>
                </li>
              </ul>
            </div>

            <p>
              Poi vi guarda, serio.
            </p>

            <p className="font-semibold text-emerald-300 italic">
              «Quando la troverete, non aspettatevi una tana.<br/>
              Aspettatevi una bocca.»
            </p>

            <p>
              Eldric si avvicina, abbassa la voce.
            </p>

            <p className="font-semibold text-emerald-300 italic">
              «E soprattutto… non credete che Morghul sia solo un mostro.»
            </p>

            <p className="font-semibold text-emerald-300 italic">
              «Lì sotto troverete un uomo che ha sbagliato,<br/>
              un cuore che non sa più respirare,<br/>
              e una foresta che sta trattenendo il fiato da troppo tempo.»
            </p>

            <p>
              Fa un passo indietro.
            </p>

            <p>
              Eldric posa una mano sul bordo della vasca.
            </p>

            <p className="font-semibold text-emerald-300 italic">
              «E questa volta, deve rispondere a voi.»
            </p>
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
