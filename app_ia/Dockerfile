FROM python:3.10

WORKDIR /src

COPY ./requirements.txt /code/requirements.txt

RUN pip3 install jax --user
RUN pip3 install --no-cache-dir --upgrade -r /code/requirements.txt --user
RUN pip3 install "uvicorn[standard]" --user
RUN pip3 install google --user
RUN pip3 install --upgrade pymilvus --user
RUN pip3 install torch torchvision --user

COPY . /src

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "1212"]
