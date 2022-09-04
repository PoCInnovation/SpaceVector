FROM python:3.10

WORKDIR /app

COPY ./requirements.txt /code/requirements.txt

RUN pip install jax
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt
RUN pip install "uvicorn[standard]"

COPY . /app

#
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "1212"]
