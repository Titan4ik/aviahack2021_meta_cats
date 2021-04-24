import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.application import MIMEApplication

service_name = 'Услуга №1'
files = ['file1.pdf', 'file2.pdf']
receiver_address = ['vin-nikov@yandex.ru', '15252vlad@gmail.com']


mail_subject = 'Вами была оформлена услуга "' + service_name + '"'
mail_content = 'Вы успешно оформили услугу "' + service_name + '". Все подписанные и заполненные вами документы высланы в прикрепленных файлах.'
sender_address='mai.hackathon.mts.meta.cats@gmail.com'
message = MIMEMultipart()
message['From'] = sender_address
message['Subject'] = mail_subject

message.attach(MIMEText(mail_content, 'plain'))

for pdffile in files:
    with open(pdffile, "rb") as f:
        attach = MIMEApplication(f.read(),_subtype="pdf")
    attach.add_header('Content-Disposition','attachment',filename=str(pdffile))
    message.attach(attach)

session = smtplib.SMTP('smtp.gmail.com', 587)
session.starttls()
session.login(sender_address, 'Hackathon1234#')
for rec in receiver_address:
    message['To'] = rec
    session.sendmail(sender_address, rec, message.as_string())
session.quit()

