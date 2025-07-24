document.getElementById("launch").addEventListener("click", lancerMission);



    function attendre(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }




      function animerProgress(id, duree) {
        return new Promise(resolve => {
          const progress = document.getElementById(id);
          let valeur = 0;
          const intervale = 50;
          const increment = 100 / (duree / intervale);
      
          progress.value = 0;

          const timer = setInterval(() => {
            valeur += increment;
            progress.value = Math.min(valeur, 100);


            if (valeur >= 100) {
              clearInterval(timer);
              resolve();
            }

          }, intervale);
        });
      }

      function updateMessage(stageId, message) {
        const stage = document.getElementById(stageId);
        const p = stage.querySelector("p");
        p.textContent = message;
      }



      function resetInterface() {
        document.getElementById("preProg").value = 0;
        document.getElementById("expProg").value = 0;
        document.getElementById("livProgr").value = 0;
      
        updateMessage("preparation", "Préparation du colis...");
        updateMessage("expedition", "Expédition en cours...");
        updateMessage("livraison", "Livraison...");
      
        const res = document.getElementById("resultat");
        res.textContent = " ";
      }







async function lancerMission() {

    resetInterface();
    const res = document.getElementById("resultat");

    try {
        updateMessage("preparation", "Préparation en cours...");
        await animerProgress("preProg", 2000);
        updateMessage("preparation", "Préparation terminée");
    
        await attendre(100);
    
        updateMessage("expedition", "Expédition en cours...");
        await animerProgress("expProg", 1500);
        updateMessage("expedition", "Expédition terminée");
    
        await attendre(100);
    
        updateMessage("livraison", "Livraison en cours...");
        await animerProgress("livProgr", 2500);
        updateMessage("livraison", "Colis livré avec succès");
    
        res.textContent = `BONJOUR, JE SUIS NICOLAS SARKOZY, ET J'AI LE GRAND PLAISIR DE LIRE : LE TEMPS DES TEMPETES POUR AUDIBLE`;
      } catch (err) {
        res.style.color = "red";
        res.textContent = "La mission a merdée : " + err;
      }
    }



    
























// ----------------------

// on fait des test ici




// Utilisation
// preparerCafe("cappucin")
//     .then(message => {
//         console.log("SUCCES:", message);
//     })
//     .catch(erreur => {
//         console.error("ERREUR:", erreur);
//     });
