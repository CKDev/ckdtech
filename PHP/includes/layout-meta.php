<!doctype html>
<html lang="en">
<head>
	<?php
	$active = null;
	if( defined('ACTIVE') ) {
		$active = ACTIVE;
	}
	?>
	<meta charset="utf-8" />
	<meta http-equiv="x-ua-compatible" content="ie=edge" />
	<title>CKD</title>
	<meta name="author" content="CKD" />
	<meta name="description" content="" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<!-- Fonts -->
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|PT+Serif:400,400i,700,700i" rel="stylesheet" />
	<link rel="stylesheet" href="https://use.typekit.net/cfr2phb.css">
	<!-- CSS -->
	<link rel="stylesheet" href="webroot/css/styles.max.css" id="theme-css" />
	<?php if( $active == 'welcome' || $active == 'home' ) { ?>
	<link rel="stylesheet" href="webroot/css/styles.homepage.css" id="theme-css-homepage" />
	<?php } ?>
	<link rel="stylesheet" href="webroot/css/styles.icons.css" id="theme-css-icons" />
	<link href="favicon.ico" type="image/x-icon" rel="icon">
	<link href="favicon.ico" type="image/x-icon" rel="shortcut icon">
	<!-- JS -->
	<!-- Load scripts that have HTML dependencies, before the body + markup... -->
	<script src="webroot/js/precursor.js"></script>
</head>
<body>
<main id="ckd-content" class="container">