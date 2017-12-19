<?php

add_theme_support( 'post-thumbnails');
add_theme_support( 'custom-header' );
add_theme_support( 'custom-logo' );

class wp_ng_theme {

	function enqueue_scripts() {

    wp_enqueue_style( 'bootstrapCSS', '//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css', array(), '1.0', 'all' );
    wp_enqueue_style( 'style', get_template_directory_uri() . '/style.css', array(), '1.0', 'all' );
		wp_enqueue_script( 'angular-core', '//ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js', array( 'jquery' ), '1.0', false );
		wp_enqueue_script( 'angular-resource', '//ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-resource.js', array('angular-core'), '1.0', false );
		wp_enqueue_script( 'ui-router', '//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.min.js', array( 'angular-core' ), '1.0', false );
		wp_enqueue_script( 'ngScripts', get_template_directory_uri() . '/assets/javascript/angular-theme.js', array( 'ui-router' ), '1.0', false );
		wp_localize_script( 'ngScripts', 'appInfo',
			array(
				'api_url'			 => rest_get_url_prefix() . '/wp/v2/',
				'template_directory' => get_template_directory_uri() . '/',
				'nonce'				 => wp_create_nonce( 'wp_rest' ),
				'is_admin'			 => current_user_can('administrator')
			)
		);
	}
}

function create_post_type() {
  register_post_type( 'trabalho',
    array(
      'labels' => array(
        'name' => __( 'Trabalhos' ),
        'singular_name' => __( 'Trabalho' )
      ),
      'public' => true,
			'has_archive' => true,
			'show_in_rest' => true,
    	'show_in_rest'       => true,
    	'rest_base'          => 'trabalhos',
    	'rest_controller_class' => 'WP_REST_Posts_Controller',
			'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' ),
    )
  );
}

$ngTheme = new wp_ng_theme();

add_action( 'wp_enqueue_scripts', array( $ngTheme, 'enqueue_scripts' ) );
add_action( 'init', 'create_post_type' );