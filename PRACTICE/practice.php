<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<?php
    $x = 5;
    $y = 10;

    function addition(int $n = 20) {
        $GLOBALS['y'] = $GLOBALS['x'] + $n;
    }

    addition(23,56);
    print $y;

?>

</body>
</html>