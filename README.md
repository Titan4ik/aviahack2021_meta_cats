# aviahack2021_meta_cats
При первом запуске создайте venv
python -m venv .\venv
и установите неоюходимые библиотеки вызвав .\helper_scripts\install_libs.bat

Для установки дополнительных библиотек используйте
.\venv\Scripts\python.exe -mpip install lib_name
Затем вызовите
.\helper_scripts\update_requirements.bat
Измененный requirements.txt занесите в git
