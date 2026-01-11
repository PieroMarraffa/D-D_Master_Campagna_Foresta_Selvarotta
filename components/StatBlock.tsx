
import React from 'react';
import { MonsterStats } from '../types';

interface StatBlockProps {
  stats: MonsterStats;
}

export const StatBlock: React.FC<StatBlockProps> = ({ stats }) => {
  return (
    <div className="stat-block p-6 my-8 rounded shadow-xl font-serif max-w-2xl mx-auto border-l-4 border-r-4 border-amber-900/20">
      <h3 className="text-3xl font-bold text-red-900 border-b-2 border-red-900 mb-1">{stats.name}</h3>
      <p className="italic text-gray-700 mb-2">{stats.size} {stats.type}, {stats.alignment}</p>
      
      <div className="border-t border-red-900 py-2">
        <p><strong className="text-red-900 font-bold">Classe Armatura:</strong> {stats.ac}</p>
        <p><strong className="text-red-900 font-bold">Punti Ferita:</strong> {stats.hp}</p>
        <p><strong className="text-red-900 font-bold">Velocità:</strong> {stats.speed}</p>
      </div>

      <div className="grid grid-cols-6 gap-2 text-center border-t border-red-900 py-4 my-2">
        <div>
            <p className="font-bold text-red-900">FOR</p>
            <p>{stats.abilities.str.value} ({stats.abilities.str.mod})</p>
        </div>
        <div>
            <p className="font-bold text-red-900">DES</p>
            <p>{stats.abilities.dex.value} ({stats.abilities.dex.mod})</p>
        </div>
        <div>
            <p className="font-bold text-red-900">COS</p>
            <p>{stats.abilities.con.value} ({stats.abilities.con.mod})</p>
        </div>
        <div>
            <p className="font-bold text-red-900">INT</p>
            <p>{stats.abilities.int.value} ({stats.abilities.int.mod})</p>
        </div>
        <div>
            <p className="font-bold text-red-900">SAG</p>
            <p>{stats.abilities.wis.value} ({stats.abilities.wis.mod})</p>
        </div>
        <div>
            <p className="font-bold text-red-900">CAR</p>
            <p>{stats.abilities.cha.value} ({stats.abilities.cha.mod})</p>
        </div>
      </div>

      <div className="border-t border-red-900 py-2 space-y-1">
        {stats.savingThrows && <p><strong className="text-red-900 font-bold">Tiri Salvezza:</strong> {stats.savingThrows}</p>}
        {stats.resistances && <p><strong className="text-red-900 font-bold">Resistenze:</strong> {stats.resistances.join(', ')}</p>}
      </div>

      {stats.specialAbilities && stats.specialAbilities.length > 0 && (
        <div className="border-t border-red-900 pt-4 mt-2">
            {stats.specialAbilities.map((sa, idx) => (
                <p key={idx} className="mb-3">
                    <strong className="italic text-red-950">{sa.name}.</strong> {sa.description}
                </p>
            ))}
        </div>
      )}

      <div className="border-t border-red-900 pt-4 mt-2">
        <h4 className="text-xl font-bold border-b border-red-900 mb-2 text-red-900">Attacchi</h4>
        {stats.actions.map((action, idx) => {
          const parts = action.description.split('⸻');
          const hasNarrative = parts.length > 1;
          
          return (
            <div key={idx} className="mb-4 pb-3 border-b border-red-900/30 last:border-b-0">
              <p className="mb-2">
                <strong className="italic text-red-950">{action.name}.</strong>
              </p>
              {hasNarrative ? (
                <div className="ml-4 space-y-2 text-sm">
                  {parts.map((part, partIdx) => {
                    const trimmedPart = part.trim();
                    if (!trimmedPart) return null;
                    
                    if (partIdx === 0) {
                      // Descrizione narrativa
                      return (
                        <div key={partIdx} className="italic text-gray-700 mb-2">
                          {trimmedPart.replace(/^DESCRIZIONE NARRATIVA:\s*/i, '')}
                        </div>
                      );
                    } else {
                      // Statistiche
                      return (
                        <div key={partIdx} className="text-gray-800">
                          <strong className="text-red-900 font-semibold">STATISTICHE:</strong> {trimmedPart.replace(/^STATISTICHE:\s*/i, '')}
                        </div>
                      );
                    }
                  })}
                </div>
              ) : (
                <p className="ml-4 text-sm">{action.description}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
