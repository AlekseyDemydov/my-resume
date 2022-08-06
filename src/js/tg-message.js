import axios from 'axios';
const TOKEN = '5549614485:AAGcY5K-gkQFyyVmnVfvya0DsrcbL9Zi1h8';
const CHAT_ID = '-1001623087825';
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const form = document.getElementById('rg');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let message = `<b>info</b>\n`;
  message += `<b>name</b>${this.name.value}\n`;
  message += `<b>phone</b>${this.phone.value}`;

  axios
    .post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message,
    })
    .then(res => {
      this.name.value = '';
      this.phone.value = '';
    })
    .catch(err => {
      alert('warning');
    })
    .finally(() => {
      alert('message send');
    });
});
