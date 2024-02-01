function login(nbre) {
    if (parseInt(nbre)==1) {
        var form1=document.getElementById("f1");
        form1.innerHTML="";
        document.getElementById("inscrire").className="btn btn-body fs-2 col-4 border border-5 border-dark border-start-0 border-end-0 border-bottom-0";
        document.getElementById("connecter").className="btn btn-body fs-2 col-4";
        // création des élements
        // champ1
        var div1=document.createElement('div');
        div1.className="input-group mb-4";
        var span1=document.createElement('span');
        span1.className="input-group-text bg-body text-dark fw-bold";
        span1.textContent="Username";
        div1.appendChild(span1);
        var champ1=document.createElement("input");
        champ1.type="text";
        champ1.id="nom";
        champ1.name="nom";
        champ1.className="form-control";
        div1.appendChild(champ1);
        
        // champEmail
        var divEm=document.createElement('div');
        divEm.className="input-group mb-4";
        var spanEm=document.createElement('span');
        spanEm.className="input-group-text bg-body text-dark fw-bold";
        spanEm.textContent="Email";
        divEm.appendChild(spanEm);
        var champEm=document.createElement("input");
        champEm.type="email";
        champEm.id="email";
        champEm.name="email";
        champEm.className="form-control";
        divEm.appendChild(champEm);
        // le password1
        var divPass=document.createElement('div');
        divPass.className="input-group mb-4";
        var span2=document.createElement('span');
        span2.className="input-group-text bg-body text-dark fw-bold";
        span2.textContent="Password";
        divPass.appendChild(span2);
        var champ2=document.createElement("input");
        champ2.type="password";
        champ2.id="passwords";
        champ2.name="passwords";
        champ2.className="form-control";
        divPass.appendChild(champ2);
        // le password2
        var divPass1=document.createElement('div');
        divPass1.className="input-group mb-4";
        var span2=document.createElement('span');
        span2.className="input-group-text bg-body text-dark fw-bold";
        span2.textContent="confirm Password";
        divPass1.appendChild(span2);
        var champ2=document.createElement("input");
        champ2.type="password";
        champ2.id="passwords1";
        champ2.name="passwords1";
        champ2.className="form-control";
        divPass1.appendChild(champ2);
        
        //le bouton d'envoi
        var savebt=document.createElement("input");
        savebt.type="submit";
        savebt.name="btsave";
        savebt.className="mb-2 btn btn-outline-dark col-md-3 mx-auto";
        savebt.value="S'enregistrer";
        // ajout des éléments
        form1.appendChild(div1);
        form1.appendChild(divEm);
        form1.appendChild(divPass);
        form1.appendChild(divPass1);
        form1.appendChild(savebt);

    } else if (parseInt(nbre)==0){
        var form1=document.getElementById("f1");
        form1.innerHTML="";
        document.getElementById("connecter").className="btn btn-body fs-2 col-4 border border-5 border-dark border-start-0 border-end-0 border-bottom-0";
        document.getElementById("inscrire").className="btn btn-body fs-2 col-4";
        
        // création des élements
        // champ1
        var div1=document.createElement('div');
        div1.className="input-group mb-4";
        var span1=document.createElement('span');
        span1.className="input-group-text bg-body text-dark fw-bold";
        span1.textContent="Username";
        div1.appendChild(span1);
        var champ1=document.createElement("input");
        champ1.type="text";
        champ1.id="nom";
        champ1.name="nom";
        champ1.className="form-control";
        div1.appendChild(champ1);
        // champ2
        var div2=document.createElement('div');
        div2.className="input-group mb-4";
        var champ2=document.createElement("input");
        champ2.type="password";
        champ2.id="password";
        champ2.name="password";
        champ2.className="form-control";
        div2.appendChild(champ2);
        var span2=document.createElement('span');
        span2.className="input-group-text bg-body text-dark fw-bold";
        span2.textContent="Password";
        div2.appendChild(span2);
        
        //le bouton d'envoi
        var envoibt=document.createElement("input");
        envoibt.type="submit";
        envoibt.name="btenv";
        envoibt.className="mb-2 btn btn-outline-dark col-md-3 mx-auto";
        envoibt.value="Se connecter";
        // ajout des éléments
        form1.appendChild(div1);
        form1.appendChild(div2);
        form1.appendChild(envoibt);
    }
    
}
