<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/styles1.css"/>

</head>
<body>
<?php 
 $title = $_POST["title"];
 $Description = $_POST["description"];
 $Genre = $_POST["genre"];
 $Subject = $_POST["subject"];
 $Star = $_POST["star"];
 $Year = $_POST["year"];
 $Production = $_POST["production"];


?>


<?php require("headerM.php")?>

<h2>Movie Information saved</h2>
<hr>

<table>
    <tr>
        <th>Title</th>
        <td><?php echo $title; ?></td>
    </tr>
    <tr>
        <th>Description</th>
        <td><?php echo $Description; ?></td>
    </tr>

    <tr>
        <th>Genre</th>
        <td><?php echo $Genre; ?></td>
    </tr>

    <tr>
        <th>Subject</th>
        <td><?php echo $Subject; ?></td>
    </tr>

    <tr>
        <th>Star</th>
        <td><?php echo $Star; ?></td>
    </tr>

    <tr>
        <th>Year</th>
        <td><?php echo $Year; ?></td>
    </tr>

    <tr>
        <th>Production</th>
        <td><?php echo $Production; ?></td>
    </tr>


</table>


<?php require("footerM.php") ?>
</body>
</html>