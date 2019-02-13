(function(window, document) {
  var otpEncryptButton = document.getElementById("otpEncryptButton");
  var result = document.getElementById("result");
  // var alphabet = "abcdefghijklmnopqrstuvxy";

  function encrypt(text, key) {
    var encodedElements = [];
    for (var i = 0; i < text.length; i++) {
      var cipherElement = key.charCodeAt(i % key.length);
      var encodedElement = text.charCodeAt(i) ^ cipherElement;
      encodedElements.push(encodedElement);
    }
    return encodedElements.join(" ");
  }

  function decrypt(text, key) {
    var encryptedElements = text.split(" ");
    var decryptedElements = [];
    for (var i = 0; i < encryptedElements.length; i++) {
      var cipherElement = key.charCodeAt(i % key.length);
      var decryptedElement = encryptedElements[i] ^ cipherElement;
      var decodedElement = String.fromCharCode(decryptedElement);
      decryptedElements.push(decodedElement);
    }
    var decryptedText = decryptedElements.join("");
    return decryptedText;
  }

  /*
  function encryptText(text, key) {
    var encodedText = encodeText(text, key);
    var encodedKey = encodeKey(key);
  }*/

  /*
  function encryptText(text) {
    for (var i = 0; i < text.length; i++) {
      var charCode = text.charCodeAt(i);
      encodedText += charCode;
    }
    char.charCodeAt();
  }*/

  otpEncryptButton.onclick = function() {
    var input = document.getElementById("message").value;
    var key = document.getElementById("key").value;
    var encryptedMessage = encrypt(input, key);
    // var encodedKey = encodeText(key);
    result.textContent = encryptedMessage;
  };

  otpDecryptButton.onclick = function() {
    var input = document.getElementById("message").value;
    var key = document.getElementById("key").value;
    var decryptedMessage = decrypt(input, key);
    result.textContent = decryptedMessage;
  };
})(window, document);
