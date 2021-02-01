#!/usr/bin/env bash
set -uo pipefail
set -x

mkdir -vp content/marketing-assets
pushd content

LANGS="en de,de-DE es,es-ES es-LA,es fr,fr-FR fr-CA,fr it,it-IT ja,ja-JP ko,ko-KR nl,nl-NL pl,pl-PL pt,pt-PT pt-BR,pt ru,ru-RU zh-CN zh-TW"

PAGES="""
https://getpocket.com/save-to-pocket/
https://getpocket.com/pocket-and-firefox/
https://getpocket.com/about/
https://getpocket.com/explore/pocket-hits-signup/
https://getpocket.com/pocket-hits/confirmation/
https://getpocket.com/privacy/
https://getpocket.com/tos/
https://getpocket.com/contact-info/
https://getpocket.com/jobs/
https://getpocket.com/firefox/new_tab_learn_more/
https://getpocket.com/welcome/
https://getpocket.com/chrome/
https://getpocket.com/safari/
https://getpocket.com/android/
https://getpocket.com/ios/
https://getpocket.com/fire/
https://getpocket.com/edge/
https://getpocket.com/opera/
https://getpocket.com/add/
https://getpocket.com/slack/
"""

# Extra (  ) needed for sed matching
EXTRA_ASSETS="""
https://getpocket.com(/i/apple-touch-icon/Pocket_AppIcon_@114.png)
https://getpocket.com(/i/apple-touch-icon/Pocket_AppIcon_@144.png)
https://getpocket.com(/i/apple-touch-icon/Pocket_AppIcon_@57.png)
https://getpocket.com(/i/apple-touch-icon/Pocket_AppIcon_@72.png)
"""

for lang in ${LANGS};
do
    short_lang=$(echo ${lang} | cut -d , -f 1)

    mkdir -vp ${short_lang}
    pushd ${short_lang}

    # Copy assets from global assets to avoid re-downloading and speedup mirroring

    cp -R ../marketing-assets/. .


    for page in ${PAGES};
    do
        wget --timestamping \
             --quiet\
             --header="Accept-Language: ${lang}" \
             -l 0 \
             -e robots=off \
             -nH -H -p -k --adjust-extension \
             ${page}
    done

    # Copy assets back to global assets (some locales have more assets than others)
    # do that in a loop because not all assets exist in all locales
    for dir in img i j *.js web web-discover web-ui;
    do
 	    cp -R "${dir}" ../marketing-assets/;
    done
	rm -rf img i j *.js web web-discover web-ui

    popd
done


# Get assets not processed by wget
pushd marketing-assets
for extra_asset in ${EXTRA_ASSETS};
do
    url=$(echo ${extra_asset} | tr -d "\(\)")
    wget --mirror -nH ${url}
    find . -type f -exec sed -i -r "s|${extra_asset}|/marketing-assets\1|" {} \;
done
popd

prettier.sh --write .

find . -name \*.html -exec sed -i  's/\.\.\//\/marketing-assets\//' {} \;

for file in $(find . -type f -name \*\\?\*);
do
    mv "${file}" "${file%\?*}"
done

# Set canonical URLs
for file in $(find . -name index.html);
do
    url_path=$(echo ${file} | cut -d '/' -f 2,3)
    sed -i -r 's|</head>|<link rel="canonical" href="https://www.getpocket.com/'"${url_path}"'/">\n</head>|' "${file}"
done

popd
