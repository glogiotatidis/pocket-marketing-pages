const supported_langs = {
  "es-es": "/es-es/",
  "es-la": "/es-la/",
  "es": "/es-es/",
  "fr-CA": "/fr-ca/",
  "fr-FR": "/fr-fr/",
  "fr": "/fr-fr/",
  "pt-BR": "/pt-br/",
  "pt-PT": "/pt-pt/",
  "pt": "/pt-pt/",
  "zh-cn": "/zh-cn/",
  "zh-tw": "/zh-tw/",
}

exports.handler = async (event, context) => {
  // based on https://gist.github.com/azproduction/4275127
  function acceptLanguageParser(string) {
    var langs = string.split(','), i, c;

    for (i = 0, c = langs.length; i < c; i++) {
      langs[i] = langs[i].split(';q=');
      langs[i][1] = +langs[i][1] || 1;
    }

    langs = langs.sort(function (a, b) {
      return b[1] - a[1];
    });

    for (i = 0, c = langs.length; i < c; i++) {
      langs[i] = langs[i][0].replace(/^\s+|\s+$/, '').toLowerCase();
    }

    return langs;
  }

  function redirect(langs) {

    var lang_path = '/en/';

    for (i = 0, c = langs.length; i < c; i++) {
      if (langs[i] in supported_langs) {
        lang_path = supported_langs[langs[i]];
        break;
      }
    }

    return "https://pocket-static-production.netlify.app/" + lang_path + event.path.substr(29);
  }

  return {
    statusCode: 301,
    headers: {
      Location: redirect(acceptLanguageParser(event.headers["accept-language"])),
    }
  }
}
