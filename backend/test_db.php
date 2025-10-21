<?php
// Prueba de conexión a la base de datos
require_once __DIR__ . '/db_config.php';

$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

header('Content-Type: application/json');

if ($mysqli->connect_errno) {
    echo json_encode(['ok' => false, 'error' => $mysqli->connect_error]);
    exit;
}

// Opcional: listar tablas
$tables = [];
$result = $mysqli->query("SHOW TABLES");
if ($result) {
    while ($row = $result->fetch_array()) {
        $tables[] = $row[0];
    }
}

echo json_encode(['ok' => true, 'database' => DB_NAME, 'tables' => $tables]);

$mysqli->close();
?>
