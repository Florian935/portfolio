import { Injectable } from '@angular/core';

@Injectable()
export class SkillService {

  skills = [
    [
      {
        langage: 'angular', pourcentage: 90, projets: [
          {
            name: 'Obso Tracker',
            cr: true,
            description: `Réalisation lors de mon stage de 2ème année d'une application de suivi de l'obsolescence des
            middlewares pour l'entreprise Michelin.`,
            route: '../stage/obsotracker'
          },
          {
            name: 'Cassandia',
            cr: true,
            description: `Participation à la réalisation lors de mon stage de 1ère année d'une application de gestion des
            compétences des collaborateurs pour l'entreprise Modis.`,
            route: '../stage/cassandia'
          }
        ]
      },
      {
        langage: 'springboot', pourcentage: 80, projets: [
          {
            name: 'Obso Tracker',
            cr: true,
            description: `Réalisation lors de mon stage de 2ème année d'une application de suivi de l'obsolescence des
            middlewares pour l'entreprise Michelin.`,
            route: '../stage/obsotracker'
          }
        ]
      },
      {
        langage: 'symfony', pourcentage: 65, projets: [
          { name: 'Création d\'un site lors d\'un TP permettant de gérer des voyages.', cr: false }
        ]
      },
    ],
    [
      {
        langage: 'java', pourcentage: 80, projets: [
          {
            name: 'Appli Android GSB',
            cr: true,
            description: `Réalisation lors de mon projet professionnel encadré n°2 d'une application
            Android permettant la saisie et la gestion des frais des visiteurs du laboratoire GSB.`,
            route: '../ppe/gsb-appli-android'
          },
          {
            name: 'Obso Tracker',
            cr: true,
            description: `Réalisation lors de mon stage de 2ème année d'une application de suivi de l'obsolescence des
            middlewares pour l'entreprise Michelin.`,
            route: '../stage/obsotracker'
          }
        ]
      },
      {
        langage: 'c-sharp', pourcentage: 60, projets: [
          { name: 'Jeu du pendu', cr: false },
          { name: 'Jeu du mastermind', cr: false },
          { name: 'Application de gestion de contact', cr: false }
        ]
      },
      {
        langage: 'php', pourcentage: 70, projets: [
          {
            name: 'Appli web GSB',
            cr: true,
            description: `Réalisation lors de mon projet professionnel encadré n°1 de la partie comptable de la gestion
            des frais des visiteurs de l'application web GSB.`,
            route: '../ppe/gsb-appli-web'
          }
        ]
      },
    ],
    [
      {
        langage: 'mysql', pourcentage: 80, projets: [
          {
            name: 'Obso Tracker',
            cr: true,
            description: `Réalisation lors de mon stage de 2ème année d'une application de suivi de l'obsolescence des
            middlewares pour l'entreprise Michelin.`,
            route: '../stage/obsotracker'
          },
          {
            name: 'Appli web GSB',
            cr: true,
            description: `Réalisation lors de mon projet professionnel encadré n°1 de la partie comptable de la gestion
            des frais des visiteurs de l'application web GSB.`,
            route: '../ppe/gsb-appli-web'
          },
          {
            name: 'Appli Android GSB',
            cr: true,
            description: `Réalisation lors de mon projet professionnel encadré n°2 d'une application
            Android permettant la saisie et la gestion des frais des visiteurs du laboratoire GSB.`,
            route: '../ppe/gsb-appli-android'
          }
        ]
      },
      {
        langage: 'postgresql', pourcentage: 50, projets: [
          { name: 'Pratique lors de TP pendant ma période de formation', cr: false }
        ]
      },
    ]
  ];

  constructor() { }
}
