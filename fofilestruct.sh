#!/bin/bash

# This should be run into a shooting you just copied.

# it create the folders for the selection process

 mkdir raw ori lr ;  mv *.JPG lr;  mv *.NEF ori;  du -ksh *; cd lr;
 echo "Do your selection using the ./lr folder then run: "
 echo "cd lr"
 echo "node /a/fogram/src/forawconformist.js"

