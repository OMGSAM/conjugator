<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tableau de Mots</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        input, button {
            padding: 10px;
            font-size: 16px;
            margin-right: 10px;
        }
        table {
            margin-top: 20px;
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #000;
            padding: 10px;
            text-align: center;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>

    <h1>Ajouter un mot au tableau</h1>
    
    <input type="text" id="wordInput" placeholder="Entrez un mot">
    <button onclick="addWord()">Ajouter</button>

    <table id="wordTable">
        <thead>
            <tr>
                <th>Passé</th>
                <th>Présent</th>
                <th>Futur</th>
            </tr>
        </thead>
        <tbody>
            <!-- Les lignes seront ajoutées ici -->
        </tbody>
    </table>

    <script>
        function addWord() {
            const wordInput = document.getElementById('wordInput');
            const word = wordInput.value.trim();
            if (word === '') {
                alert('Veuillez entrer un mot.');
                return;
            }
            const pa='i ' +word ;	
            const pr='i will ' +'' +word ; 
            const fu=word.endsWith('e') ? 'i '+word + 'd' :'i '+ word + 'ed';
            
            const tableBody = document.querySelector('#wordTable tbody');
            const newRow = document.createElement('tr');

            const pastCell = document.createElement('td');
            pastCell.textContent = fu; // Vous pouvez ajouter des transformations pour le passé ici
            newRow.appendChild(pastCell);

            const presentCell = document.createElement('td');
            presentCell.textContent = pa; // Vous pouvez ajouter des transformations pour le présent ici
            newRow.appendChild(presentCell);

            const futureCell = document.createElement('td');
            futureCell.textContent = pr; // Vous pouvez ajouter des transformations pour le futur ici
            newRow.appendChild(futureCell);

            tableBody.appendChild(newRow);

            wordInput.value = ''; // Réinitialise le champ de saisie
        }
    </script>

</body>
</html>
