# typescript-intro
Learn basic of typescript


# Steps
- Init package.json. `npm init -y`.
- Install typescript. `npm i -D typescript`.
- Init TSC. `npx tsc --init`.
- Create src and dist folders. `mkdir src; mkdir dist`.
- Disable source maps and types in tsconfig. `sourceMap`, `declaration`, `declarationMap`.
- Add paths to tsconfig. `"include": ["./src/**/*"]` and `"exclude": ["node_modules", "dist"]`.
- Add test `ts` code in `src`.
- Compile js from ts. `npx tsc` and `npx tsc -w`.
- Create `index.html` file and link `index.js` file. Note: link `js` and not `ts`.
- Add `"build": "tsc -w"` and `"serve": "lite-server"` commands in `package.json`.
- Create `bs-config.json` with required config.