<?php
# -------------------------------------------------------------------------------------- #
include_once('config.php'); // Set ROOT vars for PHP includes and "/webroot" reference
# -------------------------------------------------------------------------------------- #
# -------------------------------------------------------------------------------------- #

$Contact = new Contact;

define('ACTIVE', "contact");

include_once('includes/layout-meta.php');

include_once('includes/layout-header.php'); ?>
	
	<section id="main-section" class="content-contact">
		<div class="flex-wrap">
<!-- CIRCLE -->
			<div class="flex-content hidden-mobile | content-row | flex-spacer">
				<div class="flex-circle"></div>
			</div>
			<div class="flex-content hidden-mobile | content-row | flex-spacer">
				<div class="flex-border"></div>
			</div>
<!-- HEADER -->
			<div class="flex-content | content-row">
				<div class="flex-block | flex-center flex-header">
					<h1 class="h2 | page-header">CONTACT US</h1>
				</div>
			</div>
<?php if( isset($_GET['success']) ) { ?>
	
	<div class="flex-content | content-row">
		<div class="flex-block | flex-form">
			<p class="text-orange">Thank you for submitting the form. A CKD representative will be in contact with you.</p>
		</div>
	</div>
	<?php unset( $_POST ); ?>

<?php } else { ?>
			<div class="flex-content | content-row">
				<div class="flex-block | flex-form">
					<p class="text-orange">We're looking forward to learning more about your project goals. Innovation doesn't happen by itself, so let's take the first step together.</p>
				</div>
			</div>
<!-- FORM -->
<?php
// Contact Form
$error = false;
$show_dialog = false;
if ( isset($Contact->ERRORS) && !empty($Contact->ERRORS) ) {
	$show_dialog = true;

	$error_fields = array_flip($Contact->ERRORS);
	
	$error['name_full'] = (in_array('name_full', $Contact->ERRORS)) ? true : null;
	$error['contact_from'] = (in_array('contact_from', $Contact->ERRORS)) ? true : null;
	$error['contact_phone'] = (in_array('contact_phone', $Contact->ERRORS)) ? true : null;
	$error['contact_company'] = (in_array('contact_company', $Contact->ERRORS)) ? true : null;

	echo '<div class="flex-content | content-row">';
	echo '<div class="flex-block | flex-form">';
  	echo '<p class="text-orange | alert alert-danger" role="alert"><b>There were errors with your submission; please check the form fields and resubmit.</b></p>';
	echo '</div>';
	echo '</div>';
}
?>
			<div class="flex-content | content-row">
				<div class="flex-block | flex-form">
					
					<form class="form" method="post" id="contact-form" name="contact-form" novalidate="novalidate">
					<?php $nonce = Contact::nonce_generate( $_ENV['NONCE_SECRET'] ); ?>
					<input type="hidden" name="data[nonce]" value="<?php echo $nonce; ?>" />

					<!-- <label for="name_full">Full Name</label> -->
					<input type="text" id="name_full" name="data[name_full]" placeholder="Full Name">
					<?php echo ( isset($error) && (isset($error['name_full'])) ) ? '<p class="invalid-feedback">Please provide a Full Name</p>' : null; ?>

					<!-- <label for="contact_from">Email</label> -->
					<input type="email" id="contact_from" name="data[contact_from]" placeholder="Email">
					<?php echo ( isset($error) && (isset($error['contact_from'])) ) ? '<p class="invalid-feedback">Please provide a valid Email address</p>' : null; ?>

					<!-- <label for="contact_phone">Phone</label> -->
					<input type="text" id="contact_phone" name="data[contact_phone]" placeholder="Phone">
					<?php echo ( isset($error) && (isset($error['contact_phone'])) ) ? '<p class="invalid-feedback">Please provide a Phone number</p>' : null; ?>

					<!-- <label for="contact_company">Company Name</label> -->
					<input type="text" id="contact_company" name="data[contact_company]" placeholder="Company Name">
					<?php echo ( isset($error) && (isset($error['contact_company'])) ) ? '<p class="invalid-feedback">Please provide a Company</p>' : null; ?>
					
					<textarea name="data[message]" id="message" placeholder="Tell us about your project."></textarea>

					<input type="submit" value="Submit" id="contact-submit">
					</form>

				</div>
			</div>
<?php } ?>

		</div>
	</section>
<?php include_once('includes/layout-footer.php'); ?>