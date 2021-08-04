function createEmailFooter(footerMessage) {
  let html = `<p style="margin: 0 0 20px 0;">${footerMessage}</p>`;
  
  return html;
}

module.exports = createEmailFooter;