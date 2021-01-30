# Python Image
FROM python:3-alphine

# Prevents __pycache__/ files
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE 1

# Working Directory
WORKDIR /app

# Copy and Install Requirements
COPY requirements.txt /app/
RUN pip install -r requirements.txt

# Copy Code
COPY . /app/

# Install Gunicorn
RUN pip3 install gunicorn==20.0.4
