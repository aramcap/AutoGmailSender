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
