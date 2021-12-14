
userList = [];
function saveUser() {

    id = document.getElementById("id").value;
    pname = document.getElementById("pname").value;
    pstatus = document.getElementById("pstatus").value;
    plocation = document.getElementById("plocation").value;
    pst = document.getElementById("pst").value;
    ast = document.getElementById("ast").value;
    endT = document.getElementById("endT").value;
    exitT = document.getElementById("exitT").value;

    url = `name=${pname}&pstatus= ${pstatus}&location=${location}&pst=${pst} 
    $ast=${ast} &endT=${endT}&exitT=${exitT}`;

    const xhttp = new XMLHttpRequest();
    if (id == '') {
        xhttp.open("GET", "https://localhost:8080/demo/add?" + url);
    } else {
        xhttp.open("PUT", "https://localhost:8080/demo/update/$" {id}?${url});
    }

    xhttp.send();
    xhttp.onload = function () { 
        alert(this.responseText);
        updateUser();
        clearInput();

    }

}

function clearInput() {
    document.getElementById("id").value = '';
    document.getElementById('patient-form').reset();
}

/*function clearInput() {
    document.getElementById("id").value = "";
    document.getElementById("pname").value = "";
    document.getElementById("pstatus").value = "";
    document.getElementById("location").value = "";
    document.getElementById("pst").value = "";
    document.getElementById("ast").value = "";
    document.getElementById("endT").value= "";
    document.getElementById("exitT").value= "";*/


function updateUser() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://localhost:8080/demo/all");
    xhttp.send();
    xhttp.onload = function () {
        userList = JSON.parse(this.responseText);
        updatePage(0);

    }

}

function updatePage(pg) {

    pageQty = userList.length / 5;
    if (pageQty % 5 > 0) {
        pageQty++;
    }
    pageQty = parseInt(pageQty);
    if (pageQty > 1) {
      previous = (pg == 0) ? 0 : pg - 1;
      next = (pg ==pageQty - 1) ? pageQty -1 : pg + 1;
        txtpage = `<li class="page-item" onclick='updatePage(${previous})'><a class="page-link" href= "#"><</a></li>`;
        for (i = 1; i <= pageQty; i++) {
            
            active = ""
            if(i-1 == pg){
                active = "active"
            }
            txtpage += `<li class="page-item ${active}" onclick='updatePage(${i - 1})'><a class="page-link" href= "#">${i}</a></li>`
            console.log(pageQty);
        }
        txtpage += `<li class="page-item" onclick='updatePage(${next})'><a class="page-link" href= "#">></a></li>`
        
        document.getElementById("pageList").innerHTML = txtpage;
    
    }

    text = "";
    pg = 5 * pg;
    for (i = pg; i <= pg + 4; i++) {
        u = userList[i];
        // console.log(u); 
        if (u != undefined) {
            text += `<tr onclick='activateUser(${i})'><td>${u.id}</td><td>${u.name}</td><td>${u.email}</td></tr>`;
        }            
        
    }
    document.getElementById("tableBody").innerHTML = text;

}

function activateUser(i) {
    
    document.getElementById("id").value = u.id;
    document.getElementById("id").value = u.id;
    document.getElementById("pname").value = u.pname;
    document.getElementById("pstatus").value = u.pstatus;
    document.getElementById("location").value = u.location;
    document.getElementById("pst").value = u.pst;
    document.getElementById("ast").value = u.ast;
    document.getElementById("endT").value= u.endt;
    document.getElementById("exitT").value= u.exitT;

}

function deleteUser() {
    id = document.getElementById("id").value;
    if (id == '') {
        alert("Select a user!");
        return;
    }
    if (!confirm("Do you really want to delete this user?")) {
        return;
    }

    const xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "/demo/delete/" + id);
    xhttp.send();
    xhttp.onload = function () {
        alert(this.responseText);
        updateUser();
        clearInput();
    }
}

function AddPatient(scr = "AddPatientPage.html")

}

















/*var patients = localStorage.getItem('table-list');

if (patients = null){
    patients = [];
}
else{
    patients = JSON.parse(patients);
}


function savePatient(){
    pId = document.getElementById("id").value;
    pname = document.getElementById("pname").value;
        if(pname ==""){
            alert('Name is Required. ');
            return false;
        }
    pstatus = document.getElementById("pstatus").value;
    plocation = document.getElementById("plocation").value;
    pst = document.getElementById("pst").value;
    ast = document.getElementById("ast").value;
    endT = document.getElementById("endT").value;
    exitT = document.getElementById("exitT").value;

    if (vLocal != '') {
        vLocal = '(' + vLocal + ')';
    }

    save = confirm("Would you like to save Changes");
        if(save){
            patients = {
                pname : pname,
                pstatus : pstatus,
                plocation : plocation,
                pst : pst,
                ast : ast,
                endT : endT,
                exitT : exitT
            };

            if(pId = ""){
                patients.splice(patients.length, 0, patient);
            }
            else{
                patients[pId] =  patient;          
             }
             updateTable();
             clearInput();
        }

}


function activatePatient(){
    p = patients[id];

    document.getElementById(id).value = id;
    document.getElementById(pname).value = p.pname;
    document.getElementById(pstatus).value = p.pstatus;
    document.getElementById(plocation).value = p.plocation.replace("(","").replace(")","");
    document.getElementById(pst).value = p.pst;
    document.getElementById(ast).value = p.ast;
    document.getElementById(endT).value = p.endT;
    document.getElementById(exitT).value = p.exitT;

   
}

function status(pstatus) {
    switch (pstatus) {
    case 'Pre-Opp':
        return {
            label : 'Pre-Opp',
            cor : '#fbd972'
        };
    case 'Intra-Opp':
        return {
            label : 'Intra-Opp',
            cor : '#fd5766'
        };
    case 'Recovery':
        return {
            label : 'Recovery',
            cor : '#89e89f'
        };
    case 'transfered':
        return {
            label : 'transfered',
            cor : '#b8daff'
        };
    case 'transfered':
        return {
            label : 'transfered',
            cor : '#b8daff'
            };
    }
}









function updateTable(){
    table = "";

    for (i in patients){
        ptts = pstatus(patients [i].status)
        table += '<tr onclick="activatePatient(' + i + ')">'
         + '<td>' + patients[i].pname + '</td>'
         + '<td style="background-color: '+ptts.cor+';">'
         + ptts.label + patients[i].plocation + '<td>' + '</td>'
         + patients[i].pst + '<td>' + '</td>'
         + patients[i].ast + '<td>' + '</td>'
         + patients[i].endT + '<td>' + '</td>'
         + patients[i].exitT + '<td>' + '</td>';
         
    }

    document.getElementById("table-body").innerHTML = table;
			localStorage.setItem('table-body', table);
			localStorage.setItem('table-list', JSON.stringify(patients));

}

function clearInput() {
    document.getElementById("id").value = '';
    document.getElementById('patient-form').reset();
}

function deletePatient() {
    pId = document.getElementById("id").value;
    if (pId != '') {
        var save = confirm("Do you really want to DELETE patient");
        if (save) {
            pacients.splice(pId, 1);
            updateTable();
            clearInput();
        }
    }
}*/



