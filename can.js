var Equipe  =
{
    nom:"",
    drapeau:"",//url img à fournir
    ptsFIFA:0,
    ptsGroupe:0,
    posGroupe:0,
    victoire:0,
    defaite:0,
    nul:0,
}

var Egypte = Object.create(Equipe);
Egypte.nom = "Egypte";
Egypte.ptsFIFA = 1384;
Egypte.drapeau = "C:/Users/joshua/Desktop/canProno/egy.png";

var Ouganda = Object.create(Equipe);
Ouganda.nom = "Ouganda";
Ouganda.ptsFIFA = 1299;
Ouganda.drapeau = "C:/Users/joshua/Desktop/canProno/uga.png";

var Zimbabwe = Object.create(Equipe);
Zimbabwe.nom = "Zimbabwe";
Zimbabwe.ptsFIFA =1192 ;
Zimbabwe.drapeau = "C:/Users/joshua/Desktop/canProno/zim.png";

var RDCongo = Object.create(Equipe);
RDCongo.nom = "Congo";
RDCongo.ptsFIFA = 1425;
RDCongo.drapeau = "C:/Users/joshua/Desktop/canProno/cod.png";

var Nigeria = Object.create(Equipe);
Nigeria.nom = "Nigeria";
Nigeria.ptsFIFA =1433 ;
Nigeria.drapeau = "C:/Users/joshua/Desktop/canProno/nga.png";

var Madagascar = Object.create(Equipe);
Madagascar.nom = "Madagascar";
Madagascar.ptsFIFA = 1198;
Madagascar.drapeau = "C:/Users/joshua/Desktop/canProno/mad.png";

var Guinee = Object.create(Equipe);
Guinee.nom = "Guinee";
Guinee.ptsFIFA = 1336;
Guinee.drapeau = "C:/Users/joshua/Desktop/canProno/gui.png";

var Burundi = Object.create(Equipe);
Burundi.nom = "Burundi";
Burundi.ptsFIFA =  1092;
Burundi.drapeau = "C:/Users/joshua/Desktop/canProno/bdi.png";

var Algerie = Object.create(Equipe);
Algerie.nom = "Algerie";
Algerie.ptsFIFA = 1346 ;
Algerie.drapeau = "C:/Users/joshua/Desktop/canProno/alg.png";

var Senegal = Object.create(Equipe);
Senegal.nom = "Senegal";
Senegal.ptsFIFA = 1515 ;
Senegal.drapeau = "C:/Users/joshua/Desktop/canProno/sen.png";

var Kenya = Object.create(Equipe);
Kenya.nom = "Kenya";
Kenya.ptsFIFA = 1207 ;
Kenya.drapeau = "C:/Users/joshua/Desktop/canProno/ken.png";


var Tanzanie = Object.create(Equipe);
Tanzanie.nom = "Tanzanie";
Tanzanie.ptsFIFA = 1105 ;
Tanzanie.drapeau = "C:/Users/joshua/Desktop/canProno/tan.png";

var Maroc = Object.create(Equipe);
Maroc.nom = "Maroc";
Maroc.ptsFIFA = 1429;
Maroc.drapeau = "C:/Users/joshua/Desktop/canProno/mar.png";

var CIvoire = Object.create(Equipe);
CIvoire.nom = "Côte d'Ivoire";
CIvoire.ptsFIFA = 1365;
CIvoire.drapeau = "C:/Users/joshua/Desktop/canProno/civ.png";

var Namibie = Object.create(Equipe);
Namibie.nom = "Namibie";
Namibie.ptsFIFA = 1182;
Namibie.drapeau = "C:/Users/joshua/Desktop/canProno/nam.png";


var AfriqueDuSud = Object.create(Equipe);
AfriqueDuSud.nom = "Afrique Du Sud";
AfriqueDuSud.ptsFIFA = 1335;
AfriqueDuSud.drapeau = "C:/Users/joshua/Desktop/canProno/rsa.png";

var Mali = Object.create(Equipe);
Mali.nom = "Mali";
Mali.ptsFIFA = 1365;
Mali.drapeau = "C:/Users/joshua/Desktop/canProno/mli.png";

var Tunisie = Object.create(Equipe);
Tunisie.nom = "Tunisie";
Tunisie.ptsFIFA = 1501;
Tunisie.drapeau = "C:/Users/joshua/Desktop/canProno/tun.png";


var Angola = Object.create(Equipe);
Angola.nom = "Angola";
Angola.ptsFIFA = 1142;
Angola.drapeau = "C:/Users/joshua/Desktop/canProno/ang.png";

var Mauritanie = Object.create(Equipe);
Mauritanie.nom = "Mauritanie";
Mauritanie.ptsFIFA = 1210;
Mauritanie.drapeau = "C:/Users/joshua/Desktop/canProno/mtn.png";

