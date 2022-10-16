
build image

```
docker build -t spacevector-back:prod . 
```

run container

```
docker run -it  --rm -v ${PWD}:/app -p 8000:8000 spacevector-back:dev
```