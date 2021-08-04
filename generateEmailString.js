const { createParagraph, createParagraphsFromArr } = require('./createParagraphs');
const createEmailFooter = require('./createEmailFooter');

function generateEmailString(settings) {
  console.log(settings.bodyParagraphArray.length);

  let html =
    `<!DOCTYPE html>
  <html lang="en">

  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>${settings.title}</title>

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <style type="text/css">
      /* CLIENT-SPECIFIC STYLES */
      body,
      table,
      td,
      a {
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }

      table,
      td {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }

      img {
        -ms-interpolation-mode: bicubic;
      }

      /* RESET STYLES */
      img {
        border: 0;
        height: auto;
        line-height: 100%;
        outline: none;
        text-decoration: none;
      }

      table {
        border-collapse: collapse !important;
      }

      body {
        height: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        width: 100% !important;
      }

      /* iOS BLUE LINKS */
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }

      /* GMAIL BLUE LINKS */
      u+#body a {
        color: inherit;
        text-decoration: none;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        line-height: inherit;
      }

      /* SAMSUNG MAIL BLUE LINKS */
      #MessageViewBody a {
        color: inherit;
        text-decoration: none;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        line-height: inherit;
      }

      /* Universal styles for links and stuff */
      a {
        color: #0051a7;
        font-weight: bold;
      }

      a:hover {
        color: #022b55;
        text-decoration: none;
      }

      a.button:hover {
        background-color: #022b55 !important;
      }

      /* Responsive styles */
      @media screen and (max-width: 600px) {
        h1 {
          font-size: 24px !important;
        }
      }
    </style>
  </head>

  <body id="body" style="margin: 0 !important; padding: 0 !important;">
  <!--[if mso]>
  <table border="0" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
      <td width="600">
  <![endif]-->
  <table width="100%" style="color:#333333; background-color: #FFFFFF; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 28px; max-width:600px; margin-top:0; margin-right:auto; margin-bottom:0; margin-left:auto; padding-top:20px; padding-right: 16px; padding-bottom:20px; padding-left: 16px;"  border="0" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
      <td style="padding-left: 16px; padding-right: 16px;">
        <img border="0" height="338" width="600" style="display:inline-block;margin: 5px; -ms-interpolation-mode: bicubic;" src="${settings.fullWidthHeaderImage.src}" alt="${settings.fullWidthHeaderImage.alt}" />
      </td>
    </tr>
    <tr>
      <td style="padding-left: 16px; padding-right: 16px;">
        ${createParagraphsFromArr(settings.bodyParagraphArray)}
        ${createParagraph(settings.emailSignature)}
        </td>
      </tr>
      <tr style="color: #888888;">
        <td style=" font-size: 16px; margin: 0 0 0 0; padding: 32px 20px;">
          <center>
            <a href="https://www.kcc.edu/" style="display:inline-block;margin: 5px;">
              <img border="0" height="127" width="300" style="-ms-interpolation-mode: bicubic;" src="https://cdn.kcc.edu/graphics/kcclogo-email.png" alt="KCC logo" />
            </a><br/>
            <table width="250" style="color:#333333; font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 28px; max-width:600px; margin-top:0; margin-right:auto; margin-bottom:0; margin-left:auto; padding-top:20px; padding-right:0; padding-bottom:20px; padding-left: 0;"  border="0" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td align="center" style="vertical-align: middle; font-size: 16px; margin: 0 0 0 0; padding: 32px 5px;">
                  <a href="https://twitter.com/KCCedu/" style="display:inline-block;margin: 5px;">
                    <img border="0" height="35" width="35" style="-ms-interpolation-mode: bicubic;" src="https://cdn.kcc.edu/graphics/twitter.png" alt="twitter" />
                  </a>
                </td>
                <td align="center" style="vertical-align: middle; font-size: 16px; margin: 0 0 0 0; padding: 32px 5px;">
                  <a href="https://www.facebook.com/KankakeeCommunityCollege/" style="display:inline-block;margin: 5px;">
                    <img border="0" height="35" width="35" style="-ms-interpolation-mode: bicubic;" src="https://cdn.kcc.edu/graphics/facebook.png" alt="facebook" />
                  </a>
                </td>
                <td align="center" style="vertical-align: middle; font-size: 16px; margin: 0 0 0 0; padding: 32px 5px;">
                  <a href="https://www.instagram.com/kccedu/" style="display:inline-block;margin: 5px;">
                    <img border="0" height="35" width="35" style="-ms-interpolation-mode: bicubic;" src="https://cdn.kcc.edu/graphics/instagram.png" alt="instagram" />
                  </a>
                </td>
                <td align="center" style="vertical-align: middle; font-size: 16px; margin: 0 0 0 0; padding: 32px 5px;">
                  <a href="https://www.youtube.com/user/KankakeeCommCollege" style="display:inline-block;margin: 5px;">
                    <img border="0" height="35" width="35" style="-ms-interpolation-mode: bicubic;" src="https://cdn.kcc.edu/graphics/youtube.png" alt="youtube" />
                  </a>
                </td>
              </tr>
            </table>
          </center>
          ${createEmailFooter(settings.footerMessage)}
        </td>
      </tr>
  </table>
  <!--[if mso]>
      </td>
    </tr>
  </table>
  <![endif]-->
  </body>
  </html>`;

  return html;
}

module.exports = generateEmailString;