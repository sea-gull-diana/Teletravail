<?php
include("darkmode.php");
$title = "Télétravail - Contacts";
include("layout.php");
?>
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