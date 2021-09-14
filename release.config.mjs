import esbuild from "esbuild";
import sveltePlugin from "esbuild-svelte";
import process from "process";
import autoPreprocess from "svelte-preprocess";

const banner = 
`/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source visit the plugins github repository (https://github.com/phibr0/obsidian-dictionary)
*/
`;

esbuild.build({
    banner: {
        js: banner,
    },
    entryPoints: ['src/main.ts'],
    bundle: true,
    external: ['obsidian'],
    format: 'cjs',
    minify: true,
    watch: false,
    logLevel: "info",
    treeShaking: true,
    plugins: [sveltePlugin({
        compileOptions: {
            css: true,
            dev: false,
        },
        preprocess: autoPreprocess(),
    })],
    outfile: 'main.js',
}).catch(() => process.exit(1));