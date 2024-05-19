#!/bin/bash

docker compose rm -fsv

detach=$1

docker compose up --build $detach \
    --no-attach pgadmin
