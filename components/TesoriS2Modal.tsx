/**
 * Componente TesoriS2Modal
 * 
 * Modal per visualizzare i tesori della S2.
 * 
 * @param {boolean} isOpen - Stato di apertura/chiusura del modal
 * @param {() => void} onClose - Callback per chiudere il modal
 * @returns {JSX.Element | null} Il modal se aperto, null altrimenti
 */
import React from 'react';

interface TesoriS2ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TesoriS2Modal: React.FC<TesoriS2ModalProps> = ({ isOpen, onClose }) => {
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
            <span className="text-3xl">💰</span>
            <h2 className="text-3xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
              I Tesori (S2)
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
          {/* Armatura Elfica Leggera */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">🛡</span>
              <h3 className="text-xl font-bold text-emerald-400 uppercase tracking-tighter">
                ARMATURA ELFICA LEGGERA
              </h3>
            </div>
            <p className="text-slate-400 italic text-sm mb-4">
              "Veste delle Fronde Silenziose"
            </p>

            <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-emerald-500 space-y-4">
              <h4 className="text-emerald-300 font-bold mb-2">Aspetto</h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                È un'armatura di cuoio rinforzato, color verde-grigio, composta da:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300 text-sm">strati sottili di pelle trattata</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300 text-sm">fibre vegetali intrecciate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300 text-sm">piccole placche di legno elastico levigato</span>
                </li>
              </ul>
              <p className="text-slate-300 text-sm leading-relaxed mt-3">
                Non ha fibbie metalliche.<br/>
                Quando la si indossa, si adatta al corpo quasi fosse viva.
              </p>

              <div className="mt-4 pt-4 border-t border-slate-700">
                <h4 className="text-emerald-300 font-bold mb-2">Sensazione</h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">È sorprendentemente comoda</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">Non stringe</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">Non fa rumore quando si cammina</span>
                  </li>
                </ul>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-700">
                <h4 className="text-emerald-300 font-bold mb-2">Effetti meccanici</h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">CA: come Armatura di Cuoio Borchiato</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">Bonus: +1 alla CA</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">Beneficio speciale: annulla lo svantaggio alle prove di Furtività</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">Passivo narrativo: chi la indossa lascia impronte meno evidenti nel sottobosco</span>
                  </li>
                </ul>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-700">
                <h4 className="text-emerald-300 font-bold mb-2">Lore</h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-2">
                  Era indossata da sentinelle elfiche-druidiche, incaricate di muoversi con la foresta, non contro di essa.
                </p>
                <p className="text-slate-400 text-sm italic">
                  Eldric, vedendola:
                </p>
                <p className="text-emerald-300 text-sm font-serif italic border-l-4 border-emerald-500/40 pl-4 py-2 mt-2">
                  «Non serviva a nascondersi…<br/>
                  serviva a non disturbare.»
                </p>
              </div>
            </div>
          </div>

          {/* Giavellotto della Putrefazione Controllata */}
          <div className="mt-10 pt-6 border-t-2 border-slate-700 space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">🗡</span>
              <h3 className="text-xl font-bold text-purple-400 uppercase tracking-tighter">
                GIAVELLOTTO DELLA PUTREFAZIONE CONTROLLATA
              </h3>
            </div>
            <p className="text-slate-400 italic text-sm mb-4">
              "Spina del Ritorno"
            </p>

            <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-purple-500 space-y-4">
              <h4 className="text-purple-300 font-bold mb-2">Aspetto</h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                Il giavellotto ha:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300 text-sm">asta di legno scuro</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300 text-sm">punta d'osso annerito</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300 text-sm">incisioni spiraliformi che ricordano funghi e radici</span>
                </li>
              </ul>
              <p className="text-slate-300 text-sm leading-relaxed mt-3">
                Quando viene lanciato, lascia nell'aria una scia violacea sottile.
              </p>

              <div className="mt-4 pt-4 border-t border-slate-700">
                <h4 className="text-purple-300 font-bold mb-2">Effetti meccanici</h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">Arma da lancio standard</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">1 volta al giorno, quando colpisce:</span>
                  </li>
                </ul>
                <ul className="space-y-2 ml-8 mt-2">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">infligge +1d6 danni da veleno + 1d6 danni perforanti</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">il bersaglio deve superare un TS Costituzione CD 12</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">Fallimento: velocità dimezzata fino alla fine del suo prossimo turno</span>
                  </li>
                </ul>
                <div className="mt-3 bg-red-900/20 p-3 rounded-lg border-l-2 border-red-500">
                  <p className="text-red-300 text-xs font-semibold mb-1">⚠️</p>
                  <p className="text-slate-300 text-xs">
                    Il rallentamento non è paralisi, ma un peso innaturale, come se il corpo volesse "fermarsi e tornare a terra".
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-700">
                <h4 className="text-purple-300 font-bold mb-2">Lore</h4>
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  Non era pensato per uccidere.<br/>
                  Serviva a bloccare bestie impazzite senza distruggere l'equilibrio.
                </p>
              </div>
            </div>
          </div>

          {/* Visione Spirituale */}
          <div className="mt-10 pt-6 border-t-2 border-slate-700 space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">🧠</span>
              <h3 className="text-xl font-bold text-purple-400 uppercase tracking-tighter">
                VISIONE SPIRITUALE
              </h3>
            </div>
            <p className="text-slate-400 italic text-sm mb-4">
              (non è un oggetto, ma un "tesoro di conoscenza")
            </p>

            <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-purple-500 space-y-4">
              <h4 className="text-purple-300 font-bold mb-2">Come avviene</h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                Nel tempio, toccando:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300 text-sm">la vasca centrale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300 text-sm">una radice pulsante</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300 text-sm">oppure durante il combattimento con il Guardiano</span>
                </li>
              </ul>
              <p className="text-slate-300 text-sm leading-relaxed mt-3">
                Uno (o più) personaggi ha una visione.
              </p>

              <div className="mt-4 pt-4 border-t border-slate-700">
                <h4 className="text-purple-300 font-bold mb-2">Cosa vedono</h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">Una figura elfica avvolta da radici (Morghul)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">Un cuore fungino che pulsa lentamente</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">La foresta che si ferma, come trattenendo il respiro, tutto punta ad una grotta</span>
                  </li>
                </ul>
                <p className="text-slate-300 text-sm leading-relaxed mt-3 italic">
                  Non è un sogno.<br/>
                  È un ricordo rimasto nel luogo.
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-700">
                <h4 className="text-purple-300 font-bold mb-2">Effetto in gioco</h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-2">
                  I PG capiscono che:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">il vero "nemico" non è qui</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">il Guardiano non è il responsabile</span>
                  </li>
                </ul>
                <p className="text-slate-300 text-sm leading-relaxed mt-3 font-semibold">
                  Ottimo per:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">indirizzare la trama</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">evitare che pensino "abbiamo risolto tutto"</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pergamena Rituale */}
          <div className="mt-10 pt-6 border-t-2 border-slate-700 space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">📜</span>
              <h3 className="text-xl font-bold text-amber-400 uppercase tracking-tighter">
                PERGAMENA RITUALE – IL RITO DELLA STRADA VIVENTE
              </h3>
            </div>
            <p className="text-slate-400 italic text-sm mb-4">
              Questo è un tesoro enorme narrativamente, molto più che meccanicamente.
            </p>

