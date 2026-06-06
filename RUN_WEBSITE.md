# How to Run This Website

Follow these steps after unzipping the project.

## Requirements

Install Node.js first:

- Download Node.js from https://nodejs.org/
- Use Node.js 20 or newer

## Start The Website

Open PowerShell in the project folder, then run:

```powershell
cd C:\Path\To\Advanced-English-Design
corepack pnpm install
$env:PORT='5173'
$env:BASE_PATH='/'
corepack pnpm --dir artifacts/mae-website run dev
```

Now open this in your browser:

```text
http://localhost:5173/
```

## If Port 5173 Is Busy

Use a different port:

```powershell
$env:PORT='5174'
$env:BASE_PATH='/'
corepack pnpm --dir artifacts/mae-website run dev
```

Then open:

```text
http://localhost:5174/
```

## Stop The Website

In the terminal where the website is running, press:

```text
Ctrl + C
```

## Important Notes

- Run the commands from the main project folder, not from `artifacts/mae-website`.
- Do not use `npm install` for this project. Use `corepack pnpm install`.
- If `pnpm` is not recognized, use `corepack pnpm` exactly as shown above.
- If you zip this project for someone else, you can delete `node_modules` before zipping. They can recreate it by running `corepack pnpm install`.

## Common Error

If you see this:

```text
PORT environment variable is required but was not provided.
```

Run:

```powershell
$env:PORT='5173'
$env:BASE_PATH='/'
corepack pnpm --dir artifacts/mae-website run dev
```

