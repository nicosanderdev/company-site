/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_REACT_APP_CONTACT_FORM_FUNCTION_URL: string;
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}