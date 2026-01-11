/**
 * Dichiarazioni di tipo per i moduli di immagini
 * 
 * Permette a TypeScript di riconoscere gli import di file immagine (PNG, JPG, etc.)
 * come moduli che esportano stringhe (URL delle immagini processate da Vite).
 */
declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.webp' {
  const value: string;
  export default value;
}
