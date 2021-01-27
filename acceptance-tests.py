#!/usr/bin/env python3
# Redirect function acceptance tests.
import os
import requests

BASE_URL=os.getenv("BASE_URL", 'https://pocket-static-staging.netlify.app')

CHECKS = [
    ('fr', '/fr'),
    ('fr-CA', '/fr-ca'),
    ('es-ar', '/es-la'),
    ('es-mx', '/es-la'),
    ('es', '/es'),
    ('es-mx,es', '/es-la'),
    ('pt-BR', '/pt-br'),
    ('pt-PT,pt-BR', '/pt'),
    ('de-DE,de', '/de'),
    ('en-US,en;q=0.5', '/en'),
    ('el', '/en'),
    ('el,zu;q=0.7,fr;q=0.3', '/fr'),
    ('el,de;q=0.3,fr;q=0.7', '/fr'),
]

print(f'Checking against {BASE_URL}')

for lang, path in CHECKS:
    print(f' - Checking lang {lang}')
    headers = {
        'Accept-Language': lang
    }
    response = requests.get(BASE_URL + '/redirect/about/', headers=headers)

    try:
        assert response.url == BASE_URL + path + '/about/'
    except AssertionError:
        print('Error: ', BASE_URL + path + '/about/', response.url)
