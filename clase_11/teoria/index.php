<?php
$nombre = "Juan";
$apellido = "Perez";
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="estilos.css">
</head>

<body>

    <?php
    include('menu.php');
    ?>


    <h1>PHP</h1>
    <h1>
        <?php
        echo $nombre . " " . $apellido;
        ?>
    </h1>

    <h1>
        <?php
        echo $nombre;
        ?>
    </h1>
</body>

</html>