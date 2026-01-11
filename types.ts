// Fixed: Added React import to resolve missing 'React' namespace error for React.ReactNode
import React from 'react';

export interface Section {
  id: string;
  title: string;
  emoji?: string;
  content: React.ReactNode;
}

export interface Stat {
  label: string;
  value: string | number;
  mod?: string;
}

export interface MonsterStats {
  name: string;
  tagline: string;
  size: string;
  type: string;
  alignment: string;
  ac: string;
  hp: string;
  speed: string;
  abilities: {
    str: Stat;
    dex: Stat;
    con: Stat;
    int: Stat;
    wis: Stat;
    cha: Stat;
  };
  savingThrows?: string;
  resistances?: string[];
  actions: Array<{ name: string; description: string }>;
  specialAbilities?: Array<{ name: string; description: string }>;
}