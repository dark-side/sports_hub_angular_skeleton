// Define the type of the environment variables.
declare interface Env {
  readonly NODE_ENV: string;
  [key: string]: string;
}

declare interface ImportMeta {
  readonly env: Env;
}

