<?php
# -------------------------------------------------------------------------------------- #
include_once('config.php'); // Set ROOT vars for PHP includes and "/webroot" reference
# -------------------------------------------------------------------------------------- #
# -------------------------------------------------------------------------------------- #

define('ACTIVE', "welcome");

include_once('includes/layout-meta.php');

?>
	<section id="main-section" class="welcome | load-hidden">
		<div class="flex-vertical">
			<div class="flex-fill | top"></div>
			<div class="flex-fill | mid">
				<h2 id="ckd-logo" class="js-reveal-welcome">
					<a href="/process"><img src="webroot/img/ckd-logo-home.svg" onerror="this.onerror=null; this.src='webroot/img/ckd-logo-home.png'" class="ckd-logo | svg" /></a>
				</h2>
				<h2 class="js-reveal-welcome">GO BEYOND THE BUILD.</h2>
				<p class="js-reveal-welcome">We provide businesses with thorough, long-lasting, and technically brilliant software, plus sound strategic and operational guidance. We’re able to do that because we hire the smartest, most creative strategists and technologists around.</p>
				<nav id="footer-nav" class="js-reveal-welcome">
					<div class="hidden-mobile"><img src="webroot/img/home-nav-bar.png" style="width: 100%;" /></div>
					<div class="flex-row">
						<div class="flex-small | vertical-center | nav-item">
							<a href="/process">Our Process</a>
						</div>
						<div class="flex-small | vertical-center | nav-item">
							<a href="/philosophy">Our Philosophy</a>
						</div>
					</div>
				</nav>
			</div>
			<div class="flex-fill | bot"></div>
		</div>
	</section>
<?php include_once('includes/layout-footer.php'); ?>