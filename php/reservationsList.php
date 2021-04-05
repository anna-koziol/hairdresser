<?php
    $base = 'mysql:dbname=hairdresser;host=localhost';
    $root = 'root';
    $password = '';

    try {
        $db = new PDO($base, $root, $password);
        $db->exec("set names utf8");
        $rows = array();

        $query = "SELECT hour, serviceID, name, surname, phone, mail, first
        FROM `reservations`
        INNER JOIN `client`
        ON `client`.`clientID` = `reservations`.`clientID` ORDER BY `hour`;";
        $result = $db->query($query);

        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            array_push($rows, $row);
        }

        echo json_encode($rows);
    } 
        
    catch (PDOException $e) {
        echo 'Connection failed: ' . $e->getMessage();
    }
?>