FROM python:3.10

WORKDIR /src

COPY ./requirements.txt /code/requirements.txt

ENV PATH /root/.local/.local/bin:${PATH}
RUN pip install -r /home/app/web/$ENVTYPE.txt; mkdir /log;

RUN pip install --upgrade pip
RUN pip3 install jax --user
RUN pip3 install --no-cache-dir --upgrade -r /code/requirements.txt --user
RUN pip3 install uvicorn[standard]
RUN pip install uvicorn
RUN pip3 install google --user
RUN pip3 install --upgrade pymilvus --user
RUN pip3 install torch torchvision --user

COPY . /src

RUN echo $(python3 -m site --user-base)

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]
