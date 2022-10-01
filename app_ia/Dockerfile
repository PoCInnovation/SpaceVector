FROM python:3.10

WORKDIR /src

COPY ./requirements.txt /code/requirements.txt

RUN pip install jax
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt
RUN pip install "uvicorn[standard]"
RUN pip install google
RUN pip3 install --upgrade pymilvus
RUN pip3 install torch torchvision

COPY . /src

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "1212"]
