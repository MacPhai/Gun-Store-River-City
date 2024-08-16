document.addEventListener("DOMContentLoaded", () => {
    const cookieBox = document.getElementsByClassName("wrapper")
    const acceptBtn = cookieBox[0].querySelector("button");

    acceptBtn.onclick = () => {
            document.cookie = "CookieBy=MacPhai; max-age=" + 60 * 60 * 24 * 30;
            
            if (document.cookie.includes("CookieBy=MacPhai")) {
                cookieBox[0].classList.add("hide");
            } else {
                alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
            }
        };

        let checkCookie = document.cookie.indexOf("CookieBy=MacPhai"); 

        if (checkCookie !== -1) {
                    cookieBox[0].classList.add("hide");
                } else {
                    cookieBox[0].classList.remove("hide");
                }
            });
            

        //    Register Systeme

        let berrettaM9 = "Berretta M9";
        let coltm1911 = "Colt M1911";
        let tec9 = "Tec 9";
        let desertEagle = "Desert Eagle";
        let ak47 = "Ak 47";
        let remington870 = "Remington 870";
        let lmtl129a1 = "Lmt L129A1";
        let krissVectorSmg = "Kriss Vector Smg";
        let ppaLeger = "PPA léger";
        let ppaLourd = "PPA Lourd";
        let allGun = [
            berrettaM9, coltm1911, tec9, desertEagle, ak47,
            remington870, lmtl129a1, krissVectorSmg
        ];
        let allPpa = [ppaLeger, ppaLourd];
    
        let mp = [berrettaM9,coltm1911, tec9, desertEagle, ak47, remington870, lmtl129a1, krissVectorSmg, ppaLeger, ppaLourd];
        let wd = [berrettaM9,coltm1911, tec9, desertEagle, ak47, remington870, lmtl129a1, krissVectorSmg, ppaLeger, ppaLourd];
        let nk = [berrettaM9,coltm1911, tec9, desertEagle, ak47, remington870, lmtl129a1, krissVectorSmg, ppaLeger, ppaLourd];
        let mo = [desertEagle, ppaLeger];
        let as = [berrettaM9, desertEagle, ppaLeger];
        let yl = [ppaLeger, ppaLourd];
        let ab = [ak47, ppaLourd];
        let jm = [desertEagle, ppaLeger];
        let ac = [ppaLeger];
        let rk = [ppaLeger];

