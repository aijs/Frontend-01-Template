function utf8Encoding(char) {
  return `\\u${char.charCodeAt().toString(16)}`;
}
