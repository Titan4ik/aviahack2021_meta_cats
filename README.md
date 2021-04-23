# aviahack2021_meta_cats
При первом запуске создайте venv
pip3 install virtualenv
virtualenv venv
и установите неоюходимые библиотеки вызвав
./venv/bin/python -mpip install -r ./aviahack2021_meta_cats/requirements.txt

Для установки дополнительных библиотек используйте
./venv/bin/python -mpip install lib_name
Затем вызовите
./venv/bin/python -mpip freeze > requirements.txt
Измененный requirements.txt занесите в git
