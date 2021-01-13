<?php
/*
Plugin Name: SyntaxHighlighter Evolved: Liquid Brush
Description: Adds support for the Liquid language to the SyntaxHighlighter Evolved plugin.
Author: Tom Lambert
Version: 1.0
Author URI: http://raisedbyturtles.org/
*/
 
// SyntaxHighlighter Evolved doesn't do anything until early in the "init" hook, so best to wait until after that
add_action( 'init', 'syntaxhighlighter_liquid_regscript' );
 
// Tell SyntaxHighlighter Evolved about this new language/brush
add_filter( 'syntaxhighlighter_brushes', 'syntaxhighlighter_liquid_addlang' );
 
// Register the brush file with WordPress
function syntaxhighlighter_liquid_regscript() {
    wp_register_script( 'syntaxhighlighter-brush-liquid', plugins_url( 'shBrushLiquid.src.js', __FILE__ ), array( 'syntaxhighlighter-core' ), '0.1' );
}
 
// Filter SyntaxHighlighter Evolved's language array
function syntaxhighlighter_liquid_addlang( $brushes ) {
    $brushes['liquid'] = 'liquid'; 
    return $brushes;
}