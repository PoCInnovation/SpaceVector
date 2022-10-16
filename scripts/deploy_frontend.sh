cd /frontend
docker build -t spacevector-front:prod .
cd ..
docker-compose up -d