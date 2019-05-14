	<?php
	$active_link = null;
	if( defined('ACTIVE') ) {
		$active_link = ACTIVE;
	}
	?>
	<header id="main-header">
		<nav id="main-nav" class="flex-row">
			<div class="flex-small hidden-mobile | vertical-center text-left | nav-item">
				&nbsp;<!-- spacer -->
			</div>
			<div class="flex-small" id="ckd-logo-wrap">
				<h2 id="ckd-logo">
					<a href="/"><img src="webroot/img/ckd-logo.svg" onerror="this.onerror=null; this.src='webroot/img/ckd-logo.png'" class="ckd-logo | svg" /></a>
				</h2>
			</div>
			<div class="flex-small hidden-mobile | vertical-center text-right | nav-item nav-philosophy">
				&nbsp;<!-- spacer -->
			</div>

			<!-- Fixed Navigation Links -->
			<div class="hidden-mobile | text-left | nav-item nav-process" id="nav-process">
				<a href="/process" <?php echo ($active_link=='process') ? 'class="active"' : null; ?>>Process</a>
			</div>
			<div class="hidden-mobile | text-right | nav-item nav-philosophy" id="nav-philosophy">
				<a href="/philosophy" <?php echo ($active_link=='philosophy') ? 'class="active"' : null; ?>>Philosophy</a>
			</div>
			<div class="hidden-mobile | text-left | nav-item nav-contact" id="nav-contact">
				<a href="/contact" <?php echo ($active_link=='contact') ? 'class="active"' : null; ?>>Contact Us</a>
			</div>
			<!--
			<div class="hidden-mobile | text-right | nav-item nav-playground" id="nav-playground">
				<a href="#/" <?php echo ($active_link=='playground') ? 'class="active"' : null; ?>>Playground</a>
			</div>
			-->
			
			<!-- Navigation Toggle -->
			<div class="flex-small hidden-desktop | vertical-bottom text-right | nav-item" id="nav-toggle">
				<input type="checkbox" id="nav-toggle-checkbox">
				<label for="nav-toggle-checkbox" id="nav-toggle-switch">
					<div class="bar part-1"></div>
					<div class="bar part-2"></div>
					<div class="bar part-3"></div>
				</label>
			</div>
		</nav>
	</header>