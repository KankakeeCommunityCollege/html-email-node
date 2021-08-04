exports.createParagraphsFromArr = (paragraphsArr) => {
  let arr = [];

  for (let i = 0, len = paragraphsArr.length; i < len; i++) {
    let html = `\n        <p style="margin: 20px 0 20px 0;">${paragraphsArr[i]}</p>`; // Leave all the spaces after the "\n"

    arr.push(html);
  };
  return arr.join('\n');
}

exports.createParagraph = (content) => {
  let html = `\n        <p style="margin: 20px 0 20px 0;">${content}</p>`; // Leave all the spaces after the "\n"

  return html;
}