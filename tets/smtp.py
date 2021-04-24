import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.application import MIMEApplication

def send_mails(customer_email, producer_email, files, service_name):
    mail_content = 'Вы успешно оформили услугу "' + service_name + '". Все подписанные и заполненные вами документы высланы в прикрепленных файлах.'
    sender_address='mai.hackathon.mts.meta.cats@gmail.com'
    
    message = MIMEMultipart()
    message['From'] = sender_address
    message.attach(MIMEText(mail_content, 'plain'))

    for pdffile in files:
        with open(pdffile, "rb") as f:
            attach = MIMEApplication(f.read(),_subtype="pdf")
        attach.add_header('Content-Disposition','attachment',filename=str(pdffile))
        message.attach(attach)

    session = smtplib.SMTP('smtp.gmail.com', 587)
    session.starttls()
    session.login(sender_address, 'Hackathon1234#')
    
    message['Subject'] = 'Вами была оформлена услуга "' + service_name + '"'
    message['To'] = customer_email
    session.sendmail(sender_address, customer_email, message.as_string())
    
    message['Subject'] = 'Пользователь "' + customer_email + '" офрмил услугу "' + service_name + '"'
    message['To'] = producer_email
    session.sendmail(sender_address, producer_email, message.as_string())
    
    session.quit()
    

service_name = 'Услуга №1'
files = ['file1.pdf', 'file2.pdf']
receiver_address = ['vin-nikov@yandex.ru', '15252vlad@gmail.com']

send_mails(receiver_address[0], receiver_address[1], files, service_name)

