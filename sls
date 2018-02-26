#!/bin/bash

if [ -f .env ]; then
   export $(cat .env | grep -v ^# | xargs)
fi

./node_modules/serverless/bin/serverless "$@"
