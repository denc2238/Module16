<?php
// Подключение к базе данных и другие настройки
$db_host = 'localhost';
$db_username = 'root';
$db_password = '';
$db_name = 'WebSite';

// Подключение к базе данных
$conn = new mysqli($db_host, $db_username, $db_password, $db_name);

// Проверка подключения
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Получение данных из формы
$username = $_POST['username'];
$password = $_POST['password'];
$name = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email'];

// Хешируем пароль
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Подготавливаем и выполняем запрос на вставку данных в базу данных
$sql = "INSERT INTO User (Login, Password, Name, Surname, Email) VALUES ('$username', '$hashed_password', '$name', '$surname', '$email')";

if ($conn->query($sql) === TRUE) {
  echo "Регистрация прошла успешно!";
  } else {
  echo "Ошибка при регистрации: " . $conn->error;
    }

// Закрываем соединение с базой данных
$conn->close();
?>
