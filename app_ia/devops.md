
build image

```
docker build -t spacevector-back:dev . 
```

run container

```
docker run -it  --rm -v ${PWD}:/app -p 8080:8080 spacevector-back:dev
```