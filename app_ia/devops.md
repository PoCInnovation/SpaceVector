
build image

```
docker build -t spacevector-back:prod . 
```

run container

```
docker run -it  --rm -v ${PWD}:/app -p 8080:1212 spacevector-back:dev
```