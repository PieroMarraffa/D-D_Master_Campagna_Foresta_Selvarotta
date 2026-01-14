/**
 * Componente TempioModal
 * 
 * Modal per visualizzare informazioni sul tempio nella S2.
 * 
 * @param {boolean} isOpen - Stato di apertura/chiusura del modal
 * @param {() => void} onClose - Callback per chiudere il modal
 * @returns {JSX.Element | null} Il modal se aperto, null altrimenti
 */
import React, { useState } from 'react';
import tempioTabellone from '../assets/Tempio delle radici sospese tabellone.png';
import tempio from '../assets/Tempio delle radici sospese.png';

interface TempioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TempioModal: React.FC<TempioModalProps> = ({ isOpen, onClose }) => {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleImageClick = (imageSrc: string) => {
    setZoomedImage(imageSrc);
  };

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
            <span className="text-3xl">🏯</span>
            <h2 className="text-3xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">
              Il Tempio delle Radici Sospese
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
              <span className="text-3xl">🌳</span>
              <h3 className="text-2xl font-bold uppercase tracking-tighter text-emerald-400">
                IL TEMPIO DELLE RADICI SOSPESE
              </h3>
            </div>
          </div>

          {/* Introduzione */}
          <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
            <p>
              La foresta cambia prima ancora che lo vediate.
            </p>
            <p>
              Gli alberi intorno diventano più larghi, più antichi.<br/>
              I tronchi crescono inclinati verso un punto comune, come se stessero proteggendo qualcosa.
            </p>
            <p>
              Poi, tra i rami, lo vedete.
            </p>
          </div>

          {/* Immagini zoomabili */}
          <div className="grid md:grid-cols-2 gap-4 my-8">
            <div 
              className="group relative cursor-zoom-in overflow-hidden rounded-xl bg-slate-800 border border-slate-700 hover:border-emerald-500 transition-all duration-300 shadow-lg"
              onClick={() => handleImageClick(tempio)}
            >
              <img 
                src={tempio} 
                alt="Tempio delle Radici Sospese" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white bg-emerald-600/80 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">Ingrandisci</span>
              </div>
            </div>
            <div 
              className="group relative cursor-zoom-in overflow-hidden rounded-xl bg-slate-800 border border-slate-700 hover:border-emerald-500 transition-all duration-300 shadow-lg"
              onClick={() => handleImageClick(tempioTabellone)}
            >
              <img 
                src={tempioTabellone} 
                alt="Tempio delle Radici Sospese - Tabellone" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white bg-emerald-600/80 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">Ingrandisci</span>
              </div>
            </div>
          </div>

