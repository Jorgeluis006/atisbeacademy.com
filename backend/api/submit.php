<?php
header('Content-Type: application/json');
// Allow CORS for local testing - in production, restrict origin
if (!isset($_SERVER['HTTP_ORIGIN'])) {
  // no-op
} else {
  header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
  header('Access-Control-Allow-Methods: POST, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type');
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!$data) {
  echo json_encode(['success' => false, 'error' => 'Invalid JSON']);
  exit;
}

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');

// Basic validations
if (!$name || !$email || !$message) {
  echo json_encode(['success' => false, 'error' => 'Todos los campos son obligatorios']);
  exit;
}

if (strlen($name) > 190 || strlen($email) > 190) {
  echo json_encode(['success' => false, 'error' => 'Nombre o email demasiado largos']);
  exit;
}

if (strlen($message) > 2000) {
  echo json_encode(['success' => false, 'error' => 'Mensaje demasiado largo']);
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  echo json_encode(['success' => false, 'error' => 'Email no válido']);
  exit;
}

require_once __DIR__ . '/../db_config.php';

$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
if ($mysqli->connect_errno) {
  echo json_encode(['success' => false, 'error' => 'DB connect error']);
  exit;
}

$stmt = $mysqli->prepare('INSERT INTO messages (name, email, message, created_at) VALUES (?, ?, ?, NOW())');
if (!$stmt) {
  echo json_encode(['success' => false, 'error' => 'DB prepare error']);
  exit;
}
$stmt->bind_param('sss', $name, $email, $message);
if ($stmt->execute()) {
  echo json_encode(['success' => true]);
} else {
  echo json_encode(['success' => false, 'error' => 'DB execute error']);
}

$stmt->close();
$mysqli->close();

?>
