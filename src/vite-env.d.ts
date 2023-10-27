/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORM_KEY: string;
  readonly VITE_SERVER_PREFIX: string;
  readonly VITE_AUDIENCE_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