            <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-amber-500 space-y-4">
              <h4 className="text-amber-300 font-bold mb-2">Nome</h4>
              <p className="text-slate-300 text-sm font-semibold">
                Rito della Strada Vivente
              </p>

              <div className="mt-4 pt-4 border-t border-slate-700">
                <h4 className="text-amber-300 font-bold mb-2">Aspetto della pergamena</h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">Carta spessa fatta di fibre vegetali</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">Le rune sembrano crescere lentamente</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">Odora di resina e muschio</span>
                  </li>
                </ul>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-700">
                <h4 className="text-amber-300 font-bold mb-2">Uso</h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">Rituale</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">Durata di lancio: 1 ora</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">Utilizzabile 1 volta al giorno</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">Non consuma slot</span>
                  </li>
                </ul>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-700">
                <h4 className="text-amber-300 font-bold mb-2">Effetto</h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-2">
                  In un'area naturale (sentiero, struttura, ponte, edificio nella foresta):
                </p>
                <p className="text-slate-300 text-sm font-semibold mb-2">La vegetazione:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">si sposta</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">si piega</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">si intreccia</span>
                  </li>
                </ul>
                <ul className="space-y-2 ml-4 mt-3">
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">Le strutture tornano vivibili, come quando furono costruite</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">Nulla viene distrutto</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">Radici e piante si adattano in armonia</span>
                  </li>
                </ul>
                <p className="text-slate-300 text-sm font-semibold mt-3 mb-2">Esempi:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">un tempio invaso diventa di nuovo accessibile</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">un sentiero scomparso riemerge</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">un rifugio crollato viene "abbracciato" dalla foresta</span>
                  </li>
                </ul>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-700">
                <h4 className="text-amber-300 font-bold mb-2">Limiti</h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">Non funziona in città</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">Non funziona su strutture completamente artificiali</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">Non crea nulla di nuovo: ripristina solo ciò che era</span>
                  </li>
                </ul>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-700">
                <h4 className="text-amber-300 font-bold mb-2">Lore</h4>
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  Questo rituale era il vero segreto del patto.
                </p>
                <p className="text-amber-300 text-sm font-semibold mt-2">
                  Non controllare la foresta.<br/>
                  Conviverci.
                </p>
              </div>
            </div>
          </div>

