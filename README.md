# Cookies module ES6
Cookies for website

This module is intended to implement cookies on a website page.
The module is implemented in a native Java script, using the ES6 standard.

USAGE:

1.  Move the file "cookieConsent.js" to your project folder or copy the code from the "cookieConsent.js" file to your separate cookies file.

2.  Import using command 'import cookieConsent from ...' in your main file 'main.js'.

3.  In the main file call the function cookieConsent({}) inside which, as a parameter, pass an objects with the following properties or an empty string as the default parameter:

```
cookiesConsent(
  { // cookies window options
    backgroundColor: 'your background color', // (default: 'rgb(255, 183, 0);')
    height: 'your height', // (default: 80px)
    text: 'your text', // (default: 'Я даю согласие на использование cookies')
    textColor: 'your text color', // (default: 'black')
    link: 'your link cookie policy', // (default: 'https://2gdpr.com/cookies')
    linkColor: 'your text link color', // (default: '#fff')
    btnBorder: 'your button border color', // (default: 'black')
    btnTextColor: 'your button text color', // (default: '#fff')
    cancel: 'your text cancel', // (default: 'Accept')
    confirm: 'your text confirm' // (default: 'Cancel')
  },
  { // technical specifications cookies
    nameConsent: 'your name consent cookies', // (default: 'site_consent')
    value: 'your value', // (default: 'true')
    expires: 'your expires date' // (default: 'Session')
  }
);
```

4. Import your script into the file "cookieConsent.js" and write the call to the function myScripts():
```
function myScripts() {
  //your scripts
}
```
