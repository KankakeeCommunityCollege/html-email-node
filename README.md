# HTML Email Generator

> Generate HTML emails by configuring a JS object and running a command!

-----

## Contents

- [HTML Email Generator](#html-email-generator)
  - [Contents](#contents)
  - [Overview](#overview)
  - [Requirements](#requirements)
  - [Usage](#usage)
    - [1.) The `settings` object](#1-the-settings-object)
      - [`title`](#title)
      - [`fullWidthHeaderImage`](#fullwidthheaderimage)
      - [`bodyParagraphArray`](#bodyparagrapharray)
      - [`emailSignature`](#emailsignature)
      - [`footerMessage`](#footermessage)
    - [2.) Upload Image Files](#2-upload-image-files)
    - [3.) Build the email](#3-build-the-email)
    - [Example HTML email](#example-html-email)

## Overview

This project was built to be an HTML email template for generating HTML email files. KCC uses a common format for html emails particularly when we use them as a response to a form submission.

This mini-project was born out of the frustration of creating HTML email responses. HTML emails are constrained by the limitations of outdated rendering-engines that don't support modern-day HTML5 and CSS3. Instead of coding like it's 1999 we wanted to bring our HTML email workflow into the future.

This project uses a few custom JS modules and Nodejs to create HTML email files (with the `.html` file-extension.) No `dependencies` or `devDependencies` either!

## Requirements

- [Nodejs](https://nodejs.org/en/) - We recommend using [NVM](https://github.com/nvm-sh/nvm) to manage node versions

## Usage

1. Clone the repository and cd inside:
```bash
git clone git@github.com:KankakeeCommunityCollege/html-email-node.git
cd html-email-node
```

### 1.) The `settings` object

The html email file is configured using a `settings` object found in `./index.js`. This object requires the following keys: `title`, `fullWidthHeaderImage.src`, `fullWidthHeaderImage.alt`, `bodyParagraphArray`, `emailSignature`, and `footerMessage`. You will get errors when running index.js if any settings are missing.

```javascript
const settings = {
  title: 'Email Title',
  fullWidthHeaderImage: {
    src: 'url/to/image-file.png',
    alt: 'Alt text for image-file',
  },
  bodyParagraphArray: [
    par1,
    par2 //,
    // par3, ...
  ],
  emailSignature: 'signature content',
  footerMessage: 'footer content',
}
```

These settings correspond to the sections of the email as shown below.

![](./assets/img/example-generated-email-zones.jpg)

#### `title`

Required: Yes \
Type: String

`settings.title` Must be a string or a variable containing a string. It should be set to the title of your email.

#### `fullWidthHeaderImage`

Required: Yes \
Type: Object

The `fullWidthHeaderImage` key needs to be set to an object containing 2 keys. This object requires a `src` and `alt` key. The `src` should be set to the URL for your emails header image. The `alt` key should be the descriptive alternate text for the image.

Both `fullWidthHeaderImage.src` and `fullWidthHeaderImage.alt` should use a string for their values.

```javascript
const settings = {
  // other settings omitted
  fullWidthHeaderImage: {
    src: 'https://url/to/image.jpg',
    alt: 'Descriptive text for screen readers'
  }
}
```

**Note:** There is a folder on Web03 specifically for this purpose `websites/cdn/graphics`. Your image should be uploaded there already.

**Note:** This image will be the full width of the email's content.

#### `bodyParagraphArray`

Required: Yes
Type: Array

The `bodyParagraphArray` key requires an array as the value. Each item of this array needs to be a string representing one paragraph of the email's main body-text.

You can use inline-HTML but remember that modern HTML will not work as expected in html emails. Be sure to use a forward-slash in breaks, horizontal rules, and image elements (e.g. `<br />` and not `<br>`.)

For readability purposes it is usually best define each paragraph as its own  variable and then plug those variables into the `bodyParagraphArray` array.

#### `emailSignature`

Required: Yes
Type: String

The `emailSignature` is for the signature portion of the email. It should be set to a string representing your signature-block. Inline-html is allowed, but remember HTML5 won't work.

It is probably best to create a variable for the email signature and set the `emailSignature` key to your variable:
```javascript
const signature = `Wesley Zajicek<br />
        Technician II<br />
        Kankakee Community College<br />
        Marketing Department<br />
        <a style="display: inline-block;" href="mailto:wdzajicek@kcc.edu">wdzajicek@kcc.edu</a>`;
```

#### `footerMessage`

Required: Yes
Type: String

The `footerMessage` will be the bottom-most content in the email. IT usually contains general information about the email and/or copyright info.

**Note:** The `year` variable is defined towards the top of `index.js`. Use the `year` variable to set the copyright year and it will always be the current year.

### 2.) Upload Image Files

For images to work in the resulting HTML email the image files need to be hosted on a public KCC url.

__*There is a specific folder on `Web03` in the `cdn` subdomain for this purpose.*__ Upload all image files to `https://cdn.kcc.edu/graphics` which has the following path on `web03.kcc.edu`: `websites` > `kcc.edu` > `cdn` > `graphics` or `web03.kcc.edu/websites/kcc.edu/cdn/graphics/`.

### 3.) Build the email

To build the email either use the `build` npm script or run the `node` command:
```bash
npm run build
# or
node index.js
```

This creates a new `.html` file inside the `dist/` folder containing all of the awful, hideous, and old-school HTML for your email--annoying nested tables and all!

### Example HTML email

Below is a screenshot of an email generated using this project. You can see the full-width header-image at the top, the email body, signature line, and footer message. The logo and social media links are part of the template.

![Screenshot of a generated HTML email](./assets/img/example-generated-email.jpg)
