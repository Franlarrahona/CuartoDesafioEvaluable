import path from 'path';

const config ={
    PORT:8080,
    DIRNAME: path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:\/)/, '$1')),
    get UPLOAD_DIR() { return `${this.DIRNAME}/public/img` }
}

export default config 