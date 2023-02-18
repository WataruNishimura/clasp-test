function doGet() {
  var t = HtmlService.createTemplateFromFile('clasp.html');
  t.message="Hello World!";
  return t.evaluate();
}