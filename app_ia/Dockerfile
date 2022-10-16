FROM python:3.10

WORKDIR /src

RUN mkdir /code && chown -R SpaceVector:SpaceVector /code

USER SpaceVector

COPY ./requirements.txt /code/requirements.txt

RUN python3 -m venv my-env

RUN rm /bin/sh && ln -s /bin/bash /bin/sh
RUN source my-env/bin/activate

RUN pip install --upgrade pip

RUN pip3 install --no-cache-dir --upgrade -r /code/requirements.txt --user
RUN pip3 install jax --user
RUN pip3 install uvicorn[standard] --user
RUN pip install uvicorn --user
RUN pip3 install google --user
RUN pip3 install --upgrade pymilvus --user
RUN pip3 install torch torchvision --user

COPY . /src

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]
