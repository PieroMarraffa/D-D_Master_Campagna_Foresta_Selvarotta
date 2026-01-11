
import React, { useState } from 'react';
import bestiaSporale from '../assets/Bestia sporale.png';
import eldric from '../assets/Eldric.png';
import pianaRespiroMarcio from '../assets/La piana del respiro marcio.png';
import pianaTabellone from '../assets/La piana del respiro marcio TABELLONE.png';

interface ImageProps {
  src: string;
  alt: string;
  caption?: string;
}

const ImageItem: React.FC<ImageProps> = ({ src, alt, caption }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="group relative cursor-zoom-in overflow-hidden rounded-xl bg-slate-800 border border-slate-700 hover:border-purple-500 transition-all duration-300 shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white bg-purple-600/80 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">Ingrandisci</span>
        </div>
        {caption && (
          <div className="p-3 text-sm text-slate-300 bg-slate-900/80 italic text-center border-t border-slate-800">
            {caption}
          </div>
        )}
      </div>

      {/* Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm transition-all animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center">
             <button 
                className="absolute top-4 right-4 text-white hover:text-purple-400 transition-colors p-2 bg-white/10 rounded-full"
                onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
             >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
             </button>
             <img 
                src={src} 
                alt={alt} 
                className="max-h-full max-w-full object-contain shadow-2xl rounded-lg animate-in zoom-in-95 duration-300"
             />
             {caption && <p className="text-white mt-4 text-lg font-serif italic text-center">{caption}</p>}
          </div>
        </div>
      )}
    </>
  );
};

/**
 * Componente ImageGallery
 * 
 * Mostra una galleria di immagini relative alla campagna D&D con funzionalità di zoom modale.
 * Le immagini vengono caricate dalla cartella assets locale.
 * 
 * @returns {JSX.Element} Una griglia responsive di immagini cliccabili con modal di ingrandimento
 */
export const ImageGallery: React.FC = () => {
  const localImages = [
    { 
      src: bestiaSporale, 
      alt: "La Bestia Sporale", 
      caption: "La Bestia Sporale: un animale morto mai tornato alla terra." 
    },
    { 
      src: eldric, 
      alt: "Eldric Muschiosecco", 
      caption: "Eldric Muschiosecco: il Druido pentito del Circolo delle Spore." 
    },
    { 
      src: pianaRespiroMarcio, 
      alt: "La Piana del Respiro Marcio", 
      caption: "La Piana del Respiro Marcio: il luogo della corruzione." 
    },
    { 
      src: pianaTabellone, 
      alt: "La Piana del Respiro Marcio - Tabellone", 
      caption: "La Piana del Respiro Marcio: mappa tattica del tabellone." 
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
      {localImages.map((img, idx) => (
        <ImageItem key={idx} {...img} />
      ))}
    </div>
  );
};
