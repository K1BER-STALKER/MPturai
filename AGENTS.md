<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# MPturai

Informacinė svetainė 3D nekilnojamojo turto skenavimo veiklai. Rodome
Matterport turų portfolio, paslaugas ir kontaktus.

Prie repo dirba **trys žmonės, visi su Claude Code**. Šis failas yra bendros
taisyklės — laikykitės jų, kad trys skirtingos sesijos nekurtų trijų skirtingų
stilių.

## Kalba

- **Visas matomas tekstas — lietuvių kalba.** Jokio angliško teksto vartotojui.
- **Kodas — anglų kalba**: kintamųjų, funkcijų, komponentų ir failų pavadinimai
  (`getProperties`, `PropertyCard`, `property-card.tsx`).
- **Komentarai — lietuvių kalba.**
- **URL adresai — lietuviški**: `/objektai`, `/paslaugos`, `/kontaktai`.

## Kaip pridėti naują objektą (dažniausia užduotis)

Redaguojamas **tik** `src/data/properties.ts` — pridedamas naujas įrašas į
masyvą. Puslapis `/objektai/<slug>`, sąrašas ir metaduomenys sukuriami
automatiškai. **Nekurkite naujo puslapio failo kiekvienam objektui.**

`matterportId` yra `m=` reikšmė iš Matterport dalinimosi nuorodos:
`https://my.matterport.com/show/?m=SxQL3iGyoDo` → `"SxQL3iGyoDo"`.

⚠️ `src/data/properties.ts` šiuo metu turi **pavyzdinius** objektus su žyma
„PAVYZDYS" pavadinime. Juos reikia pakeisti tikrais — nepalikite jų svetainėje
klientams.

## Kur kas yra

| Kelias                   | Kas ten                                                       |
| ------------------------ | ------------------------------------------------------------- |
| `src/app/`               | Puslapiai. Aplankas + `page.tsx` = URL adresas.               |
| `src/components/ui/`     | Bendri elementai: `Button`, `Card`, `Container`.              |
| `src/components/layout/` | Antraštė (header) ir poraštė (footer).                        |
| `src/components/`        | Sudėtingesni komponentai (`PropertyCard`, `MatterportEmbed`). |
| `src/data/properties.ts` | Objektų sąrašas — turinys, ne kodas.                          |
| `src/lib/config.ts`      | Įmonės kontaktai, pavadinimas, navigacija.                    |
| `src/lib/properties.ts`  | Duomenų gavimo funkcijos.                                     |
| `src/types/`             | Bendri TypeScript tipai.                                      |
| `public/`                | Nuotraukos ir statiniai failai.                               |

## Taisyklės rašant kodą

1. **Kontaktai ir pavadinimas — tik iš `src/lib/config.ts`.** Niekada
   neįrašykite el. pašto, telefono ar įmonės pavadinimo tiesiai į komponentą.
2. **Spalvos — tik dizaino žymos** (`bg-surface`, `text-muted`,
   `border-border`, `text-accent`). Jokių `#hex` ar `bg-blue-500` komponentuose.
   Naujos spalvos pridedamos `src/app/globals.css` — tada tamsi tema veikia
   savaime.
3. **Prieš kuriant naują komponentą patikrinkite `src/components/ui/`** — gal
   toks jau yra. Trys žmonės = trys mygtukų versijos, jei nepatikrinsite.
4. **Duomenys pasiekiami tik per `src/lib/properties.ts`.** Puslapiai
   neimportuoja `src/data/properties.ts` tiesiogiai — taip vėliau pakeisime
   duomenų šaltinį į duomenų bazę pakeisdami vieną failą.
5. **Puslapiai pagal nutylėjimą yra serverio komponentai.** `"use client"`
   dėkite tik ten, kur tikrai reikia (`useState`, `onClick`, `usePathname`).
6. Naujas puslapis matomas meniu tik pridėjus jį į `nav` masyvą
   `src/lib/config.ts`.

## Prieš kiekvieną `git push`

```bash
npm run format
npm run lint
npm run typecheck
npm run build
```

Tie patys patikrinimai veikia GitHub Actions — jei nepraeina lokaliai,
nepraeis ir PR'e.

Jei `npm run typecheck` skundžiasi dėl failo, kurį ką tik ištrynėte ar
pervadinote (`Cannot find module '../../src/app/...'`), tai senas `.next`
katalogas. Ištrinkite jį ir paleiskite iš naujo — CI to nepatiria, nes ten
viskas statoma iš naujo.

## Git

- **Niekada nedirbkite tiesiai `main` šakoje.** Visada nauja šaka + Pull Request.
- Šakų pavadinimai: `feat/`, `fix/`, `chore/`, `refactor/`.
- Prieš pradedant: `git checkout main && git pull`.
- Detaliau — [CONTRIBUTING.md](CONTRIBUTING.md).

## Ko nedaryti

- Nekurkite kontaktų formos be serverio dalies — forma, kuri niekur nesiunčia
  žinutės, yra blogiau nei jos nebuvimas. Kol kas naudojame `mailto:` ir `tel:`.
- Nekomituokite `.env.local` ar jokių slaptažodžių / raktų.
- Nekeiskite `AGENTS.md` viršuje esančio `nextjs-agent-rules` bloko — jį
  automatiškai atkuria `next dev`.
