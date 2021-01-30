# Python Image
FROM python:3

# Prevents __pycache__/ files
ENV PYTHONUNBUFFERED=1

# Working Directory
WORKDIR /code

# Copy and Install Requirements
COPY requirements.txt /code/
RUN pip install -r requirements.txt

# Copy Cod3e
COPY . /code/

