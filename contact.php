<?php
  include("darkmode.php");
?>

<!DOCTYPE html>
<html>
<head>
<script src="js/layout.js">
    alert("Fichier layout.js non trouvé !");
</script>
<script src="js/jquery.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Télétravail - Contacts</title>
</head>
    <body class="<?php echo $themeClass; ?>">
        <header>
        </header>
        <main class="container-lg qr">
            <h1>Nous poser une question :</h1>
            <table class="table table-striped table-hover">
                <thead>
                <tr>
                    <th class="col-5">Question</th>
                    <th class="col-5">Réponse</th>
                    <th class="col-1"></th>
                    <th class="col-1"></th>
                </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            </main>
            <footer class="container-lg qr">
                <div>
                    Nombre de questions :
                    <span id="score">0</span>
                </div>
                <button id="add" type="button" class="btn btn-outline-success">+</button>
            </footer>
        </div>
    </body>
</html>