cd /src/frontend
docker build -t spacevector-front:prod .
cd /src
docker-compose up -d