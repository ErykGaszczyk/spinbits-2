#!/bin/bash -e

while [[ true ]]; do
  if curl -sL --fail http://localhost:1337 -o /dev/null; then
    echo "strapi working"
    break;
  else
    echo "strapi (http://localhost:1337) not yet working, waiting"
    sleep 1
  fi
done
