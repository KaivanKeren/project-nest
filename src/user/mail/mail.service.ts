export class MailService {
  send() {
    console.info('Mail sent');
  }
}

export const mailService = new MailService();