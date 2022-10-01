
build image

```
docker build -t spacevector-front:dev . 
```

run container

```
docker run -it  --rm -v ${PWD}:/app -v /app/node_modules -p 3000:3000 spacevector-front:dev
```

build image

```
docker build -t spacevector-front:prod . 
```

run container

```
docker run -it  --rm -v ${PWD}:/app -v /app/node_modules -p 3000:3000 spacevector-front:prod
```