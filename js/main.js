const input = document.getElementById("searchInput");

const search = () => {
    let filter, table, tr, td, i, txtValue;
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        firstColumn = tr[i].getElementsByTagName("td")[0];
        if (firstColumn) {
            txtValue = firstColumn.textContent || firstColumn.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1)
                tr[i].style.display = "";
            else
                tr[i].style.display = "none";
        }
    }
}

input.addEventListener("keyup", () => search());