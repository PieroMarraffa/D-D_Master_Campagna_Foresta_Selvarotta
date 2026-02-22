/**
 * Componente MorghulModal
 * 
 * Modal per visualizzare informazioni su Morghul, il Custode Decomposto nella S3.
 * 
 * @param {boolean} isOpen - Stato di apertura/chiusura del modal
 * @param {() => void} onClose - Callback per chiudere il modal
 * @returns {JSX.Element | null} Il modal se aperto, null altrimenti
 */
import React, { useState } from 'react';
import grottaCuoreTabellone from '../assets/La grotta del cuore tabellone.png';
import { StatBlock } from './StatBlock';
import { MonsterStats } from '../types';

interface MorghulModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MorghulModal: React.FC<MorghulModalProps> = ({ isOpen, onClose }) => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  if (!isOpen) return null;

  const morghulStats: MonsterStats = {
    name: "Morghul - Il Custode Decomposto",
    tagline: "Boss Sessione 3",
    size: "Medio",
    type: "Umanoide (elfo) non morto",
    alignment: "Neutrale",
    ac: "14 (corteccia vivente)",
    hp: "85 (10d8 + 40)",
    speed: "9 m",
    abilities: {
      str: { label: "FOR", value: 12, mod: "+1" },
      dex: { label: "DES", value: 14, mod: "+2" },
      con: { label: "COS", value: 18, mod: "+4" },
      int: { label: "INT", value: 12, mod: "+1" },
      wis: { label: "SAG", value: 16, mod: "+3" },
      cha: { label: "CAR", value: 10, mod: "+0" },
    },
    savingThrows: "Cos +7, Sag +6",
    resistances: [
      "Veleno",
      "Necrotico",
      "Tagliente/Perforante/Contundente da attacchi non magici (solo mentre è in contatto con radici o terreno naturale)"
    ],
    specialAbilities: [
      { 
        name: "Legame al Cuore", 
        description: "All'inizio del suo turno, se Morghul è entro 9 m dal Cuore di Spora (nella sala finale), recupera 5 PF." 
      },
      { 
        name: "Aura di Spore", 
        description: "Creatura ostile che inizia il turno entro 3 m da Morghul: TS Costituzione CD 13. Fallimento: 1d4 danni da veleno. Successo: nessun danno." 
      }
    ],
    actions: [
      { 
        name: "Falce di Radice", 
        description: "Attacco con arma da mischia: +5 a colpire, portata 1,5 m, un bersaglio. Danni: 2d6 + 1 danni taglienti + 1d4 danni necrotici. Il colpo lascia una scia di spore scure, come cenere." 
      },
      { 
        name: "Stretta del Sottobosco (Ricarica 5-6)", 
        description: "Tutte le creature a scelta di Morghul entro 6 m devono fare un TS Forza CD 13. Fallimento: la creatura è Afferrata (velocità 0) e subisce 1d6 danni contundenti. Successo: metà danni e non è afferrata. Una creatura afferrata può usare un'azione per liberarsi con Atletica CD 13. Le radici tirano verso il basso come se volessero \"far tornare tutto alla terra\"." 
      },
      { 
        name: "Soffio del Cuore (Ricarica 4-6)", 
        description: "Cono di 4,5 m. TS Costituzione CD 13. Fallimento: 2d6 danni da veleno e il bersaglio ha svantaggio al prossimo tiro per colpire. Successo: metà danni e nessun effetto secondario. Per un attimo i PG vedono la foresta \"ferma\", come nella visione." 
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
        {/* Header */}
        <div className="sticky top-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 px-8 py-6 flex items-center justify-between rounded-t-3xl z-10">
          <div className="flex items-center space-x-4">
            <span className="text-3xl">👻</span>
            <h2 className="text-3xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-400">
              Morghul
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
                MORGHUL - IL CUSTODE DECOMPOSTO
              </h3>
            </div>
            <p className="text-slate-400 italic text-sm">
              (L'ombra di un druido che ha fallito)
            </p>
          </div>

          {/* Immagine zoomabile */}
          <div className="mb-8">
            <div 
              className="group relative cursor-zoom-in overflow-hidden rounded-xl bg-slate-800 border border-slate-700 hover:border-purple-500 transition-all duration-300 shadow-lg"
              onClick={() => setIsImageOpen(true)}
            >
              <img 
                src={grottaCuoreTabellone} 
                alt="La grotta del cuore - Tabellone" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white bg-purple-600/80 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">Ingrandisci</span>
              </div>
              <div className="p-3 text-sm text-slate-300 bg-slate-900/80 italic text-center border-t border-slate-800">
                La grotta del cuore - Tabellone
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
                  src={grottaCuoreTabellone} 
                  alt="La grotta del cuore - Tabellone" 
                  className="max-h-full max-w-full object-contain shadow-2xl rounded-lg animate-in zoom-in-95 duration-300"
                />
              </div>
            </div>
          )}

          {/* Stat Block */}
          <div className="mt-10 pt-6 border-t-2 border-slate-700">
            <h4 className="text-xl font-bold text-purple-400 uppercase tracking-tighter mb-4">
              📊 Statistiche
            </h4>
            <div className="mb-4 bg-slate-800/50 p-4 rounded-xl">
              <p className="text-slate-300 text-sm mb-2">
                <strong className="text-purple-300">Sensi:</strong> Scurovisione 18 m, Percezione passiva 16
              </p>
              <p className="text-slate-300 text-sm mb-2">
                <strong className="text-purple-300">Abilità:</strong> Natura +6, Percezione +6, Sopravvivenza +6
              </p>
              <p className="text-slate-300 text-sm mb-2">
                <strong className="text-purple-300">Immunità alle condizioni:</strong> Avvelenato
              </p>
              <p className="text-slate-300 text-sm">
                <strong className="text-purple-300">Lingue:</strong> Elfico, Druidico (parla raramente, spesso "nella testa")
              </p>
              <p className="text-slate-300 text-sm mt-2 italic">
                <strong className="text-purple-300">Grado di Sfida:</strong> Boss custom per party lvl 3 (circa CR 4 "soft")
              </p>
            </div>
            <StatBlock stats={morghulStats} />
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
