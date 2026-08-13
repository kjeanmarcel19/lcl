# Script de diagnostic pour l'erreur ERR_MODULE_NOT_FOUND sur Windows
# A exécuter dans le dossier du projet : powershell -ExecutionPolicy Bypass -File .\diagnostic.ps1

Write-Host "=== Diagnostic du projet lclorigin ===" -ForegroundColor Cyan

# 1. Vérifier que le fichier existe physiquement
$filePath = Join-Path $PSScriptRoot "server\_core\index.ts"
if (Test-Path $filePath) {
    Write-Host "[OK] Le fichier server\_core\index.ts existe" -ForegroundColor Green
    $item = Get-Item $filePath
    Write-Host "  Nom exact : $($item.Name)" -ForegroundColor Yellow
    Write-Host "  Taille : $($item.Length) octets"
    Write-Host "  Derniere modification : $($item.LastWriteTime)"
} else {
    Write-Host "[ERREUR] Le fichier server\_core\index.ts N'EXISTE PAS" -ForegroundColor Red
    Write-Host "  Contenu du dossier server\_core :" -ForegroundColor Yellow
    if (Test-Path (Join-Path $PSScriptRoot "server\_core")) {
        Get-ChildItem (Join-Path $PSScriptRoot "server\_core") | ForEach-Object { Write-Host "  - $($_.Name)" }
    } else {
        Write-Host "  Le dossier server\_core n'existe pas non plus !" -ForegroundColor Red
    }
}

# 2. Lister tout le contenu de server/
Write-Host ""
Write-Host "=== Contenu de server/ ===" -ForegroundColor Cyan
if (Test-Path (Join-Path $PSScriptRoot "server")) {
    Get-ChildItem (Join-Path $PSScriptRoot "server") -Recurse | ForEach-Object { Write-Host "  $($_.FullName.Replace($PSScriptRoot, '.'))" }
} else {
    Write-Host "  Le dossier server/ n'existe pas !" -ForegroundColor Red
}

# 3. Vérifier le tsconfig.json pour les chemins d'aliases
Write-Host ""
Write-Host "=== tsconfig.json ===" -ForegroundColor Cyan
$tsconfig = Get-Content (Join-Path $PSScriptRoot "tsconfig.json") -Raw
Write-Host $tsconfig

# 4. Version de tsx installée
Write-Host ""
Write-Host "=== Version tsx ===" -ForegroundColor Cyan
$tsxPkg = Join-Path $PSScriptRoot "node_modules\tsx\package.json"
if (Test-Path $tsxPkg) {
    $pkg = Get-Content $tsxPkg -Raw | ConvertFrom-Json
    Write-Host "tsx version: $($pkg.version)"
} else {
    Write-Host "node_modules/tsx introuvable - pnpm install n'a pas fonctionne correctement" -ForegroundColor Red
}

# 5. Proposer la solution
Write-Host ""
Write-Host "=== SOLUTION A APPLIQUER ===" -ForegroundColor Green
Write-Host "1. Ouvrez package.json"
Write-Host "2. Remplacez la ligne 'dev' par :"
Write-Host '   "dev": "cross-env NODE_ENV=development tsx watch ./server/start.ts"'
Write-Host ""
Write-Host "3. Creez le fichier server/start.ts avec :"
Write-Host '   import "./_core/index";'
