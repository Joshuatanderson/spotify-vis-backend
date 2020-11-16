declare global {
    namespace NodeJS {
        interface ProcessEnv {
            GITHUB_AUTH_TOKEN: string;
            CLIENT_ID: string;
            CLIENT_SECRET: string;
            REDIRECT_URI: string;
        }
    }
}
  export{}