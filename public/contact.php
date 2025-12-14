<?php
/**
 * TRADEMARK Contact Form Handler
 * 
 * Instructions:
 * 1. Upload this file to your PHP server
 * 2. Update the $to_email variable with your email
 * 3. Update the form action URL in Where.tsx to point to this script
 */

// Enable CORS for your domain
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Configuration
$to_email = "n.bensari@gmail.com";
$subject = "TRADEMARK - Nouveau message de contact";

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get form data
$nom = isset($_POST['nom']) ? trim(strip_tags($_POST['nom'])) : '';
$prenom = isset($_POST['prenom']) ? trim(strip_tags($_POST['prenom'])) : '';
$email = isset($_POST['email']) ? trim(strip_tags($_POST['email'])) : '';
$message = isset($_POST['message']) ? trim(strip_tags($_POST['message'])) : '';

// Validation
$errors = [];

if (empty($nom)) {
    $errors[] = 'Le nom est requis';
}
if (strlen($nom) > 100) {
    $errors[] = 'Le nom est trop long';
}

if (empty($prenom)) {
    $errors[] = 'Le prénom est requis';
}
if (strlen($prenom) > 100) {
    $errors[] = 'Le prénom est trop long';
}

if (empty($email)) {
    $errors[] = 'L\'email est requis';
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'L\'email est invalide';
}
if (strlen($email) > 255) {
    $errors[] = 'L\'email est trop long';
}

if (empty($message)) {
    $errors[] = 'Le message est requis';
}
if (strlen($message) > 2000) {
    $errors[] = 'Le message est trop long';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['error' => implode(', ', $errors)]);
    exit();
}

// Prepare email
$email_content = "
===========================================
NOUVEAU MESSAGE DE CONTACT - TRADEMARK
===========================================

NOM: $nom
PRÉNOM: $prenom
EMAIL: $email

MESSAGE:
-----------------------------------------
$message
-----------------------------------------

Date: " . date('d/m/Y H:i:s') . "
IP: " . $_SERVER['REMOTE_ADDR'] . "
";

$from_email = "contact@tmconseil.com";
$headers = "From: $from_email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send email
$mail_sent = mail($to_email, $subject, $email_content, $headers);

if ($mail_sent) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Message envoyé avec succès']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Erreur lors de l\'envoi du message']);
}
?>
