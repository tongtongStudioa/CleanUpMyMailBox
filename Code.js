function cleanUpMyMailBox() {
  Logger.log(searchEmailsToDelete().length)
  if (searchEmailsToDelete().length >= 0) {
    do {
      var emailsToDelete = searchEmailsToDelete();
      GmailApp.moveThreadsToTrash(emailsToDelete);
    } while (searchEmailsToDelete().length > 0);
  }
  Logger.log(searchEmailsToDelete().length);
}

function searchEmailsToDelete() {
  return GmailApp.search('older_than:1y -is:starred',0,100);
}