          {/* Modal immagine zoomata */}
          {zoomedImage && (
            <div 
              className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm transition-all animate-in fade-in duration-300"
              onClick={() => setZoomedImage(null)}
            >
              <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center">
                <button 
                  className="absolute top-4 right-4 text-white hover:text-emerald-400 transition-colors p-2 bg-white/10 rounded-full z-10"
                  onClick={(e) => { e.stopPropagation(); setZoomedImage(null); }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <img 
                  src={zoomedImage} 
                  alt="Immagine ingrandita" 
                  className="max-h-full max-w-full object-contain shadow-2xl rounded-lg animate-in zoom-in-95 duration-300"
                />
              </div>
            </div>
          )}

          {/* La struttura */}
          <div className="mt-10 pt-6 border-t-2 border-slate-700">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">🏛️</span>
              <h4 className="text-xl font-bold text-emerald-400 uppercase tracking-tighter">
                La struttura
              </h4>
            </div>
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                Il tempio è a pianta circolare, costruito in pietra chiara levigata, simile al marmo antico, ma opacizzato dal tempo.
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span>Una fila di colonne tonde lo circonda completamente</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span>I capitelli sono semplici, senza decorazioni eccessive</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span>Non ci sono mura chiuse: il tempio era aperto all'aria e alla luce</span>
                </li>
              </ul>
              <p className="mt-4">
                Le colonne non sono spezzate.<br/>
                Sono abbracciate.
              </p>
              <p className="font-semibold text-emerald-300 mb-2">Radici enormi:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span>scendono dall'alto come corde</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span>avvolgono i fusti delle colonne</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span>si intrecciano tra loro senza romperle</span>
                </li>
              </ul>
              <p className="mt-4 italic text-emerald-200">
                Sembra che la foresta abbia deciso di tenerlo, non di distruggerlo.
              </p>
            </div>
          </div>

          {/* L'integrazione con la foresta */}
          <div className="mt-10 pt-6 border-t-2 border-slate-700">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">🌿</span>
              <h4 className="text-xl font-bold text-emerald-400 uppercase tracking-tighter">
                L'integrazione con la foresta
              </h4>
            </div>
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                Il tempio non poggia sul terreno:<br/>
                è incastonato.
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span>Le radici formano una piattaforma naturale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span>Il suolo sotto è solido, ma vivo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span>Tra le pietre crescono muschio, felci e piccoli fiori bianchi</span>
                </li>
              </ul>
              <p className="mt-4 font-semibold text-emerald-300 mb-2">Alcuni alberi:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span>crescono attraverso il tempio</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span>i tronchi passano tra le colonne</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span>i rami formano una cupola naturale sopra la struttura</span>
                </li>
              </ul>
              <p className="mt-4 italic text-emerald-200">
                La luce del sole filtra dall'alto in fasci morbidi, verdi e dorati.
              </p>
            </div>
          </div>

          {/* Il centro del tempio */}
          <div className="mt-10 pt-6 border-t-2 border-slate-700">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">🌀</span>
              <h4 className="text-xl font-bold text-emerald-400 uppercase tracking-tighter">
                Il centro del tempio
              </h4>
            </div>
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                Al centro si trova una vasca circolare in pietra.
              </p>
              <p className="font-semibold text-emerald-300 mb-2">Un tempo conteneva:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span>acqua pura</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span>foglie</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span>semi</span>
                </li>
              </ul>
              <p className="mt-4">
                Ora è vuota, asciutta.
              </p>
              <p className="mt-4 font-semibold text-emerald-300 mb-2">Sui bordi della vasca sono incisi simboli:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span>radici</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span>cerchi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span>mani che si toccano</span>
                </li>
              </ul>
              <p className="mt-4 italic text-emerald-200">
                Non sono simboli di dominio.<br/>
                Sono gesti di accordo.
              </p>
            </div>
          </div>

          {/* Sensazione del luogo */}
          <div className="mt-10 pt-6 border-t-2 border-slate-700">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">🕊️</span>
              <h4 className="text-xl font-bold text-emerald-400 uppercase tracking-tighter">
                Sensazione del luogo
              </h4>
            </div>
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p className="font-semibold text-emerald-300 mb-2">Nonostante la corruzione:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span>qui l'aria è più leggera</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span>il silenzio non è ostile</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span>i rumori della foresta sono presenti</span>
                </li>
              </ul>
              <p className="mt-4">
                È facile immaginare:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span>druidi che parlano</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span>erboristi che lavorano</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span>persone che mangiano, dormono, studiano</span>
                </li>
              </ul>
              <p className="mt-4 italic text-emerald-200">
                Questo era un luogo abitato, non un santuario proibito.
              </p>
            </div>
          </div>

          {/* Segni del passato */}
          <div className="mt-10 pt-6 border-t-2 border-slate-700">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">🗿</span>
              <h4 className="text-xl font-bold text-emerald-400 uppercase tracking-tighter">
                Segni del passato
              </h4>
            </div>
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p className="font-semibold text-emerald-300 mb-2">Qua e là:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span>piccole casette di pietra che hanno subito il tempo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">•</span>
                  <span>incisioni irriconoscibili cancellate dal tempo</span>
                </li>
              </ul>
              <div className="mt-6 bg-emerald-900/20 p-6 rounded-xl border-l-4 border-emerald-500">
                <p className="text-slate-300 mb-2">
                  Una frase ricorre, in varie forme:
                </p>
                <p className="text-xl font-serif italic text-emerald-300 text-center">
                  "Non prendiamo dalla foresta.<br/>
                  Restiamo con lei."
                </p>
              </div>
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
