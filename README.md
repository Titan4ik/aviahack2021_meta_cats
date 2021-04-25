# aviahack2021_meta_cats

Сервис для цифровой подписи при оформлении услуг с применением qr кодов

## Описание
В директории model_api находятся исходники сервиса api

В директории frontent_src находятся исходники фронтенда

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
