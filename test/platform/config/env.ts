

export interface Env {
    baseUrl : string
    [key: string]: string;
}

const env: Env = {
    baseUrl:"https://the-internet.herokuapp.com/"
}

export const getEnv = (): Env => {
    return env
}