/**
 * Componente TreScelteModal
 * 
 * Modal per visualizzare le tre scelte finali per il Cuore di Spora nella S3.
 * 
 * @param {boolean} isOpen - Stato di apertura/chiusura del modal
 * @param {() => void} onClose - Callback per chiudere il modal
 * @returns {JSX.Element | null} Il modal se aperto, null altrimenti
 */
import React from 'react';

interface TreScelteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TreScelteModal: React.FC<TreScelteModalProps> = ({ isOpen, onClose }) => {
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
            <span className="text-3xl">⚖️</span>
            <h2 className="text-3xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-emerald-400 to-purple-400">
              Le Tre Scelte
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
              <span className="text-3xl">💚</span>
              <h3 className="text-2xl font-bold uppercase tracking-tighter text-purple-400">
                LE TRE SCELTE FINALI
              </h3>
            </div>
            <p className="text-slate-400 italic text-sm">
              (Il destino del Cuore di Spora)
            </p>
          </div>

          {/* Prima della scelta */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">💚</span>
              <h4 className="text-xl font-bold text-purple-400 uppercase tracking-tighter">
                PRIMA DELLA SCELTA
              </h4>
            </div>

            <div className="space-y-4 text-slate-300 text-lg leading-relaxed font-serif">
              <p className="font-semibold text-purple-300 mb-2">
                IL CUORE SENZA MORGHUL (COSA FA)
              </p>

              <p>
                Il Cuore pulsa più forte, senza cattiveria… ma senza controllo.
              </p>

              <p className="font-semibold text-purple-300 mb-2">Succede questo:</p>
              <div className="bg-purple-900/20 p-6 rounded-xl border-l-4 border-purple-500/40 ml-4">
                <ul className="space-y-2 text-slate-200">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span>l'aria diventa densa</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span>il pavimento si muove come terra bagnata</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span>piccole escrescenze fungine spuntano ovunque</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span>un odore dolce e marcio riempie i polmoni</span>
                  </li>
                </ul>
              </div>

              <p className="mt-4">
                Non sta attaccando.
              </p>

              <p>
                Sta facendo ciò che sa fare: trasformare.
              </p>

              <p className="font-semibold text-red-300 italic">
                Ma senza guida, rischia di trasformare troppo.
              </p>

              <p className="mt-4 font-semibold text-purple-300 italic text-center bg-slate-800/30 p-4 rounded-xl">
                È il momento della scelta.
              </p>
            </div>
          </div>

          {/* Come proporre le scelte */}
          <div className="mt-10 pt-6 border-t-2 border-slate-700">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">🎭</span>
              <h4 className="text-xl font-bold text-amber-400 uppercase tracking-tighter">
                COME PROPORRE LE 3 SCELTE AI GIOCATORI (SENZA "MENU")
              </h4>
            </div>

            <div className="space-y-4 text-slate-300 text-lg leading-relaxed font-serif">
              <p>
                Invece di dire "scegliete A, B o C", fai arrivare la scelta tramite tre segnali fisici e una sensazione chiara.
              </p>

              <div className="bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500/40 mt-4">
                <p className="font-semibold text-red-300 mb-3">Segnale della distruzione</p>
                <p className="mb-2">Vedono una cosa:</p>
                <ul className="space-y-2 ml-4 mb-3">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span>la massa del Cuore ha un nucleo più duro, come una "pietra viva"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span>crepe luminose</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span>sembra vulnerabile</span>
                  </li>
                </ul>
                <p className="font-semibold text-red-300 italic">
                  Il party capisce:<br/>
                  "Possiamo spaccarlo. Finisce qui."
                </p>
              </div>

              <div className="bg-emerald-900/20 p-6 rounded-xl border-l-4 border-emerald-500/40 mt-4">
                <p className="font-semibold text-emerald-300 mb-3">Segnale della liberazione</p>
                <p className="mb-2">Sentono una cosa:</p>
                <ul className="space-y-2 ml-4 mb-3">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span>quando si avvicinano, il Cuore pulsa più piano</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span>come se "ascoltasse"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span>le spore si abbassano, quasi rispettose</span>
                  </li>
                </ul>
                <p className="font-semibold text-emerald-300 italic">
                  Il party capisce:<br/>
                  "Non è cattivo. Vuole uscire e respirare."
                </p>
              </div>

              <div className="bg-purple-900/20 p-6 rounded-xl border-l-4 border-purple-500/40 mt-4">
                <p className="font-semibold text-purple-300 mb-3">Segnale del sigillo</p>
                <p className="mb-2">Notano una cosa:</p>
                <ul className="space-y-2 ml-4 mb-3">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span>sulle pareti ci sono incisioni antiche, canali, simboli</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span>resti del vecchio sigillo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span>punti dove un rituale può essere ricostruito</span>
                  </li>
                </ul>
                <p className="font-semibold text-purple-300 italic">
                  Il party capisce:<br/>
                  "Possiamo chiuderlo di nuovo."
                </p>
              </div>
            </div>
          </div>

          {/* L'arrivo di Eldric */}
          <div className="mt-10 pt-6 border-t-2 border-slate-700">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">🧙‍♂️</span>
              <h4 className="text-xl font-bold text-emerald-400 uppercase tracking-tighter">
                L'ARRIVO DI ELDRIC NEL MOMENTO DELLA SCELTA
              </h4>
            </div>

            <div className="space-y-4 text-slate-300 text-lg leading-relaxed font-serif">
              <p>
                Eldric arriva di corsa, cosa rarissima per lui.
              </p>

              <p>
                È sporco di fango fino alle ginocchia, respira forte.<br/>
                Ha seguito il "battito" del Cuore come si segue un tamburo nel buio.
              </p>

              <p>
                Quando entra nella sala, si ferma di colpo.
              </p>

              <p>
                Vede che Morghul non c'è più.
              </p>

              <p>
                E capisce.
              </p>

              <div className="bg-emerald-900/20 p-6 rounded-xl border-l-4 border-emerald-500/40 ml-4 mt-4">
                <p className="font-semibold text-emerald-300 italic mb-2">
                  La sua voce è rotta ma ferma:
                </p>
                <p className="font-semibold text-emerald-300 italic">
                  «Avete fatto… ciò che io non ho mai avuto il coraggio di finire.»
                </p>
              </div>

              <p className="mt-4">
                Poi guarda il Cuore.
              </p>

              <div className="bg-purple-900/20 p-6 rounded-xl border-l-4 border-purple-500/40 ml-4">
                <p className="font-semibold text-purple-300 italic">
                  E sussurra:<br/>
                  «E adesso… non c'è più nessuno tra lui e il mondo.»
                </p>
              </div>

              <p className="mt-4">
                Eldric non vi dice cosa fare subito.<br/>
                Vi guarda, e dice solo:
              </p>

              <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-emerald-500/40 ml-4">
                <p className="font-semibold text-emerald-300 italic text-center">
                  «Ora la foresta vi sta chiedendo una risposta.»
                </p>
              </div>
            </div>
          </div>

          {/* Scelta 1: Distruggerlo */}
          <div className="mt-10 pt-6 border-t-2 border-slate-700">
            <div className="bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">💥</span>
                <h4 className="text-2xl font-bold text-red-400 uppercase tracking-tighter">
                  SCELTA 1 — DISTRUGGERE IL CUORE
                </h4>
              </div>
              <div className="space-y-4 text-slate-300 font-serif">
                <p className="font-semibold text-red-300 mb-2">Come appare in scena:</p>
                <p className="mb-2">
                  I PG colpiscono il nucleo.<br/>
                  Ogni colpo fa tremare la grotta come un tuono soffocato.
                </p>
                <p className="mb-2">
                  Il Cuore pulsa più forte, poi… perde ritmo.
                </p>
                <p className="font-semibold text-red-300 text-center mb-2">
                  BUM… BUM… …
                </p>
                <p className="mb-2">
                  Si spegne.
                </p>
                <p className="mb-2">
                  Le radici sulle pareti si seccano in pochi secondi.<br/>
                  I funghi viola collassano come fiori bruciati.
                </p>
                <p className="font-semibold text-red-300 mb-2">
                  La putrefazione si ferma.
                </p>

                <div className="bg-red-900/30 p-4 rounded-lg mt-4">
                  <p className="font-semibold text-red-300 mb-2">Effetto immediato:</p>
                  <ul className="space-y-1 ml-4 text-sm">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2 mt-1">•</span>
                      <span>aria pulita</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2 mt-1">•</span>
                      <span>silenzio vero</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2 mt-1">•</span>
                      <span>la grotta smette di "vivere"</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 p-4 rounded-lg mt-4">
                  <p className="font-semibold text-emerald-300 mb-2">La reazione di Eldric:</p>
                  <p className="mb-2 text-sm">
                    Eldric resta immobile.
                  </p>
                  <p className="mb-2 text-sm">
                    Poi appoggia la fronte al bastone.
                  </p>
                  <p className="mb-2 text-sm">
                    Non urla. Non accusa.
                  </p>
                  <div className="bg-emerald-900/20 p-3 rounded-lg mt-2">
                    <p className="font-semibold text-emerald-300 italic text-sm mb-1">
                      Dice solo:
                    </p>
                    <p className="font-semibold text-emerald-300 italic text-sm">
                      «È finita.»
                    </p>
                  </div>
                  <p className="mb-2 text-sm mt-3">
                    Dopo un lungo silenzio:
                  </p>
                  <div className="bg-emerald-900/20 p-3 rounded-lg mt-2">
                    <p className="font-semibold text-emerald-300 italic text-sm">
                      «Avete salvato le persone…<br/>
                      e avete spento una parte della foresta che non tornerà più.»
                    </p>
                  </div>
                  <p className="mb-2 text-sm mt-3 italic">
                    Se i PG chiedono se hanno fatto male:
                  </p>
                  <div className="bg-emerald-900/20 p-3 rounded-lg mt-2">
                    <p className="font-semibold text-emerald-300 italic text-sm">
                      «Non esiste una scelta senza ferite.<br/>
                      Ma questa… chiude il dolore oggi.»
                    </p>
                  </div>
                  <p className="text-sm mt-3">
                    Eldric vi accompagna fuori in silenzio.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scelta 2: Liberare il Cuore */}
          <div className="mt-10 pt-6 border-t-2 border-slate-700">
            <div className="bg-emerald-900/20 p-6 rounded-xl border-l-4 border-emerald-500">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">🌱</span>
                <h4 className="text-2xl font-bold text-emerald-400 uppercase tracking-tighter">
                  SCELTA 2 — LIBERARE IL CUORE
                </h4>
              </div>
              <div className="space-y-4 text-slate-300 font-serif">
                <p className="font-semibold text-emerald-300 mb-2">Come appare in scena:</p>
                <p className="mb-2">
                  I PG spezzano i sigilli rimasti, aprono i canali naturali, lasciano che il Cuore "respiri".
                </p>
                <p className="mb-2">
                  Le radici iniziano a muoversi come onde.<br/>
                  Le spore diventano luminose, leggere, non più tossiche.
                </p>
                <p className="mb-2">
                  La grotta si riempie di una luce verde tenue.
                </p>
                <p className="font-semibold text-emerald-300 mb-2">
                  Il Cuore pulsa in modo regolare.
                </p>

