<?php
    if(isset($_POST))
    {
        //print_r($_POST);

        $name = $_POST['name'];
        $surname = $_POST['surname'];
        $mail = $_POST['mail'];
        $phone = $_POST['phone'];
        $date = $_POST['date'];
        $hour = $_POST['hour'];
        $service = $_POST['service'];
        $first = $_POST['first'];
        $firstConsultation = $first === 'true'? false: true;

        $base = 'mysql:dbname=hairdresser;host=localhost';
        $root = 'root';
        $password = '';

        try {
            $db = new PDO($base, $root, $password);
            $db->exec("set names utf8");

            //sprawdzanie czy termin jest wolny
            $query = "SELECT * FROM `reservations` WHERE `hour` = '$hour'";
            $result = $db->query($query);
            $freeSlot = $result->fetch(PDO::FETCH_ASSOC); 

            if(!$freeSlot) {
                //sprawdzanie czy dane konto jest już dodane
                $query = "SELECT * FROM `client` WHERE mail = '$mail'";
                $result = $db->query($query);
                $row = $result->fetch(PDO::FETCH_ASSOC);          

                //dodanie do baazy nowego konta klienta
                if(!$row) {
                    $query = "INSERT into `client` values ('','$name','$surname','$mail','$phone')";
                    $result = $db->query($query);
                }

                //zczytanie ID klienta
                $query = "SELECT `clientID` FROM `client` WHERE `mail` = '$mail'";
                $result = $db->query($query);
                $row = $result->fetch(PDO::FETCH_ASSOC);     
                $clientID = $row['clientID'];
                
                //zapis rezerwacji
                $query = "INSERT INTO `reservations` VALUES ('', '$clientID', '$date', '$hour', '$service', '$firstConsultation');";
                $result = $db->query($query);
                echo 'booked';
            }
            else {
                echo 'busy';
            }

        } 
        
        catch (PDOException $e) {
            echo 'Connection failed: ' . $e->getMessage();
        }

    }
?>