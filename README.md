# django-angular-token-auth

```bash
virtualenv venv
. venv/bin/activate
pip install -r requirements.txt 
bower install
./manage.py migrate
./manage.py syncdb
./manage.py createsuperuser
# run server
python manage.py runserver 8001
```

Open browser to http://127.0.0.1:8001/login
Login, and bam. Hello data.