var Cameroun = Object.create(Equipe);
Cameroun.nom = "Cameroun";
Cameroun.ptsFIFA = 1404;
Cameroun.drapeau = "C:/Users/joshua/Desktop/canProno/cmr.png";

var Benin = Object.create(Equipe);
Benin.nom = "Benin";
Benin.ptsFIFA = 1273;
Benin.drapeau = "C:/Users/joshua/Desktop/canProno/ben.png";

var Ghana = Object.create(Equipe);
Ghana.nom = "Ghana";
Ghana.ptsFIFA = 1423;
Ghana.drapeau = "C:/Users/joshua/Desktop/canProno/gha.png";

var GuineeBissau = Object.create(Equipe);
GuineeBissau.nom = "Guinee_Bissau";
GuineeBissau.ptsFIFA = 1158;
GuineeBissau.drapeau = "C:/Users/joshua/Desktop/canProno/gnb.png";


function evalMatch(equipe1,equipe2)
{
    var facteurChance1 = Math.random();
    var facteurChance2 = Math.random();

    //ajouter un facteur forme lié aux victoires
    //document.write("S'affrontent :" + equipe1.nom +" et "+ equipe2.nom +"<BR>");
    if((equipe1.ptsFIFA * (facteurChance1/2)) > (equipe2.ptsFIFA * (facteurChance2/2)))
    {
        equipe1.victoire += 1;
        equipe2.defaite += 1;
        
        equipe1.ptsGroupe += 3;
        //alert(equipe1.nom);
        //document.write("Vainqueur "  +equipe1.nom+ " LOSER "+ equipe2.nom +"<BR>");
        return equipe1;
    }
    else if((equipe1.ptsFIFA * facteurChance1)==(equipe2.ptsFIFA *facteurChance2))
    {

        equipe1.nul += 1;
        equipe2.nul += 1;

        equipe1.ptsGroupe += 1;
        equipe2.ptsGroupe += 1
        //alert(equipe1.nom+" "+equipe2.nom);
        //document.write(equipe1.nom +": "+ equipe1.ptsGroupe+"<BR>"+ equipe2.nom +": "+equipe2.ptsGroupe+"<BR>")
;    }
    else
    {
        equipe1.defaite += 1;
        equipe2.victoire += 1;

        equipe2.ptsGroupe  += 3;
        //alert(equipe2.nom);
        //document.write("Vainqueur "  + equipe2.nom+ " LOSER "+ equipe1.nom +"<BR>");
        return equipe2;
    }
    return 0;
}

function actualiserPos(groupe,selector)
{ 
    groupe.sort(function(a,b)
    {
        return b.ptsGroupe - a.ptsGroupe;
    });
    
    for(i = 0; i < groupe.length; i++ )
    {
        selector[i].innerHTML = groupe[i].nom;
    }
}

function selectThird(bestTrois)
{
    var tabGrp = [grupA,grupB,grupC,grupD,grupE,grupF];
    var troisièmes = new Array(6); 

    for(i = 0; i < 6; i++)
    {
        troisièmes[i] = tabGrp[i][2];
    }
    troisièmes.sort(function(a,b){
        return b.ptsGroupe - a.ptsGroupe;
    })
    for(i= 0;i < 4; i++)
    {
        bestTrois[i] = troisièmes[i];
    }
    //document.write("Les meilleurs troisièmes sont: "+"<br>");
    //shuffling
    for(i = 0; i < 4; i++){
        var j = Math.floor(Math.random() * Math.floor(4));
        var z = Math.floor(Math.random() * Math.floor(4));
        var stock = Object.create(bestTrois[z]);
        var stock2 = Object.create(bestTrois[j]);
        bestTrois[j] = stock;
        bestTrois[z] = stock2;    
    }
    /*for(i = 0; i < 4; i++)
    {
        document.write(bestTrois[i].nom + "<br>");
    }*/
    return 0; 
}


var grupA =[Egypte,Ouganda,Zimbabwe,RDCongo];
var grupB =[Nigeria,Madagascar,Guinee,Burundi];
var grupC =[Algerie,Senegal,Kenya,Tanzanie];
var grupD =[Maroc,CIvoire,AfriqueDuSud,Namibie];
var grupE =[Mali,Tunisie,Angola,Mauritanie];
var grupF =[Cameroun,Benin,Ghana,GuineeBissau];


function grupPhase(groupe)
{ 
    var y = 0;
    var z = 1
   for(i = 0; i < 6; i++)
   {
       evalMatch(groupe[y], groupe[z]);
       
       if( (y == 0) && ( z == 3))
       {
           y = 1;
           z = 1; 
       }
       if((y == 1) &&(z == 3))
       {
           evalMatch(groupe[2],groupe[3]);
           return 0;
       }
       z++;
   }   
   return 0;
}