                <p className="mt-4">
                  Eldric fa un passo avanti.
                </p>

                <div className="bg-emerald-900/30 p-4 rounded-lg mt-4">
                  <p className="font-semibold text-emerald-300 mb-2">Il sacrificio (se vuoi mantenerlo):</p>
                  <p className="mb-2 text-sm">
                    Eldric capisce che per stabilizzare il Cuore serve un "ponte".
                  </p>
                  <div className="bg-emerald-800/30 p-3 rounded-lg mt-2">
                    <p className="font-semibold text-emerald-300 italic text-sm mb-1">
                      Eldric dice:
                    </p>
                    <p className="font-semibold text-emerald-300 italic text-sm">
                      «Morghul ha fatto la cosa giusta nel modo sbagliato.<br/>
                      Io farò la cosa giusta… nel modo giusto.»
                    </p>
                  </div>
                  <p className="mb-2 text-sm mt-3">
                    Si avvicina, posa entrambe le mani sul Cuore.
                  </p>
                  <p className="mb-2 text-sm">
                    Le spore gli salgono sulle braccia come edera.<br/>
                    Non lo divorano. Lo accolgono.
                  </p>
                  <p className="mb-2 text-sm">
                    Eldric chiude gli occhi, e sorride.
                  </p>
                  <div className="bg-emerald-800/30 p-3 rounded-lg mt-2">
                    <p className="font-semibold text-emerald-300 italic text-sm">
                      «Finalmente… respiri.»
                    </p>
                  </div>
                  <p className="text-sm mt-3 italic">
                    Eldric non muore in modo violento.<br/>
                    Semplicemente… resta.
                  </p>
                </div>

