"use strict";
class Entreprise
{
    nom;
    adresse;
    president;
    services; 
    addService(service){}
    removeService(service){}
    toHTML() {}
    constructor(nom, adresse, president, services){
        this.nom = nom;
        this.adresse = adresse;
        this.president = president;
        this.services = services;
    }
}