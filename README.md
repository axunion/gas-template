# GAS TypeScript Template

A template project for developing Google Apps Script (GAS) applications with TypeScript.

## 🚀 Features

- TypeScript development
- Code formatting and linting with Biome
- Basic GET/POST request handling
- Type safety

## 🛠️ Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Development Environment Setup

To use this project, you'll need the following tools:

- [clasp](https://github.com/google/clasp) - Command line tool for GAS
- Node.js (v16+ recommended)

Install clasp:
```bash
npm install -g @google/clasp
```

### 3. Connect to GAS Project

1. Login to Google account with clasp:
```bash
clasp login
```

2. Create a new GAS project:
```bash
clasp create --type webapp --title "Your Project Name"
```

Or connect to an existing project:
```bash
clasp clone <SCRIPT_ID>
```

## 📝 Development Workflow

### Code Quality Management

```bash
# Check formatting
npm run format

# Apply formatting
npm run format:write

# Check linting
npm run lint

# Fix linting issues
npm run lint:write

# Check formatting + linting
npm run check

# Fix formatting + linting
npm run check:write
```

### Deployment

TypeScript files need to be transpiled to JavaScript before deployment:

```bash
# Deploy to GAS
clasp push

# Deploy as web app
clasp deploy
```

## 🔧 Customization

### Adding New Features

1. Create new `.ts` files in the `src/` directory
2. Modify `doGet.ts` or `doPost.ts` as needed
3. Set up TypeScript type definitions appropriately

### Configuration Changes

- **Time Zone**: Change `timeZone` in `src/appsscript.json`
- **TypeScript Settings**: Edit `tsconfig.json`
- **Biome Settings**: Create `biome.json` for detailed configuration

## 📚 References

- [Google Apps Script Official Documentation](https://developers.google.com/apps-script)
- [clasp Official Documentation](https://github.com/google/clasp)
- [TypeScript Official Documentation](https://www.typescriptlang.org/)
- [Biome Official Documentation](https://biomejs.dev/)