          {/* Appendice dell'Ukulele */}
          <div className="mt-10 pt-6 border-t-2 border-slate-700 space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">🎵</span>
              <h3 className="text-xl font-bold text-emerald-400 uppercase tracking-tighter">
                APPENDICE DELL'UKULELE
              </h3>
            </div>
            <p className="text-slate-400 italic text-sm mb-4">
              "Cassa delle Foglie Risonanti"
            </p>
            <p className="text-slate-400 text-xs mb-4">
              (Oggetto meraviglioso, comune → non richiede sintonia)
            </p>

            <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-emerald-500 space-y-4">
              <h4 className="text-emerald-300 font-bold mb-2">Aspetto</h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                È una piccola cassa di risonanza aggiuntiva, in legno chiaro inciso con foglie e spirali.
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300 text-sm">Si aggancia al fondo dell'ukulele</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300 text-sm">Le corde sembrano un po' più vive</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300 text-sm">Quando viene suonato, il suono è più pieno, quasi tridimensionale</span>
                </li>
              </ul>
              <p className="text-slate-300 text-sm leading-relaxed mt-3">
                Se osservata bene:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300 text-sm">tra le incisioni si vedono sottili fessure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300 text-sm">da cui escono vibrazioni verdi e dorate</span>
                </li>
              </ul>

              <div className="mt-4 pt-4 border-t border-slate-700">
                <h4 className="text-emerald-300 font-bold mb-2">Lore</h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-2">
                  Non è un'arma.<br/>
                  È stata creata per far ascoltare la musica anche a chi non voleva sentire.
                </p>
                <p className="text-slate-300 text-sm font-semibold mb-2">Era usata per:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">distrarre bestie</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">calmare spiriti</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">attirare l'attenzione lontano dai rituali</span>
                  </li>
                </ul>
              </div>

              {/* Usi in combattimento */}
              <div className="mt-6 pt-4 border-t-2 border-slate-700">
                <h4 className="text-emerald-300 font-bold mb-4 uppercase tracking-tighter">
                  🎶 USI IN COMBATTIMENTO
                </h4>
                <p className="text-slate-400 text-xs italic mb-4">
                  Tutti gli effetti funzionano automaticamente oppure con CD bassissima (CD 10).<br/>
                  Il bardo deve solo suonare.
                </p>

                {/* 1. Accordo Distrattivo */}
                <div className="bg-slate-900/50 p-4 rounded-xl mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-lg">🍃</span>
                    <h5 className="text-emerald-300 font-bold text-sm">1. Accordo Distrattivo</h5>
                  </div>
                  <p className="text-slate-400 text-xs mb-2">
                    Azione bonus – 2 volte per riposo breve
                  </p>
                  <p className="text-slate-300 text-xs leading-relaxed mb-2">
                    Il bardo suona un accordo secco e brillante.
                  </p>
                  <p className="text-slate-300 text-xs font-semibold mb-1">Effetto:</p>
                  <ul className="space-y-1 ml-4">
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2 mt-1 text-xs">•</span>
                      <span className="text-slate-300 text-xs">una creatura entro 9 m ha svantaggio al prossimo attacco</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2 mt-1 text-xs">•</span>
                      <span className="text-slate-300 text-xs">nessun tiro salvezza</span>
                    </li>
                  </ul>
                  <p className="text-slate-300 text-xs leading-relaxed mt-2 italic">
                    Narrativamente: il suono risuona nella testa, le foglie vibrano, l'attenzione vacilla.
                  </p>
                  <div className="mt-2 bg-red-900/20 p-2 rounded border-l-2 border-red-500">
                    <p className="text-red-300 text-xs">⚠️ Non funziona su creature completamente sorde.</p>
                  </div>
                </div>

