	<?php
	$active_link = null;
	if( defined('ACTIVE') ) {
		$active_link = ACTIVE;
	}
	?>
	<footer id="main-footer">
		<nav class="flex-row" id="footer-nav">
			<div class="flex-small hidden-mobile | text-left | nav-item nav-contact">
				&nbsp;<!-- spacer / navigation is in the header -->
			</div>
			<div class="flex-small" id="firepoint-logo-wrap">
				<p>all content © CKD Technology Partners</p>
				<h2 class="flex-small" id="firepoint-logo">
					<a href="//firepointstudios.com"><img src="webroot/img/firepoint.svg" onerror="this.onerror=null; this.src='webroot/img/firepoint.png'" class="firepoint-logo | svg" /></a>
				</h2>
				<p>CKD Is a Firepoint Partner</p>
			</div>
			<div class="flex-small hidden-mobile | text-right | nav-item nav-playground">
				&nbsp;<!-- spacer / navigation is in the header -->
			</div>
		</nav>
	</footer>
</main>
<!-- Mobile Navigation Drawer -->
<div id="nav-drawer">
	<h2 id="ckd-logo-mobile">
		<a href="/"><img src="webroot/img/ckd-logo.svg" onerror="this.onerror=null; this.src='webroot/img/ckd-logo.png'" class="ckd-logo | svg" /></a>
	</h2>
	<nav id="mobile-nav">
		<a href="/process">Process</a>
		<a href="/philosophy">Philosophy</a>
		<a href="/contact">Contact</a>
	</nav>
</div>
<!-- Mobile Content Mask -->
<div id="content-mask"></div>
<!-- Scripts -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script async defer src="https://buttons.github.io/buttons.js"></script>
<script src="webroot/js/vendors.min.js"></script>
<script src="webroot/js/scripts.max.js"></script>
</body>
</html>