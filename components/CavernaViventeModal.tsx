/**
 * Componente CavernaViventeModal
 * 
 * Modal per visualizzare informazioni sulla Caverna Vivente nella S3.
 * 
 * @param {boolean} isOpen - Stato di apertura/chiusura del modal
 * @param {() => void} onClose - Callback per chiudere il modal
 * @returns {JSX.Element | null} Il modal se aperto, null altrimenti
 */
import React, { useState } from 'react';
import ingressoCaverna from '../assets/L\'ingresso della caverna vivente.png';
import sistemaCaverne from '../assets/Sistema di caverne.png';
import sistemaCaverneNumerato from '../assets/Sistema di caverne numerato.png';

interface CavernaViventeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CavernaViventeModal: React.FC<CavernaViventeModalProps> = ({ isOpen, onClose }) => {
  const [isImageOpen, setIsImageOpen] = useState<string | null>(null);
  
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
            <span className="text-3xl">🕳️</span>
            <h2 className="text-3xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-400">
              La Caverna Vivente
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
              <span className="text-3xl">🌑</span>
              <h3 className="text-2xl font-bold uppercase tracking-tighter text-purple-400">
                LA CAVERNA VIVENTE
              </h3>
            </div>
            <p className="text-slate-400 italic text-sm">
              (Il luogo dove il Cuore di Spora respira)
            </p>
          </div>

          {/* Immagini zoomabili */}
          <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div 
              className="group relative cursor-zoom-in overflow-hidden rounded-xl bg-slate-800 border border-slate-700 hover:border-purple-500 transition-all duration-300 shadow-lg"
              onClick={() => setIsImageOpen('ingresso')}
            >
              <img 
                src={ingressoCaverna} 
                alt="L'ingresso della caverna vivente" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white bg-purple-600/80 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">Ingrandisci</span>
              </div>
              <div className="p-3 text-sm text-slate-300 bg-slate-900/80 italic text-center border-t border-slate-800">
                L'ingresso della caverna vivente
              </div>
            </div>
            <div 
              className="group relative cursor-zoom-in overflow-hidden rounded-xl bg-slate-800 border border-slate-700 hover:border-purple-500 transition-all duration-300 shadow-lg"
              onClick={() => setIsImageOpen('sistema')}
            >
              <img 
                src={sistemaCaverne} 
                alt="Sistema di caverne" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white bg-purple-600/80 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">Ingrandisci</span>
              </div>
              <div className="p-3 text-sm text-slate-300 bg-slate-900/80 italic text-center border-t border-slate-800">
                Sistema di caverne
              </div>
            </div>
          </div>