                <div className="bg-emerald-900/30 p-4 rounded-lg mt-4">
                  <p className="font-semibold text-emerald-300 mb-2">Effetto immediato:</p>
                  <ul className="space-y-1 ml-4 text-sm">
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2 mt-1">•</span>
                      <span>la putrefazione si trasforma in fertilità</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2 mt-1">•</span>
                      <span>la foresta riprende a "muoversi"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2 mt-1">•</span>
                      <span>il Cuore torna a essere ciò che era</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 p-4 rounded-lg mt-4">
                  <p className="font-semibold text-emerald-300 mb-2">La reazione di Eldric:</p>
                  <p className="mb-2 text-sm">
                    È sereno. È la prima volta che lo è davvero.
                  </p>
                  <div className="bg-emerald-900/20 p-3 rounded-lg mt-2">
                    <p className="font-semibold text-emerald-300 italic text-sm">
                      «Non abbiate paura se i sentieri cambieranno.<br/>
                      È la foresta che torna viva.»
                    </p>
                  </div>
                  <p className="mb-2 text-sm mt-3 font-semibold text-emerald-300 italic">
                    Ultima frase:
                  </p>
                  <div className="bg-emerald-900/20 p-3 rounded-lg mt-2">
                    <p className="font-semibold text-emerald-300 italic text-sm">
                      «Cantatemi ogni tanto qualcosa, se passate di qui.»
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scelta 3: Sigillarlo */}
          <div className="mt-10 pt-6 border-t-2 border-slate-700">
            <div className="bg-purple-900/20 p-6 rounded-xl border-l-4 border-purple-500">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">🔒</span>
                <h4 className="text-2xl font-bold text-purple-400 uppercase tracking-tighter">
                  SCELTA 3 — SIGILLARE DI NUOVO IL CUORE
                </h4>
              </div>
              <div className="space-y-4 text-slate-300 font-serif">
                <p className="font-semibold text-purple-300 mb-2">Come appare in scena:</p>
                <p className="mb-2">
                  I PG ricostruiscono il vecchio vincolo:
                </p>
                <div className="bg-purple-900/30 p-4 rounded-lg ml-4 mb-3">
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2 mt-1">•</span>
                      <span>rune</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2 mt-1">•</span>
                      <span>radici intrecciate</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2 mt-1">•</span>
                      <span>pietre riportate in posizione</span>
                    </li>
                  </ul>
                </div>
                <p className="mb-2">
                  Il Cuore pulsa sempre più piano, come se venisse messo a dormire.
                </p>
                <p className="mb-2">
                  La grotta smette di tremare.
                </p>
                <p className="font-semibold text-purple-300 mb-2">
                  L'aria torna normale.
                </p>

                <div className="bg-purple-900/30 p-4 rounded-lg mt-4">
                  <p className="font-semibold text-purple-300 mb-2">Effetto immediato:</p>
                  <ul className="space-y-1 ml-4 text-sm">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2 mt-1">•</span>
                      <span>carovane salve</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2 mt-1">•</span>
                      <span>foresta "tranquilla"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2 mt-1">•</span>
                      <span>tutto sembra risolto</span>
                    </li>
                  </ul>
                  <p className="mt-3 text-sm font-semibold text-red-300">
                    Ma…
                  </p>
                  <p className="text-sm">
                    una spora viola resta accesa, minuscola, come una brace.
                  </p>
                </div>

                <div className="bg-slate-800/50 p-4 rounded-lg mt-4">
                  <p className="font-semibold text-emerald-300 mb-2">La reazione di Eldric:</p>
                  <p className="mb-2 text-sm">
                    Eldric chiude gli occhi.
                  </p>
                  <p className="mb-2 text-sm">
                    Quando li riapre, sembra più vecchio.
                  </p>
                  <div className="bg-emerald-900/20 p-3 rounded-lg mt-2">
                    <p className="font-semibold text-emerald-300 italic text-sm">
                      «Capisco.»
                    </p>
                  </div>
                  <p className="mb-2 text-sm mt-3">
                    Non vi giudica.
                  </p>
                  <div className="bg-emerald-900/20 p-3 rounded-lg mt-2">
                    <p className="font-semibold text-emerald-300 italic text-sm">
                      «È la scelta più facile da portare a casa.<br/>
                      E forse è quella che la gente di Tuonceppo vi ringrazierà di più.»
                    </p>
                  </div>
                  <p className="mb-2 text-sm mt-3">
                    Poi però aggiunge, con tristezza:
                  </p>
                  <div className="bg-red-900/20 p-3 rounded-lg mt-2">
                    <p className="font-semibold text-red-300 italic text-sm">
                      «Ma ricordatevi questo…<br/>
                      non avete curato la ferita.<br/>
                      Avete rimesso il bendaggio.»
                    </p>
                  </div>
                  <p className="mb-2 text-sm mt-3">
                    Eldric resta lì.
                  </p>
                  <div className="bg-emerald-900/20 p-3 rounded-lg mt-2">
                    <p className="font-semibold text-emerald-300 italic text-sm">
                      «Io resterò finché posso.<br/>
                      E quando non potrò più…<br/>
                      spero che qualcuno si ricordi di voi.»
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nota finale */}
          <div className="mt-10 pt-6 border-t-2 border-slate-700">
            <div className="bg-slate-800/50 p-6 rounded-xl">
              <p className="text-slate-300 text-center italic text-lg">
                Qualsiasi scelta facciano i giocatori, cambierà la foresta per sempre.<br/>
                Non c'è una scelta "giusta" o "sbagliata".<br/>
                C'è solo la scelta che fanno.
              </p>
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
