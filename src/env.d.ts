// Define the type of the environment variables.
declare interface Env {
  readonly NODE_ENV: string;
  // The NG_APP_ prefix is mandatory
  readonly NG_APP_KEYCLOAK_URL: string;
  readonly NG_APP_KEYCLOAK_REALM: string;
  readonly NG_APP_KEYCLOAK_CLIENT_ID: string;
  // Replace the following with your own environment variables.
  // Example: NGX_VERSION: string;
  // [key: string]: any;
}

// Use import.meta.env.YOUR_ENV_VAR
declare interface ImportMeta {
  readonly env: Env;
}
