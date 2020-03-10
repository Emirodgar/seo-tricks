@ECHO OFF
cd C:\wamp\www\seo-tricks\assets\py
py getsourceallseotricks.py

echo Commit on GitHub
echo.

git.exe add .
git.exe commit -am "Updated json"
git.exe push

echo.
echo All done :)

pause
