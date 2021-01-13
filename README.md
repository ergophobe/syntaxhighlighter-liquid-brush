# Liquid Brush for Syntax Highlighter Evolved Wordpress Plugin
Plugin Name: SyntaxHighlighter Evolved: Liquid Brush
Description: Adds support for the Liquid language (Shopify's templating language) to the SyntaxHighlighter Evolved plugin.
Author: Tom Lambert
Version: 0.2
Author URI: http://raisedbyturtles.org/
License: GPLv2

This plugin is only an extension of the [SyntaxHighlighter Evolved](https://wordpress.org/plugins/syntaxhighlighter/) which has to be installed and activated.

The brush file is a first pass and needs more work to be a quality Liquid highlighter. In particular it needs comment support. 

## Installation
1. First install [SyntaxHighlighter Evolved](https://wordpress.org/plugins/syntaxhighlighter/) 
2. Then install this plugin

## Known Issues

**If you are using any plugin that minimizes Javascript,** such as Frank Goossens' excellent [Autoptimize](https://wordpress.org/plugins/autoptimize/), you **must exclude some of the Syntax Highlighter Evolved Javascript files from getting minified**. As [explained by Alex Mills](https://wordpress.org/support/topic/conflict-with-syntaxhighlighter-evolved-in-gutenberg/#post-11548784) this is because of the base library and is not something that I can fix for my plugin or he can fix for Syntax Highlighter Evolved without changing out the base library. 

In Autoptimize specifically, you would do this:
 - Under "Javascript Options" in the field labelled "Exclude scripts from Autoptimize" you must add: *shBrushLiquid.js,shBrushLiquid.min.js,syntaxhighlighter.js*
 - Under "Misc Options" you must uncheck "Minify excluded CSS and JS files?"
 

For more detail, see my [blog post](https://raisedbyturtles.org/liquid-syntax-highlighter-wordpress) for the first generation of this plugin.

## To Do

- add support for Liquid comments
- check for dependencies. WP does nothing to manage dependencies and provides no dependency management. One solution is Waclaw Jacek's [Check Plugin Dependencies](https://github.com/waclawjacek/code-examples/tree/master/check-plugin-dependencies)

## Changelog

= 0.2 =
Minifiy JS

= 0.1 =
Experimental first version
