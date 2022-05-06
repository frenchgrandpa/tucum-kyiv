#!/usr/bin/env bash

if [ $VERCEL_GIT_COMMIT_REF = "master" ]; then
  echo "✅ - Build can proceed"
  exit 1
else
  echo "🛑 - Build cancelled"
  exit 0
fi