function PhaseDePoule()
{
    var s1 = document.querySelectorAll(".A");
    var s2 = document.querySelectorAll(".B");
    var s3 = document.querySelectorAll(".C");
    var s4 = document.querySelectorAll(".D");
    var s5 = document.querySelectorAll(".E");
    var s6 = document.querySelectorAll(".F");
    
    grupPhase(grupA);
    grupPhase(grupB);
    grupPhase(grupC);
    grupPhase(grupD);
    grupPhase(grupE);
    grupPhase(grupF);

    actualiserPos(grupA,s1);
    actualiserPos(grupB,s2);
    actualiserPos(grupC,s3);
    actualiserPos(grupD,s4);
    actualiserPos(grupE,s5);
    actualiserPos(grupF,s6);

};

function huitieme(quartDeFinal)
{
    PhaseDePoule();
    var bestTres = new Array(4);
    selectThird(bestTres);

    var select1 = document.querySelectorAll("#huit1 > div");
    var huitPremier = [grupD[0],bestTres[0],grupA[1],grupC[1],grupB[1],grupF[1],grupA[0],bestTres[1]];
    var select2  = document.querySelectorAll("#huit2 > div");
    var huitSecond = [grupB[0],bestTres[2],grupC[0],bestTres[3],grupE[0],grupD[1],grupA[0],grupE[1]];

    for(i = 0; i < huitPremier.length; i++)
    {
        select1[i].style.backgroundImage = "url("+ huitPremier[i].drapeau +")";
        select2[i].style.backgroundImage = "url("+ huitSecond[i].drapeau +")";
    }
   

    var vainq1 = Object.create(evalMatch(grupD[0],bestTres[0]));
    var vainq2 = Object.create(evalMatch(grupA[1],grupC[1]));
    var vainq3 = Object.create(evalMatch(grupB[1],grupF[1]));
    var vainq4 = Object.create(evalMatch(grupA[0],bestTres[1]));


    var vainq5 = Object.create(evalMatch(grupB[0],bestTres[2]));
    var vainq6 = Object.create(evalMatch(grupC[0],bestTres[3]));
    var vainq7 = Object.create(evalMatch(grupE[0],grupD[1]));
    var vainq8 = Object.create(evalMatch(grupA[0],grupE[1]));

    vainqueur = [vainq1,vainq2,vainq3,vainq4,vainq5,vainq6,vainq7,vainq8];
    for(i = 0; i <8; i++)
    {
        quartDeFinal[i] = vainqueur[i];
    }
}

function quart(demifinale)
{
    var quartFinal = new Array(8);

    huitieme(quartFinal);

    var selection1 = document.querySelectorAll("#quart1 > div");
    var selection2 = document.querySelectorAll("#quart2 > div");

    for(i = 0; i < 4; i++)
    {
        selection1[i].style.backgroundImage = "url("+ quartFinal[i].drapeau +")";
    }
    var y = 0;
    for(i = 4; i < 8; i++)
    {
        selection2[y].style.backgroundImage = "url("+ quartFinal[i].drapeau +")"; 
        y++;   
    }

    var quart1 = Object.create(evalMatch(quartFinal[0],quartFinal[1]));
    var quart2 = Object.create(evalMatch(quartFinal[2],quartFinal[3]));

    var quart3 = Object.create(evalMatch(quartFinal[4],quartFinal[5]));
    var quart4 = Object.create(evalMatch(quartFinal[6],quartFinal[7]));

    var vainqueur = [quart1,quart2, quart3, quart4];
    for(i =0; i < 4; i++)
    {
        demifinale[i] = vainqueur[i];
    }
}

function demi(tab_final)
{
    var demi_finale = new Array(4);
    quart(demi_finale);
    
    var select1 = document.querySelectorAll("#demiF1 > div");
    var select2 = document.querySelectorAll("#demiF2 > div");

    for(i = 0; i < 2; i++)
    {
        select1[i].style.backgroundImage = "url("+ demi_finale[i].drapeau +")";
    }
    var x = 0;
    for(i = 2; i < 4; i++)
    {
        select2[x].style.backgroundImage = "url("+ demi_finale[i].drapeau +")";
        x++;
    }

    var demi1 = Object.create(evalMatch(demi_finale[0],demi_finale[1]));
    var demi2 = Object.create(evalMatch(demi_finale[2],demi_finale[3]));

    var vainqueurs = [demi1, demi2];
    for(i = 0; i < 2; i++)
    {
        tab_final[i] = vainqueurs[i];
    }
}

function finale()
{
    var tabFinal = new Array(2);

    demi(tabFinal);

    var slct = document.querySelectorAll("#finale > div");

    slct[0].style.backgroundImage = "url("+ tabFinal[0].drapeau +")";
    slct[2].style.backgroundImage = "url("+ tabFinal[1].drapeau +")";
    
    

    var winner = Object.create(evalMatch(tabFinal[0],tabFinal[1]));

    document.getElementById("gagnant").style.backgroundImage =  "url("+ winner.drapeau +")";
}
document.getElementById("execute").textContent = "PRONOSTIQUES";
document.getElementById("execute").addEventListener("click",function()
{
    finale();
});

