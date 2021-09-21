class Formatter {
  static capitalize(letter) {
    return letter.charAt(0).toUpperCase() + letter.slice(1)
  }
  static sanitize(characters) {
    return characters.replace( /[^A-Za-z0-9 '-]/g, '' )
  }
  static titleize(string) {
    const except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    return string.split(" ").map((words, i) => except.includes(words) && i !== 0 ? words : words.charAt(0).toUpperCase() + words.slice(1)).join(" ")
  }
  //the, a, an, but, of, and, for, at, by, and from

}