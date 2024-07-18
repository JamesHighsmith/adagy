// src/urdf-loader.d.ts
declare module 'urdf-loader' {
  class URDFLoader {
    load(url: string, callback: (result: any) => void): void;
  }
  export = URDFLoader;
}
