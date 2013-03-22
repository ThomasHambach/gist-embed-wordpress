<?php
/*
 Plugin Name: Gist Embed
 Plugin URI: https://github.com/ThomasHambach/gist-embed-wordpress
 Description: Embeds GIST into your pages, based on jQuery script by Blair Vanderhoof
 Version: 0.2
 Author: Thomas Hambach
 */

/**
 * init
 */
function gist_embed_init() {
    add_filter("mce_external_plugins", "gist_embed_add_plugin");
    add_filter('mce_buttons_2', 'gist_embed_register_button');
}

/**
 * wp_footer
 */
function gist_embed_footer() {
    echo '<script src="' . plugin_dir_url(__FILE__) . 'js/gist-embed/gist-embed.js"></script>';
    if ( ( current_user_can('edit_posts') || current_user_can('edit_pages') ) && get_user_option('rich_editing') ) {

    }
}

/**
 * admin_head
 */
function gist_embed_admin_head() {
    echo '<link rel="stylesheet" href="' . plugin_dir_url(__FILE__) . 'css/gist-embed.css" type="text/css" media="all" />';
}

function gist_embed_admin_footer() {
    _gist_embed_dialog();
    echo '<script src="' . plugin_dir_url(__FILE__) . 'js/gist-embed-dialog.js"></script>';
}

/**
 *
 */
function _gist_embed_dialog() {
    include 'dialog.html';
}

/**
 * Register TinyMCE plugin
 * @return array
 */
function gist_embed_add_plugin() {
    $plugin_array = array();
    $plugin_array['gistembed'] = plugin_dir_url(__FILE__).'js/gist-embed-tinymce.js';
    return $plugin_array;
}

/**
 * Add button to TinyMCE
 *
 * @param $buttons
 * @return array
 */
function gist_embed_register_button($buttons) {
    $buttons[] = "gistembed";
    return $buttons;
}

// Link actions & filters
add_action('init', 'gist_embed_init');
add_action('wp_footer', 'gist_embed_footer');
add_action('admin_head', 'gist_embed_admin_head');
add_action('admin_footer', 'gist_embed_admin_footer');
//add_filter('mce_buttons_2', 'gist_embed_button');