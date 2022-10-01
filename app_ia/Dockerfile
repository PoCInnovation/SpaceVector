FROM python:3.10

WORKDIR /src

COPY ./requirements.txt /code/requirements.txt

RUN sudo pip install jax
RUN sudo pip install --no-cache-dir --upgrade -r /code/requirements.txt
RUN sudo pip install "uvicorn[standard]"
RUN sudo pip install google
RUN sudo pip3 install --upgrade pymilvus
RUN sudo pip3 install torch torchvision

COPY . /src

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "1212"]
