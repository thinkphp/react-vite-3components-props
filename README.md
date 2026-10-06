# Mini portofoliu

Portofoliu personal construit cu React, Vite și CSS simplu. Proiectele,
abilitățile și datele de contact sunt afișate cu trei componente reutilizabile
care primesc date prin props.

## Pornire

```bash
npm install
npm run dev
```

Pentru build-ul de producție: `npm run build`.

## Componente și props

- `ProjectCard` primește `title`, `description`, `technologies`, `number` și `url`.
- `SkillBadge` primește `name`, `level` și `index`.
- `ContactItem` primește `icon`, `label`, `value` și `href`.

Editează datele din `src/App.jsx` pentru a personaliza proiectele, abilitățile
și informațiile de contact.
