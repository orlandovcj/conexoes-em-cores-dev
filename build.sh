#!/bin/bash

echo "🔨 Gerando build para Apache..."
echo ""

# Executar o build
npm run build

echo ""
echo "✅ Build concluído!"
echo ""
echo "📁 Os arquivos estão na pasta 'out/'"
echo ""
echo "📋 Para deploy no Apache, copie o conteúdo da pasta 'out/' para:"
echo "   - Linux: /var/www/html/conexoes-em-cores/"
echo "   - Windows (XAMPP): C:\\xampp\\htdocs\\conexoes-em-cores\\"
echo ""