          {/* Modal immagine zoomata */}
          {isImageOpen && (
            <div 
              className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm transition-all animate-in fade-in duration-300"
              onClick={() => setIsImageOpen(null)}
            >
              <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center">
                <button 
                  className="absolute top-4 right-4 text-white hover:text-purple-400 transition-colors p-2 bg-white/10 rounded-full z-10"
                  onClick={(e) => { e.stopPropagation(); setIsImageOpen(null); }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <img 
                  src={isImageOpen === 'ingresso' ? ingressoCaverna : isImageOpen === 'sistema' ? sistemaCaverne : sistemaCaverneNumerato} 
                  alt={isImageOpen === 'ingresso' ? "L'ingresso della caverna vivente" : isImageOpen === 'sistema' ? "Sistema di caverne" : "Sistema di caverne numerato"} 
                  className="max-h-full max-w-full object-contain shadow-2xl rounded-lg animate-in zoom-in-95 duration-300"
                />
              </div>
            </div>
          )}

          {/* Descrizione del luogo */}
          <div className="space-y-6">
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed font-serif">
              <p>
                Il passaggio verso la grotta non è un ingresso normale.
              </p>

              <p>
                Non è una spaccatura netta nella roccia.<br/>
                È un punto in cui la foresta… sembra cedere.
              </p>

              <p>
                Il terreno scende dolcemente, e a ogni passo il bosco diventa più silenzioso, più umido, più scuro.<br/>
                La luce non sparisce: cambia.<br/>
                Diventa verdastra, come se filtrasse attraverso foglie bagnate anche dove foglie non ci sono.
              </p>

              <p>
                Arrivate davanti a un'apertura larga quanto un carro, ma non sembra una grotta.
              </p>

              <p className="font-semibold text-purple-300 italic">
                Sembra un respiro.
              </p>

              <p>
                Le pareti interne non sono pietra asciutta: sono roccia coperta di radici, muschio e filamenti fungini che si muovono lentamente, quasi impercettibili, come se la caverna avesse una pelle.
              </p>

              <p>
                Dentro, il suono è strano:
              </p>

              <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-purple-500/40 ml-4">
                <ul className="space-y-2 text-slate-200">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span>i vostri passi fanno eco</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span>ma l'eco arriva in ritardo, come se lo spazio stesse "pensando"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span>ogni goccia d'acqua sembra cadere troppo vicino all'orecchio</span>
                  </li>
                </ul>
              </div>

              <p>
                L'odore è forte:<br/>
                terra umida, funghi, resina… e sotto, qualcosa di dolce e marcio.
              </p>

              <p>
                Avanzando, trovate tre elementi che rendono la grotta inquietante e "viva":
              </p>

              <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-emerald-500/40 ml-4 mt-4">
                <p className="font-semibold text-emerald-300 mb-3">1) Radici come vene</p>
                <p className="text-slate-200">
                  Le radici non sono solo appese.<br/>
                  Entrano nella roccia e ne escono, pulsano in alcuni punti, e si uniscono in fasci grossi che portano verso il centro, come se stessero nutrendo qualcosa.
                </p>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-purple-500/40 ml-4">
                <p className="font-semibold text-purple-300 mb-3">2) Spore come polvere luminosa</p>
                <p className="text-slate-200">
                  Nell'aria fluttuano spore pallide, quasi invisibili.<br/>
                  Quando una torcia passa attraverso di esse, brillano per un attimo come stelle minuscole.
                </p>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-amber-500/40 ml-4">
                <p className="font-semibold text-amber-300 mb-3">3) Il suolo morbido</p>
                <p className="text-slate-200">
                  In alcuni tratti il pavimento non è duro.<br/>
                  È elastico, come una superficie spugnosa.<br/>
                  Ogni impronta resta qualche secondo… poi lentamente si riempie da sola.
                </p>
              </div>

              <p className="mt-6 font-semibold text-purple-300 italic">
                Più vi addentrate, più capite una cosa:
              </p>

              <p className="font-semibold text-red-300 text-xl italic text-center bg-slate-800/30 p-4 rounded-xl">
                Questa grotta non è stata scavata.<br/>
                È cresciuta.
              </p>
            </div>
          </div>

          {/* Mappa del sistema di caverne */}
          <div className="mt-10 pt-6 border-t-2 border-slate-700">
            <div className="mb-6">
              <div 
                className="group relative cursor-zoom-in overflow-hidden rounded-xl bg-slate-800 border border-slate-700 hover:border-purple-500 transition-all duration-300 shadow-lg"
                onClick={() => setIsImageOpen('numerato')}
              >
                <img 
                  src={sistemaCaverneNumerato} 
                  alt="Sistema di caverne numerato" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white bg-purple-600/80 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">Ingrandisci</span>
                </div>
                <div className="p-3 text-sm text-slate-300 bg-slate-900/80 italic text-center border-t border-slate-800">
                  Sistema di caverne numerato
                </div>
              </div>
            </div>

            {/* Informazioni sulle stanze */}
            <div className="space-y-8 text-slate-300 text-lg leading-relaxed font-serif">
              {/* Stanza 0 */}
              <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-emerald-500/40">
                <h4 className="text-xl font-bold text-emerald-400 mb-3">0) Ingresso</h4>
                <p className="mb-3">
                  <strong className="text-emerald-300">Descrizione:</strong> l'entrata sembra una mascella di radici e pietra. Il suolo è umido e morbido, come gengiva.
                </p>
                <p className="mb-3">
                  <strong className="text-emerald-300">Interazione:</strong><br/>
                  Appena entrano, sentono un battito lontano.
                </p>
                <div className="bg-emerald-900/20 p-4 rounded-lg mt-3">
                  <p className="font-semibold text-emerald-300 mb-2">Tesoro (piccolo, subito):</p>
                  <ul className="space-y-1 ml-4">
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2 mt-1">•</span>
                      <span><strong>3 Torce di Resina Verde</strong><br/>
                      Torce che bruciano con fiamma verde tenue.<br/>
                      <span className="text-sm italic">Effetto: per 1 ora, vantaggio alle prove di Percezione per trovare funghi/spore/tracce.</span></span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Stanza 1 */}
              <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-purple-500/40">
                <h4 className="text-xl font-bold text-purple-400 mb-3">1) La Sala delle Costole di Pietra</h4>
                <p className="mb-3">
                  <strong className="text-purple-300">Descrizione:</strong> pareti a forma di costole, come se la grotta fosse uno scheletro gigante.
                </p>
                <div className="bg-red-900/20 p-4 rounded-lg mt-3 mb-3">
                  <p className="font-semibold text-red-300 mb-2">Evento:</p>
                  <p className="mb-2">Quando passano in mezzo, radici "scattano" e tentano di intrappolare chi è ultimo.</p>
                  <p className="text-sm italic">
                    <strong>Meccanica semplice:</strong><br/>
                    • TS Destrezza CD 12 o Intrappolato (velocità 0) fino a che un alleato non lo libera (azione, Forza CD 12).
                  </p>
                </div>
                <div className="bg-purple-900/20 p-4 rounded-lg mt-3">
                  <p className="font-semibold text-purple-300 mb-2">Tesoro:</p>
                  <ul className="space-y-1 ml-4">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2 mt-1">•</span>
                      <span><strong>Anello di Corteccia Lucida</strong><br/>
                      <span className="text-sm italic">1 volta al giorno: quando subisci danno, riducilo di 1d6 (reazione).</span></span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Stanza 2 */}
              <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-amber-500/40">
                <h4 className="text-xl font-bold text-amber-400 mb-3">2) La Serra Invertita</h4>
                <p className="mb-3">
                  <strong className="text-amber-300">Descrizione:</strong> funghi giganti crescono "a soffitto" come lampadari. Le radici formano nicchie naturali.
                </p>
                <div className="bg-amber-900/20 p-4 rounded-lg mt-3">
                  <p className="font-semibold text-amber-300 mb-2">Tesori principali:</p>
                  <ul className="space-y-1 ml-4">
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2 mt-1">💰</span>
                      <span><strong>Baule inglobato nella radice:</strong> 60 mo + 2 gemme (10 mo ciascuna)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2 mt-1">🧪</span>
                      <span><strong>Essenza di Spora Stabile</strong> (2 dosi)<br/>
                      <span className="text-sm italic">Bonus: +1d4 veleno a un'arma (come il veleno sporale), ma non si degrada.</span></span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Stanza 3 */}
              <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-blue-500/40">
                <h4 className="text-xl font-bold text-blue-400 mb-3">3) Pozza del Respiro Calmo</h4>
                <p className="mb-3">
                  <strong className="text-blue-300">Descrizione:</strong> una pozza circolare d'acqua ferma. Le spore qui si posano e non pungono.
                </p>
                <div className="bg-blue-900/20 p-4 rounded-lg mt-3 mb-3">
                  <p className="font-semibold text-blue-300 mb-2">Effetto:</p>
                  <p className="text-sm italic">
                    • Se bevono o si lavano le mani:<br/>
                    ottengono +1d4 al prossimo TS contro veleno/necrotico nelle prossime 24 ore.
                  </p>
                </div>
                <div className="bg-blue-900/20 p-4 rounded-lg mt-3">
                  <p className="font-semibold text-blue-300 mb-2">Tesoro:</p>
                  <ul className="space-y-1 ml-4">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2 mt-1">•</span>
                      <span><strong>4 Pozioni di Guarigione</strong> (1d8)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Stanza 4 */}
              <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-emerald-500/40">
                <h4 className="text-xl font-bold text-emerald-400 mb-3">4) Il Nido del Ricordo</h4>
                <p className="mb-3">
                  <strong className="text-emerald-300">Descrizione:</strong> qui le pareti sono piene di incisioni druidiche, come una biblioteca fatta di radici.
                </p>
                <div className="bg-emerald-900/20 p-4 rounded-lg mt-3 mb-3">
                  <p className="font-semibold text-emerald-300 mb-2">Cosa trovano:</p>
                  <ul className="space-y-1 ml-4">
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2 mt-1">•</span>
                      <span>una pietra piatta come leggio naturale</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2 mt-1">•</span>
                      <span>un libro antichissimo con l'inchiostro ormai evaporato</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-emerald-900/20 p-4 rounded-lg mt-3">
                  <p className="font-semibold text-emerald-300 mb-2">Tesoro:</p>
                  <ul className="space-y-1 ml-4">
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2 mt-1">•</span>
                      <span><strong>Pietra-luce</strong> (sasso verde tenue che illumina 6 m per 8 ore)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Stanza 5 */}
              <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-slate-400/40">
                <h4 className="text-xl font-bold text-slate-300 mb-3">5) Anticamera</h4>
                <p className="mb-3">
                  Qui un gran numero di ossa e resti inorganici scricchiolano sotto i piedi. Tra tutti questi trovate una moltitudine di lame spezzate, frecce rotte, punte di giavellotto. Ma in tutta questa distruzione, sotto la luce della torcia, brilla più di tutte una lama.
                </p>
                <p className="mb-3">
                  Una spada lunga elfica piantata in un anello di radici.
                </p>
                <p className="mb-3">
                  Il metallo è argentato.<br/>
                  La guardia è fatta come due foglie che si toccano.
                </p>
                <p className="mb-3">
                  Sul pomo c'è un simbolo inciso: un albero con al centro una fiamma inscritti in un cerchio di radici e rami.
                </p>
                <div className="bg-slate-700/50 p-4 rounded-lg mt-3 mb-3">
                  <p className="font-semibold text-slate-300 mb-2">Proprietà</p>
                  <ul className="space-y-1 ml-4 text-sm">
                    <li className="flex items-start">
                      <span className="text-slate-400 mr-2 mt-1">•</span>
                      <span>È una spada lunga elfica (1d10 tagliente +1d6 danni da forza)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-400 mr-2 mt-1">•</span>
                      <span>È magica (+1 ai tiri per colpire e danni)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-400 mr-2 mt-1">•</span>
                      <span>È indistruttibile</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-400 mr-2 mt-1">•</span>
                      <span>Emana una fioca luce in ambienti completamente bui che illumina per 18 metri trasformando il buio in penombra. Si somma alla scurovisione</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-emerald-900/20 p-4 rounded-lg mt-3">
                  <p className="font-semibold text-emerald-300 mb-2">Regola speciale (la parte "Destrezza fortissima")</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2 mt-1">👉</span>
                      <span><strong>Grazia Elfica:</strong> puoi usare Destrezza invece di Forza per attacco e danno con questa spada lunga.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2 mt-1">👉</span>
                      <span><strong>Discendenza:</strong> se discendi dalla famiglia che ha costruito e timbrato la lama, puoi aggiungere 1.5 x bonus di competenza ai tiri per colpire con la lama arrotondati per eccesso.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Stanza 6 */}
              <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-red-500/40">
                <h4 className="text-xl font-bold text-red-400 mb-3">6) La Soglia del Battito (pre-boss)</h4>
                <p className="mb-3">
                  <strong className="text-red-300">Descrizione:</strong> il tunnel vibra. Ogni passo coincide con un battito.
                </p>
                <div className="bg-red-900/20 p-4 rounded-lg mt-3 mb-3">
                  <p className="font-semibold text-red-300 mb-2">Scelta morale piccola:</p>
                  <p className="mb-2">Una radice blocca il passaggio e "chiede" sangue/energia:</p>
                  <ul className="space-y-1 ml-4">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2 mt-1">•</span>
                      <span>possono ferirsi (1d4 PF) per aprire</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2 mt-1">•</span>
                      <span>oppure usare il rituale "Parola Verde" per deviare senza ferire</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-emerald-900/20 p-4 rounded-lg mt-3">
                  <p className="font-semibold text-emerald-300 mb-2">Ricompensa se scelgono bene:</p>
                  <ul className="space-y-1 ml-4">
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2 mt-1">•</span>
                      <span>ottengono Ispirazione (o vantaggio al primo tiro del boss fight)</span>
                    </li>
                  </ul>
                </div>
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
