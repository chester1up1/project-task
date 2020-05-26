export function rndKey() {
  var text = "";
  var possible = "QWERTYUIOPASDFGHJKLZXCVBNM70";

  for (var i = 0; i < 4; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
