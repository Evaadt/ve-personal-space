#!/bin/bash

# Carrega o nvm (Node Version Manager)
# É crucial que o nvm esteja configurado para ser carregado no seu shell.
# Se o nvm não for carregado automaticamente, esta linha pode precisar de ser ajustada.
# Geralmente, o nvm é inicializado no ~/.bashrc ou ~/.zshrc.
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
nvm use 20

# Caminho absoluto
FRONTEND_DIR="./frontend"
BACKEND_DIR="./backend"

echo "🚀 Iniciando backend..."
cd "$BACKEND_DIR" || { echo "Erro: Diretório do backend não encontrado."; exit 1; }
php artisan serve --host=127.0.0.1 --port=8002 &
BACK_PID=$!
cd ..

echo "🚀 Iniciando frontend..."
cd "$FRONTEND_DIR" || { echo "Erro: Diretório do frontend não encontrado."; exit 1; }
ng serve --port 4201 &
FRONT_PID=$!
cd ..

echo "Serviços iniciados. Pressione Ctrl+C para encerrar ambos."

# Esperar processos (Ctrl+C para encerrar ambos)
# O 'trap' garante que, ao pressionar Ctrl+C, ambos os processos sejam encerrados.
trap "echo -e '\n🛑 Encerrando serviços...'; kill $BACK_PID $FRONT_PID 2>/dev/null; wait $BACK_PID $FRONT_PID 2>/dev/null; echo 'Serviços encerrados.'" SIGINT
wait $BACK_PID $FRONT_PID