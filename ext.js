
    <script>
        const table = document.getElementById("table");
        const tBody = table.children[1];
        var factorial = 1;
        function formatNumber(num){
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")
        }

        for (let number = 1; number <= 10; number++) {
            let tr = document.createElement("tr");
            let tdNumber = document.createElement("td");
            let tdSquare = document.createElement("td");
            let tdCube = document.createElement("td");
            let tdFactorial = document.createElement("td");

            factorial = factorial * number;

            tdNumber.innerHTML = number;
            tdSquare.innerHTML = number * number;
            tdCube.innerHTML = number * number * number;
            tdFactorial.innerHTML = factorial;

            tr.appendChild(tdNumber);
            tr.appendChild(tdSquare);
            tr.appendChild(tdCube);
            tr.appendChild(tdFactorial);

            tBody.appendChild(tr);
        }
    </script>