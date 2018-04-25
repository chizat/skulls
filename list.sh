for file in wavs/*
do
  echo node soundTest.js -f $file -s 1
done