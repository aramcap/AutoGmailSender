# English: Script to automatically send emails through Gmail: AutoGmailSender-v1.0

This script for Google Apps Scripts automatically sends an email to Google Contacts group.

## Installation

The first thing is open Google Contacts application and create a group called *Example group*. We add to this group all the contacts to which we want to send the email.

Then we opened Google Drive and created a new document of type *Google Apps Script*. If it does not appear in the list, we will give *More* and connect with more applications.

Once we have an open document, we can give it the name: AutoGmailSender-v1.0

We copy the content of this script into the file, replacing everything there is and saving it.

```js
function autoGmailSender() {

  var group = ContactsApp.getContactGroup('Example group');
  var contacts = group.getContacts();
  
  for(var num_contact in contacts) {
    MailApp.sendEmail({
     to: contacts[num_contact].getEmails()[0].getAddress(),
     subject: "Hi!",
     htmlBody: "How are you?",
   });
  }
}
```

Then, in the Apps Scripts editor, we click on *Execute*. It will ask us for permission to send emails and to get the list of contacts, so we accept and emails are already sent.

To execute it automatically we must click on the top menu in *Edit > Activators of the active project* and configure an activator in such a way:

* 1st Add a new activator
* 2nd Run: *autoGmailSender*
* 3rd Events: *Based on time*
* 4th We are going to program it, for example, monthly: *Monthly timer*
* 5th The day we want to send it
* 6th The time frame in which we want to be sent
* 7th Save

I hope you find it useful!

---

# Español: Script para enviar automáticamente correos por Gmail: AutoGmailSender-v1.0

Este script para Google Apps Scripts envía automáticamente un email a un grupo de Google Contacts.

## Instalación

Lo primero es abrir la aplicación Google Contactos y crear un grupo denominado *Grupo de ejemplo*. A este grupo añadimos todos los contactos a los que queramos enviarle el email.

Luego abrimos Google Drive y creamos un documento nuevo de tipo *Google Apps Script*. Si no nos aparece en la lista le damos a *Más* y conectar con más aplicaciones.

Una vez tengamos un documento abierto, podemos ponerle el nombre: AutoGmailSender-v1.0

Copiamos el contenido de este script dentro del archivo reemplazando todo lo que hay y lo guardamos.

```js
function autoGmailSender() {

  var group = ContactsApp.getContactGroup('Grupo de ejemplo');
  var contacts = group.getContacts();
  
  for(var num_contact in contacts){
    MailApp.sendEmail({
     to: contacts[num_contact].getEmails()[0].getAddress(),
     subject: "Hi!",
     htmlBody: "How are you?",
   });
  }
}
```

Luego, en el editor de Apps Scripts, hacemos click en *Ejecutar*. Nos pedirá permisos para enviar correos y para consultar la lista de contactos, por lo que aceptamos y ya se envían los emails.

Para ejecutarlo automáticamente debemos hacer click en el menú superior en *Editar > Activadores del proyecto activo* y configuramos un activador de tal forma:

* 1º Añadir un activador nuevo
* 2º Ejecutar: *autoGmailSender*
* 3º Eventos: *Basado en tiempo*
* 4º Lo vamos a programar, por ejemplo, mensualmente: *Temporizador mensual*
* 5º El día que queramos enviarlo
* 6º El marco horario en el que queremos que se envíe
* 7º Guardar

Espero que sea de utilidad!
