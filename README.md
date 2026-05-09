# GAS TypeScript Template

A template for developing Google Apps Script (GAS) with TypeScript.

## Structure

```
src/           # Source code
  appsscript.json
  doGet.ts
  doPost.ts
dist/          # Build output (clasp push target)
```

## Setup

```bash
# Install dependencies
pnpm install

# Install clasp (if not installed)
pnpm add -g @google/clasp

# Login to clasp
clasp login

# Create a new project
clasp create --type webapp --title "Project Name"
# Or connect to an existing project
clasp clone <SCRIPT_ID>
```

Ensure `.clasp.json` has `rootDir` set to `dist`:

```json
{
  "scriptId": "<YOUR_SCRIPT_ID>",
  "rootDir": "dist"
}
```

## Commands

| Command | Description |
|---------|-------------|
| `pnpm build` | Compile TypeScript and copy appsscript.json to dist/ |
| `pnpm fix` | Auto-fix lint and formatting with Biome |

## Workflow

```bash
# 1. Build
pnpm build

# 2. Push to GAS
clasp push

# 3. Deploy
clasp deploy --description "description"
```

## References

- [Google Apps Script](https://developers.google.com/apps-script)
- [clasp](https://github.com/google/clasp)
- [Biome](https://biomejs.dev/)
