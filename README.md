# react-share-simplified

> Social media share buttons inspired by react-share.
 
* Share buttons for:
  - Facebook
  - Twitter
  - Google+
  - Whatsapp
  - email

#### Demo

[View demo](https://sachinkammar.github.io/react-share-simplified/)

To run demo: clone repo and run `npm install && npm start`
and open `http://localhost:3000`.

## Install

```shell
npm install react-share-simplified --save
```

### Share buttons

```js
import ReactShare from 'react-share-simplified';

<ReactShare
    url={url}
    title={title}
    facebook={true} // true or false
    facebookClass="iconStyle" //className to Style share button 
    googlePlus={true} // true or false
    googlePlusClass="iconStyle"
    twitter={true} // true or false
    twitterClass="iconStyle"
    email={true} // true or false
    emailClass="iconStyle"
    whatsapp={true} // true or false
    whatsappClass="iconStyle"
    iconSize={32} // Icon size 
    addClass="className"  //add className to style the whole div
/>
```
Note: This is simplified version of react-share package. All Credits to nyde/react-share.