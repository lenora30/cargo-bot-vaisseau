#!/usr/bin/env python

"""Produces index.html given a list of JavaScript sources."""

import markup
import sys

index = markup.page()
index.init(
    title = 'Cargo-Not: Educational Cargo-Bot',
    script = [filename for filename in sys.argv if filename.endswith('.js')],
    css = ([filename for filename in sys.argv if filename.endswith('.css')], https://fonts.googleapis.com/css2?family=Raleway+Dots&display=swap),
index.script('main();')

print index
