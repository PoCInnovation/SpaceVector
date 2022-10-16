FROM python:3.10

WORKDIR /src

RUN apt-get install sudo

RUN useradd SpaceVector && \
    usermod -aG sudo SpaceVector

RUN mkdir /code && \
    chown -R SpaceVector:sudo /code && \
    chown -R SpaceVector:sudo /src && \
    mkdir /home/SpaceVector && \
    chown -R SpaceVector:sudo /home/SpaceVector

USER SpaceVector

ENV PATH="${PATH}:/home/SpaceVector/.local/bin"

COPY ./requirements.txt /code/requirements.txt
RUN pip3 install --upgrade pip

RUN pip3 install --no-cache-dir --upgrade -r /code/requirements.txt --user
RUN pip3 install jax --user
RUN pip3 install uvicorn[standard] --user
RUN pip install uvicorn --user
RUN pip3 install google --user
RUN pip3 install --upgrade pymilvus --user
RUN pip3 install torch torchvision --user

COPY . /src

RUN sudo chmod -R 777 /src && sudo chown -R SpaceVector:sudo /src

CMD ["python3", "app.py", "upload_data"]

CMD ["python3", "-m", "uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]
