/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly ADMIN_USERNAME: string;
  readonly ADMIN_PASSWORD: string;
  readonly ADMIN_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
