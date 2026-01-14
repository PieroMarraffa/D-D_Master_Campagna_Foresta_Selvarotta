/**
 * Componente SpiritiCorrottiModal
 * 
 * Modal per visualizzare informazioni sugli spiriti della foresta corrotti nella S2.
 * 
 * @param {boolean} isOpen - Stato di apertura/chiusura del modal
 * @param {() => void} onClose - Callback per chiudere il modal
 * @returns {JSX.Element | null} Il modal se aperto, null altrimenti
 */
import React, { useState } from 'react';
import spiritiCorrotti from '../assets/SpiritiDellaForestaCorrotti.png';
import { StatBlock } from './StatBlock';
import { MonsterStats } from '../types';

interface SpiritiCorrottiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpiritiCorrottiModal: React.FC<SpiritiCorrottiModalProps> = ({ isOpen, onClose }) => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  if (!isOpen) return null;

  const spiritiStats: MonsterStats = {
    name: "Spirito della Foresta Corrotto",
    tagline: "Nemico Sessione 2",
    size: "Media",
    type: "Spirito",
    alignment: "Neutrale",
    ac: "13",
    hp: "22 (4d8 + 4)",
    speed: "0 m, volo 9 m (fluttuante)",
    abilities: {
      str: { label: "FOR", value: 10, mod: "+0" },
      dex: { label: "DES", value: 14, mod: "+2" },
      con: { label: "COS", value: 12, mod: "+1" },
      int: { label: "INT", value: 8, mod: "-1" },
      wis: { label: "SAG", value: 12, mod: "+1" },
      cha: { label: "CAR", value: 14, mod: "+2" },
    },
    resistances: ["Resistenza ai danni contundenti, perforanti e taglienti non magici"],
    actions: [
      { 
        name: "Artiglio Etereo", 
        description: "Attacco con arma da mischia: +4 a colpire, portata 1,5 m. Danni: 1d6 + 2 danni necrotici. Se il bersaglio è già ferito, il colore violaceo pulsa." 
      },
      { 
        name: "Sussurro della Selva", 
        description: "Azione — raggio 6 m, una creatura. TS Saggezza CD 12. Fallimento: 1d4 danni psichici e svantaggio al prossimo tiro per colpire. Successo: Nessun effetto secondario." 
      }
    ]
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
            <span className="text-3xl">👻</span>
            <h2 className="text-3xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-400">
              Spiriti della Foresta Corrotti
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
              <span className="text-3xl">🌫️</span>
              <h3 className="text-2xl font-bold uppercase tracking-tighter text-purple-400">
                SPIRITI DELLA FORESTA CORROTTI
              </h3>
            </div>
          </div>

          {/* Immagine zoomabile */}
          <div className="mb-8">
            <div 
              className="group relative cursor-zoom-in overflow-hidden rounded-xl bg-slate-800 border border-slate-700 hover:border-purple-500 transition-all duration-300 shadow-lg"
              onClick={() => setIsImageOpen(true)}
            >
              <img 
                src={spiritiCorrotti} 
                alt="Spiriti della Foresta Corrotti" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white bg-purple-600/80 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">Ingrandisci</span>
              </div>
            </div>
          </div>

          {/* Modal immagine zoomata */}
          {isImageOpen && (
            <div 
              className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm transition-all animate-in fade-in duration-300"
              onClick={() => setIsImageOpen(false)}
            >
              <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center">
                <button 
                  className="absolute top-4 right-4 text-white hover:text-purple-400 transition-colors p-2 bg-white/10 rounded-full z-10"
                  onClick={(e) => { e.stopPropagation(); setIsImageOpen(false); }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <img 
                  src={spiritiCorrotti} 
                  alt="Spiriti della Foresta Corrotti" 
                  className="max-h-full max-w-full object-contain shadow-2xl rounded-lg animate-in zoom-in-95 duration-300"
                />
              </div>
            </div>
          )}

          {/* Descrizione fisica */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-purple-400 uppercase tracking-tighter mb-4">
              Descrizione fisica
            </h4>
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                Queste creature non hanno un corpo vero.
              </p>
              <p className="font-semibold text-purple-300 mb-2">Sembrano:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">•</span>
                  <span>sagome umanoidi fatte di foglie morte, corteccia spezzata e fumo verde</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">•</span>
                  <span>i volti sono appena accennati, come maschere d'albero spezzate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">•</span>
                  <span>dagli occhi colano filamenti luminosi violacei</span>
                </li>
              </ul>
              <p className="mt-4 font-semibold text-purple-300 mb-2">Quando si muovono:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">•</span>
                  <span>il terreno si ricopre di foglie secche</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">•</span>
                  <span>si sente un sussurro simile a rami che si spezzano</span>
                </li>
              </ul>
              <p className="mt-4 italic text-purple-200">
                Non parlano.<br/>
                Ripetono eco di antiche promesse.
              </p>
            </div>
          </div>

          {/* Comportamento */}
          <div className="mt-10 pt-6 border-t-2 border-slate-700">
            <h4 className="text-xl font-bold text-red-400 uppercase tracking-tighter mb-4">
              Comportamento
            </h4>
            <div className="bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500">
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Attaccano chi entra nel santuario</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Si muovono in modo fluttuante</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Non inseguono fuori dall'area sacra</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">•</span>
                  <span className="text-slate-300">Preferiscono colpire chi lancia magie o si allontana dal gruppo</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Stat Block */}
          <div className="mt-10 pt-6 border-t-2 border-slate-700">
            <h4 className="text-xl font-bold text-purple-400 uppercase tracking-tighter mb-4">
              📊 Statistiche
            </h4>
            <StatBlock stats={spiritiStats} />
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