                {/* 2. Richiamo Naturale */}
                <div className="bg-slate-900/50 p-4 rounded-xl mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-lg">🌿</span>
                    <h5 className="text-emerald-300 font-bold text-sm">2. Richiamo Naturale</h5>
                  </div>
                  <p className="text-slate-400 text-xs mb-2">
                    Azione – 1 volta per riposo breve
                  </p>
                  <p className="text-slate-300 text-xs leading-relaxed mb-2">
                    Un arpeggio rapido e circolare.
                  </p>
                  <p className="text-slate-300 text-xs font-semibold mb-1">Effetto:</p>
                  <ul className="space-y-1 ml-4">
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2 mt-1 text-xs">•</span>
                      <span className="text-slate-300 text-xs">una creatura entro 9 m deve superare TS Saggezza CD 10</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2 mt-1 text-xs">•</span>
                      <span className="text-slate-300 text-xs">Fallimento: la creatura sposta il suo movimento verso il bardo nel suo prossimo turno</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2 mt-1 text-xs">•</span>
                      <span className="text-slate-300 text-xs">Successo: nessun effetto</span>
                    </li>
                  </ul>
                  <p className="text-slate-300 text-xs leading-relaxed mt-2 italic">
                    Non è charme.<br/>
                    È curiosità istintiva.
                  </p>
                </div>

                {/* 3. Vibrazione di Disturbo */}
                <div className="bg-slate-900/50 p-4 rounded-xl">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-lg">🌫️</span>
                    <h5 className="text-emerald-300 font-bold text-sm">3. Vibrazione di Disturbo</h5>
                  </div>
                  <p className="text-slate-400 text-xs mb-2">
                    Azione – 1 volta per riposo lungo
                  </p>
                  <p className="text-slate-300 text-xs leading-relaxed mb-2">
                    Il bardo pizzica le corde con forza, creando un suono irregolare.
                  </p>
                  <p className="text-slate-300 text-xs font-semibold mb-1">Effetto:</p>
                  <ul className="space-y-1 ml-4">
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2 mt-1 text-xs">•</span>
                      <span className="text-slate-300 text-xs">tutte le creature ostili entro 6 m:</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2 mt-1 text-xs">•</span>
                      <span className="text-slate-300 text-xs">subiscono –1 alla CA</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2 mt-1 text-xs">•</span>
                      <span className="text-slate-300 text-xs">fino all'inizio del prossimo turno del bardo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2 mt-1 text-xs">•</span>
                      <span className="text-slate-300 text-xs">nessun tiro salvezza</span>
                    </li>
                  </ul>
                  <p className="text-slate-300 text-xs leading-relaxed mt-2 italic">
                    Narrativamente: la musica "sfascia il ritmo", i movimenti diventano meno precisi.
                  </p>
                </div>
              </div>

              {/* Usi fuori dal combattimento */}
              <div className="mt-6 pt-4 border-t-2 border-slate-700">
                <h4 className="text-emerald-300 font-bold mb-4 uppercase tracking-tighter">
                  🎭 USI FUORI DAL COMBATTIMENTO
                </h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">Vantaggio automatico a una prova sociale al giorno se suona</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">Può distrarre:</span>
                  </li>
                  <ul className="space-y-1 ml-6 mt-1">
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2 mt-1 text-xs">•</span>
                      <span className="text-slate-300 text-xs">guardie</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2 mt-1 text-xs">•</span>
                      <span className="text-slate-300 text-xs">animali</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2 mt-1 text-xs">•</span>
                      <span className="text-slate-300 text-xs">spiriti</span>
                    </li>
                  </ul>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">•</span>
                    <span className="text-slate-300 text-sm">Può essere usato come segnale concordato nel party</span>
                  </li>
                </ul>
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