document.addEventListener("DOMContentLoaded", () => {
    // Get which button are use
    const openDialogBtns = document.querySelectorAll(".user-case > div");
    const dialog = document.getElementById("dialog");
    const closeDialogBtn = document.getElementById("close-dialog-btn");

    // Get dialog content
    const dialogContents = {
        "open-dialog-mp": "Michelle Pépito possède : " + mp.join(', '),
        "open-dialog-wd": "Wiliam Dero possède : " + wd.join(', '),
        "open-dialog-nk": "Noam Kabil possède : " + nk.join(', '),
        "open-dialog-mo": "Matt Orléans possède : " + mo.join(', '),
        "open-dialog-as": "Adam Smith possède : " + as.join(', '),
        "open-dialog-yl": "Yassine Luc possède : " + yl.join(', '),
        "open-dialog-ab": "Adil Bahar possède : " + ab.join(', '),
        "open-dialog-jm": "John Mcclean possède : " + jm.join(', '),
        "open-dialog-ac": "Adrien Cosson possède : " + ac.join(', '),
        "open-dialog-rk": "Roland Kaminski possède : " + rk.join(', ')
    };

    function openDialog(id) {
        dialog.querySelector(".dialog-content p").textContent = dialogContents[id];
        dialog.classList.remove("hide");
    }

    // Add event if user click on a case
    openDialogBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const dialogId = btn.id;
            openDialog(dialogId);
        });
    });

    closeDialogBtn.addEventListener("click", () => {
        dialog.classList.add("hide");
    });

    // Close if user click out the case
    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
            dialog.classList.add("hide");
        }
    });
});

    // Weapon information

    let berretaM9Info = {
        Prix: 3000,
        Permis: "PPA Léger",
        Cadence: "10 balles /sec"
    }
    let ColtM1911Info = {
        Prix: 4000,
        Permis: "PPA Léger",
        Cadence: "10 balles /sec"
    }
    let tec9Info = {
        Prix: 6000,
        Permis: "PPA Léger",
        Cadence: "10 balles /sec"
    }
    let desertEagleInfo = {
        Prix: 6000,
        Permis: "PPA Léger",
        Cadence: "10 balles /sec"
    }

    let ak47Info = {
        Prix: 15000,
        Permis: "PPA Lourd",
        Cadence: "8 balles /sec"
    }

    let remington870Info = {
        Prix: 6500,
        Permis: "PPA Lourd",
        Cadence: "1 balle /sec"
        }
    let lmtl129a1Info = {
        Prix: 10000,
        Permis: "PPA Lourd",
        Cadence: "10 balles / sec"
        }
    let krissVectorSmgInfo = {
        Prix: 14000,
        Permis: "PPA Lourd",
        Cadence: "20 balles / sec"
            }

            document.addEventListener("DOMContentLoaded", () => {
                const weaponInfo = {
                    "open-dialog-berreta-m9": {
                        Prix: 3000,
                        Permis: "PPA Léger",
                        Cadence: "10 balles /sec"
                    },
                    "open-dialog-colt-m1911": {
                        Prix: 4000,
                        Permis: "PPA Léger",
                        Cadence: "10 balles /sec"
                    },
                    "open-dialog-tec-9": {
                        Prix: 6000,
                        Permis: "PPA Léger",
                        Cadence: "10 balles /sec"
                    },
                    "open-dialog-desert-eagle": {
                        Prix: 6000,
                        Permis: "PPA Léger",
                        Cadence: "10 balles /sec"
                    },
                    "open-dialog-ak-47": {
                        Prix: 15000,
                        Permis: "PPA Lourd",
                        Cadence: "8 balles /sec"
                    },
                    "open-dialog-remington-870": {
                        Prix: 6500,
                        Permis: "PPA Lourd",
                        Cadence: "1 balle /sec"
                    },
                    "open-dialog-lmt-l129a1": {
                        Prix: 10000,
                        Permis: "PPA Lourd",
                        Cadence: "10 balles / sec"
                    },
                    "open-dialog-kriss-vector-smg": {
                        Prix: 14000,
                        Permis: "PPA Lourd",
                        Cadence: "20 balles / sec"
                    }
                };
            
                const openInfoBtns = document.querySelectorAll(".catalogue-item");
                const dialogInfo = document.getElementById("dialog-info");
                const closeInfoBtn = document.getElementById("close-dialog-btn-info");
            
                function openDialogInfo(id) {
                    const info = weaponInfo[id];
                    if (info) {
                        const infoText = `
                            <strong>Prix:</strong> ${info.Prix}€<br>
                            <strong>Permis:</strong> ${info.Permis}<br>
                            <strong>Cadence:</strong> ${info.Cadence}
                        `;
                        dialogInfo.querySelector(".dialog-info-content p").innerHTML = infoText;
                        dialogInfo.classList.remove("hide");
                    }
                }
            
                openInfoBtns.forEach(btn => {
                    btn.addEventListener("click", () => {
                        const dialogInfoId = btn.id;
                        openDialogInfo(dialogInfoId);
                    });
                });
            
                closeInfoBtn.addEventListener("click", () => {
                    dialogInfo.classList.add("hide");
                });
            
                // Close if user clicks outside the dialog
                dialogInfo.addEventListener("click", (event) => {
                    if (event.target === dialogInfo) {
                        dialogInfo.classList.add("hide");
                    }
                });
            });
            