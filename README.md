# Cookies module ES6
Cookies for website

This module is intended to implement cookies on a website page.
The module is implemented in a native Java script, using the ES6 standard.

USAGE:

1.  Move the file "cookieConsent.js" to your project folder or copy the code from the "cookieConsent.js" file to your separate cookies file.

2.  Import using command 'import cookieConsent from ...' in your main file 'main.js'.

3.  In the main file call the function cookieConsent({}) inside which, as a parameter, pass an objects with the following properties or an empty string as the default parameter('') :

```
cookiesConsent(
  { // cookies window options
    backgroundColor: 'your background color', // ('' == 'rgb(255, 183, 0);')
    height: 'your height', // ('' == 80px)
    text: 'your text', // ('' == 'Я даю согласие на использование cookies')
    textColor: 'your text color', // ('' == 'black')
    link: 'your link cookie policy', // ('' == 'https://2gdpr.com/cookies')
    linkColor: 'your text link color', // ('' == '#fff')
    btnBorder: 'your button border color', // ('' == 'black')
    btnTextColor: 'your button text color', // ('' == '#fff')
    cancel: 'your text cancel', // ('' == 'Accept')
    confirm: 'your text confirm' // ('' == 'Cancel')
  },
  { // technical specifications cookies
    nameConsent: 'your name consent cookies', // ('' == 'site_consent')
    value: 'your value', // ('' == 'true')
    expires: 'your expires date' // ('' == 'Session')
  }
);
```

4. Import your scripts into the “cookieConsent.js” file and write their calls to the myScripts() function:
```
function myScripts() {
  //your scripts();
}
```
