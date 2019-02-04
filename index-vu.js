let ComponentActivitesList = {
    props: {
        list: {},
    },
    computed: {
        headersList() {

        },
        itemsList() {

        }
    },
    template: `
        <div id="content-for-liste-activite">
            <h5>Activités de l’organisme impliquant le traitement de données personnelles <button type="button" class="btn btn-primary">Encours <span class="badge badge-light">2</span></button></h5>
    
            <div id="act-list-header" class="form-inline mb-3">
              <div class="form-group col-md-10">
                <label for="nouvelle-activite" class="col-md-2">Nouvelle Activité</label>
                <input type="text" class="form-control col-md-10" id="nouvelle-activite" placeholder="Nom de l'activité">
              </div>
              <div class="form-group col-md-2">
                <button class="btn btn-primary">Ajouter</button>
              </div>
            </div>
    
            <div id="act-list-body">
                <div class="row">
                    <div class="col-2">
                        <div class="list-group" id="acts-list-tab" role="tablist">
                            <a class="list-group-item list-group-item-action active" data-toggle="list" href="#act-1" role="tab" ><span data-toggle="tooltip" data-placement="top" title="Traitement devis client">Activité <span>1</span></span></a>
                            <a class="list-group-item list-group-item-action" data-toggle="list" href="#act-2" role="tab" ><span data-toggle="tooltip" data-placement="top" title="Traitement facture client">Activité <span>2</span></span></a>
                        </div>
                    </div>
                    <div class="col-10">
                        <div class="tab-content" id="acts-tab-content">
                            <component-activite-item />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
};

let ComponentActiviteItem = {
    template: `
        <div class="tab-pane fade show active" id="act-1" role="tabpanel" >
                      <div class="form-group">
                        <h5>Fiche de registre de l’activité</h5>
                        <input type="text" class="form-control" value="Traitement devis client" name="grpd_act_name[]">
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-4">
                          <label>Date de création</label>
                          <input type="date" class="form-control" name="grpd_act_date_creation[]" >
                        </div>
                        <div class="form-group col-md-4">
                          <label>Dernière MAJ</label>
                          <input type="date" class="form-control" name="grpd_act_data_derniere_maj[]">
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group">
                          <label>Nom du responsable conjoint du traitement <i>si ce traitement de donnée est partagée avec un autre organisme</i></label>
                          <input type="text" class="form-control" name="grpd_act_nom_responsable[]">
                        </div>
                      </div>
                      <div class="form-group">
                        <label>Nom du logiciel ou de l'application. <i>si pertinent</i></label>
                        <input type="text" class="form-control" name="grpd_act_nom_logiciel[]">
                      </div>
                      <div class="form-group">
                        <label><h6>Objectifs poursuivis</h6><i>Décrivez clairement l’objet du traitement de données personnelles et ses fonctionnalités.</i> <i data-toggle="tooltip" data-placement="top" title="pour une activité «formation des personnels»:suivi des demandes de formation et des périodes de formation effectuées, organisation des sessions et évaluation des connaissances."> Exemple </i></label>
                        <textarea class="form-control" name="grpd_act_objectif[]"></textarea>
                      </div>
                      <div class="form-group">
                        <label><h6>Catégories de personnes concernées</h6><i>Listez les différents types de personnes dont vous collectez ou utilisez les données.</i> <i data-toggle="tooltip" data-placement="top" title="salariés, usagers, clients, prospects, bénéficiaires, etc."> Exemple </i></label>
                        <div class="form-inline">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_personnes_concernees_1[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_personnes_concernees_2[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_personnes_concernees_3[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_personnes_concernees_4[]">
                        </div>
                      </div>
                      <div class="form-group">
                        <label><h6>Catégories de données collectées</h6><i>Listez les différentes données traitées</i></label>
                        <div class="alert alert-warning" role="alert">Remplissez seulement les catégories concernées</div>
                        <div class="form-group">
                          <label>Etat-civil, identité, données d'identification, images. <i data-toggle="tooltip" data-placement="top" title="nom, prénom, adresse, photographie, date et lieu de naissance, etc."> Exemple </i></label>
                          <textarea class="form-control"  name="grpd_act_categorie_donnees_collectees[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Vie personnelle. <i data-toggle="tooltip" data-placement="top" title="habitudes de vie, situation familiale, etc."> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_vie_personnelle[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Vie professionnelle. <i data-toggle="tooltip" data-placement="top" title="CV, situation professionnelles, scolarité, formation, distinctions, diplômes, etc."> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_vie_professionnelle[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Informations d’ordre économique et financier. <i data-toggle="tooltip" data-placement="top" title="revenus, situation financière, données bancaires, etc."> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_info_eco_finance[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Données de connexion. <i data-toggle="tooltip" data-placement="top" title="adresses Ip, logs, identifiants des terminaux, identifiants de connexion, informations d'horodatage, etc."> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_donnees_connexion[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Données de localisation. <i data-toggle="tooltip" data-placement="top" title="déplacements, données GPS, GSM, ..."> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_donnees_localisation[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Internet. <i data-toggle="tooltip" data-placement="top" title="cookies, traceurs, données de navigation, mesuresd’audience, ..."> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_internet[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Autres catégories de données. <i data-toggle="tooltip" data-placement="top" title="précisez"> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_autre_categories_donnees[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Des  données  sensibles  sont-elles  traitées ? <i>La  collecte  de  certaines  données,  particulièrement  sensibles,  est  strictement  encadrée  par  le  RGPD  et  requiert  une  vigilance  particulière.  Il  s’agit  des  données  révélant  l'origine  prétendument  raciale  ou  ethnique,  les  opinions  politiques,  les  convictions  religieuses  ou  philosophiques  ou  l'appartenance  syndicaledes  personnes,  des  données  génétiques  et  biométriques,  des  données  concernant  la  santé,  la  vie  sexuelle  ou  l’orientation  sexuelle  des  personnes,  des  données  relatives  aux  condamnations  pénales  ou  aux  infractions,  ainsi  que  du  numéro  d'identification  national  unique  (NIR  ou  numéro  de  sécurité  sociale).</i></label>
                          <div class="alert alert-warning" role="alert">Si  oui,  lesquelles</div>
                          <textarea class="form-control" name="grpd_act_donnees_sensibles[]"></textarea>
                        </div>
                      </div>
                      <div class="form-group">
                        <label><h6>Durées de conservation des catégories de données</h6><i>Combien de temps conservez-vous ces informations?</i> <i data-toggle="tooltip" data-placement="top" title="pour une activité «formation des personnels»:suivi des demandes de formation et des périodes de formation effectuées, organisation des sessions et évaluation des connaissances."> Exemple </i></label>
                        <div class="form-inline">
                          <input type="number" class="form-control mr-2" name="grpd_act_nombre_duree_conservation[]"><select class="form-control" name="grpd_act_type_duree_conservation[]"><option value="y">jours</option><option value="m">mois</option><option value="j">années</option></select>
                        </div>
                        <labe>Si  vous  ne  pouvez  pas  indiquer  une  durée  chiffrée,  précisez  les  critères  utilisés  pour  déterminer  le  délai  d’effacement.<i data-toggle="tooltip" data-placement="top" title="3 ans à compter de la fin de la relation contractuelle"> Exemple</i></labe>
                        <div class="alert alert-warning" role="alert">Si les catégories de données ne sont pas soumises aux mêmes durées de conservation, ces différentes durées doivent apparaître dans le registre.</div>
                        <textarea class="form-control" name="grpd_act_duree_conservation_specifique[]"></textarea>
                      </div>
                      <div class="form-group">
                        <label><h6>Catégories de destinataires des données</h6><i>Destinataires internes. </i> <i data-toggle="tooltip" data-placement="top" title="entité ou service, catégories de personneshabilitées, direction informatique, etc."> Exemple </i></label>
                        <div class="form-inline">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_destinataire_1[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_destinataire_2[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_destinataire_3[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_destinataire_4[]">
                        </div>
                        <label><i>Organismes externes. </i> <i data-toggle="tooltip" data-placement="top" title="filiales,  partenaires,  etc."> Exemple </i></label>
                        <div class="form-inline">
                          <input type="text" class="form-control mr-2" name="grpd_act_organisme_externe_1[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_organisme_externe_2[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_organisme_externe_3[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_organisme_externe_4[]">
                        </div>
                        <label><i>Sous-traitants. </i> <i data-toggle="tooltip" data-placement="top" title="hébergeurs, prestataires et maintenanceinformatiques, etc."> Exemple </i></label>
                        <div class="form-inline">
                          <input type="text" class="form-control mr-2" name="grpd_act_sous_traitant_1[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_sous_traitant_2[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_sous_traitant_3[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_sous_traitant_4[]">
                        </div>
                      </div>
                      <div class="form-group">
                        <label><h6>Transferts des données hors UE</h6><i>Des données personnelles sont-elles transmises hors de l’Union européenne?</i></label>
                        <div class="alert alert-warning" role="alert">Si oui, vers quel(s) pays ?</div>
                        <textarea class="form-control" name="grpd_act_transfer_donnees_hors_ue[]"></textarea>
                      </div>
                      <div class="form-group">
                        <label><h6>Mesures de sécurité</h6><i>Décrivez les mesures de sécurité organisationnelles et techniques prévues pour préserver la confidentialité des données.</i></label>
                        <div class="alert alert-danger" role="alert">Le niveau de sécurité doit être adapté aux risques soulevés par le traitement. Les exemples suivants constituent des garanties de base à prévoir et peuvent devoir être complétés.</div>
                        <div class="alert alert-warning" role="alert">Remplissez seulement les catégories concernées</div>
                        <div class="form-group">
                          <label>Contrôle d'accès des utilisateurs : <i>Décrivez les mesures</i></label>
                          <textarea class="form-control" name="grpd_act_controle_acces_utilisateurs[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Mesures de traçabilité : <i>précisez la nature des traces</i><i data-toggle="tooltip" data-placement="top" title="journalisation des accès des utilisateurs"> ( exemple ) </i>
                            <i>, les données enregistrées</i><i data-toggle="tooltip" data-placement="top" title=" identifiant, date et heure de connexion, etc."> ( exemple ) </i>
                            <i> et leur durée de conservation</i>
                          </label>
                          <textarea class="form-control" name="grpd_act_mesure_tracabilite[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Mesures de protection des logiciels (antivirus, mises à jour et correctifs de sécurité, tests, etc.) : <i>Décrivez les mesures</i></label>
                          <textarea class="form-control" name="grpd_act_mesure_protection_logiciel[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Sauvegarde des données : <i>Décrivez les modalités</i></label>
                          <textarea class="form-control" name="grpd_act_sauvegarde_donnees[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Chiffrement des données : <i>Décrivez les mesures. </i><i data-toggle="tooltip" data-placement="top" title="site accessible en https, utilisation de TLS, etc."> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_chiffrement_donnees[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Contrôle des sous-traitants : <i>Décrivez les modalités</i></label>
                          <textarea class="form-control" name="grpd_act_controle_sous_traitant[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Autres mesures:</label>
                          <textarea class="form-control" name="grpd_act_autre_mesure[]"></textarea>
                        </div>
                      </div>
                    </div>
        <div class="tab-pane fade" id="act-2" role="tabpanel" >
                      <div class="form-group">
                        <h5>Fiche de registre de l’activité</h5>
                        <input type="text" class="form-control" value="Traitement facture client" name="grpd_act_name[]">
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-4">
                          <label>Date de création</label>
                          <input type="date" class="form-control" name="grpd_act_date_creation[]" >
                        </div>
                        <div class="form-group col-md-4">
                          <label>Dernière MAJ</label>
                          <input type="date" class="form-control" name="grpd_act_data_derniere_maj[]">
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group">
                          <label>Nom du responsable conjoint du traitement <i>si ce traitement de donnée est partagée avec un autre organisme</i></label>
                          <input type="text" class="form-control" name="grpd_act_nom_responsable[]">
                        </div>
                      </div>
                      <div class="form-group">
                        <label>Nom du logiciel ou de l'application. <i>si pertinent</i></label>
                        <input type="text" class="form-control" name="grpd_act_nom_logiciel[]">
                      </div>
                      <div class="form-group">
                        <label><h6>Objectifs poursuivis</h6><i>Décrivez clairement l’objet du traitement de données personnelles et ses fonctionnalités.</i> <i data-toggle="tooltip" data-placement="top" title="pour une activité «formation des personnels»:suivi des demandes de formation et des périodes de formation effectuées, organisation des sessions et évaluation des connaissances."> Exemple </i></label>
                        <textarea class="form-control" name="grpd_act_objectif[]"></textarea>
                      </div>
                      <div class="form-group">
                        <label><h6>Catégories de personnes concernées</h6><i>Listez les différents types de personnes dont vous collectez ou utilisez les données.</i> <i data-toggle="tooltip" data-placement="top" title="salariés, usagers, clients, prospects, bénéficiaires, etc."> Exemple </i></label>
                        <div class="form-inline">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_personnes_concernees_1[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_personnes_concernees_2[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_personnes_concernees_3[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_personnes_concernees_4[]">
                        </div>
                      </div>
                      <div class="form-group">
                        <label><h6>Catégories de données collectées</h6><i>Listez les différentes données traitées</i></label>
                        <div class="alert alert-warning" role="alert">Remplissez seulement les catégories concernées</div>
                        <div class="form-group">
                          <label>Etat-civil, identité, données d'identification, images. <i data-toggle="tooltip" data-placement="top" title="nom, prénom, adresse, photographie, date et lieu de naissance, etc."> Exemple </i></label>
                          <textarea class="form-control"  name="grpd_act_categorie_donnees_collectees[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Vie personnelle. <i data-toggle="tooltip" data-placement="top" title="habitudes de vie, situation familiale, etc."> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_vie_personnelle[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Vie professionnelle. <i data-toggle="tooltip" data-placement="top" title="CV, situation professionnelles, scolarité, formation, distinctions, diplômes, etc."> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_vie_professionnelle[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Informations d’ordre économique et financier. <i data-toggle="tooltip" data-placement="top" title="revenus, situation financière, données bancaires, etc."> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_info_eco_finance[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Données de connexion. <i data-toggle="tooltip" data-placement="top" title="adresses Ip, logs, identifiants des terminaux, identifiants de connexion, informations d'horodatage, etc."> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_donnees_connexion[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Données de localisation. <i data-toggle="tooltip" data-placement="top" title="déplacements, données GPS, GSM, ..."> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_donnees_localisation[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Internet. <i data-toggle="tooltip" data-placement="top" title="cookies, traceurs, données de navigation, mesuresd’audience, ..."> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_internet[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Autres catégories de données. <i data-toggle="tooltip" data-placement="top" title="précisez"> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_autre_categories_donnees[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Des  données  sensibles  sont-elles  traitées ? <i>La  collecte  de  certaines  données,  particulièrement  sensibles,  est  strictement  encadrée  par  le  RGPD  et  requiert  une  vigilance  particulière.  Il  s’agit  des  données  révélant  l'origine  prétendument  raciale  ou  ethnique,  les  opinions  politiques,  les  convictions  religieuses  ou  philosophiques  ou  l'appartenance  syndicaledes  personnes,  des  données  génétiques  et  biométriques,  des  données  concernant  la  santé,  la  vie  sexuelle  ou  l’orientation  sexuelle  des  personnes,  des  données  relatives  aux  condamnations  pénales  ou  aux  infractions,  ainsi  que  du  numéro  d'identification  national  unique  (NIR  ou  numéro  de  sécurité  sociale).</i></label>
                          <div class="alert alert-warning" role="alert">Si  oui,  lesquelles</div>
                          <textarea class="form-control" name="grpd_act_donnees_sensibles[]"></textarea>
                        </div>
                      </div>
                      <div class="form-group">
                        <label><h6>Durées de conservation des catégories de données</h6><i>Combien de temps conservez-vous ces informations?</i> <i data-toggle="tooltip" data-placement="top" title="pour une activité «formation des personnels»:suivi des demandes de formation et des périodes de formation effectuées, organisation des sessions et évaluation des connaissances."> Exemple </i></label>
                        <div class="form-inline">
                          <input type="number" class="form-control mr-2" name="grpd_act_nombre_duree_conservation[]"><select class="form-control" name="grpd_act_type_duree_conservation[]"><option value="y">jours</option><option value="m">mois</option><option value="j">années</option></select>
                        </div>
                        <labe>Si  vous  ne  pouvez  pas  indiquer  une  durée  chiffrée,  précisez  les  critères  utilisés  pour  déterminer  le  délai  d’effacement.<i data-toggle="tooltip" data-placement="top" title="3 ans à compter de la fin de la relation contractuelle"> Exemple</i></labe>
                        <div class="alert alert-warning" role="alert">Si les catégories de données ne sont pas soumises aux mêmes durées de conservation, ces différentes durées doivent apparaître dans le registre.</div>
                        <textarea class="form-control" name="grpd_act_duree_conservation_specifique[]"></textarea>
                      </div>
                      <div class="form-group">
                        <label><h6>Catégories de destinataires des données</h6><i>Destinataires internes. </i> <i data-toggle="tooltip" data-placement="top" title="entité ou service, catégories de personneshabilitées, direction informatique, etc."> Exemple </i></label>
                        <div class="form-inline">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_destinataire_1[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_destinataire_2[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_destinataire_3[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_destinataire_4[]">
                        </div>
                        <label><i>Organismes externes. </i> <i data-toggle="tooltip" data-placement="top" title="filiales,  partenaires,  etc."> Exemple </i></label>
                        <div class="form-inline">
                          <input type="text" class="form-control mr-2" name="grpd_act_organisme_externe_1[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_organisme_externe_2[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_organisme_externe_3[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_organisme_externe_4[]">
                        </div>
                        <label><i>Sous-traitants. </i> <i data-toggle="tooltip" data-placement="top" title="hébergeurs, prestataires et maintenanceinformatiques, etc."> Exemple </i></label>
                        <div class="form-inline">
                          <input type="text" class="form-control mr-2" name="grpd_act_sous_traitant_1[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_sous_traitant_2[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_sous_traitant_3[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_sous_traitant_4[]">
                        </div>
                      </div>
                      <div class="form-group">
                        <label><h6>Transferts des données hors UE</h6><i>Des données personnelles sont-elles transmises hors de l’Union européenne?</i></label>
                        <div class="alert alert-warning" role="alert">Si oui, vers quel(s) pays ?</div>
                        <textarea class="form-control" name="grpd_act_transfer_donnees_hors_ue[]"></textarea>
                      </div>
                      <div class="form-group">
                        <label><h6>Mesures de sécurité</h6><i>Décrivez les mesures de sécurité organisationnelles et techniques prévues pour préserver la confidentialité des données.</i></label>
                        <div class="alert alert-danger" role="alert">Le niveau de sécurité doit être adapté aux risques soulevés par le traitement. Les exemples suivants constituent des garanties de base à prévoir et peuvent devoir être complétés.</div>
                        <div class="alert alert-warning" role="alert">Remplissez seulement les catégories concernées</div>
                        <div class="form-group">
                          <label>Contrôle d'accès des utilisateurs : <i>Décrivez les mesures</i></label>
                          <textarea class="form-control" name="grpd_act_controle_acces_utilisateurs[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Mesures de traçabilité : <i>précisez la nature des traces</i><i data-toggle="tooltip" data-placement="top" title="journalisation des accès des utilisateurs"> ( exemple ) </i>
                            <i>, les données enregistrées</i><i data-toggle="tooltip" data-placement="top" title=" identifiant, date et heure de connexion, etc."> ( exemple ) </i>
                            <i> et leur durée de conservation</i>
                          </label>
                          <textarea class="form-control" name="grpd_act_mesure_tracabilite[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Mesures de protection des logiciels (antivirus, mises à jour et correctifs de sécurité, tests, etc.) : <i>Décrivez les mesures</i></label>
                          <textarea class="form-control" name="grpd_act_mesure_protection_logiciel[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Sauvegarde des données : <i>Décrivez les modalités</i></label>
                          <textarea class="form-control" name="grpd_act_sauvegarde_donnees[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Chiffrement des données : <i>Décrivez les mesures. </i><i data-toggle="tooltip" data-placement="top" title="site accessible en https, utilisation de TLS, etc."> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_chiffrement_donnees[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Contrôle des sous-traitants : <i>Décrivez les modalités</i></label>
                          <textarea class="form-control" name="grpd_act_controle_sous_traitant[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Autres mesures:</label>
                          <textarea class="form-control" name="grpd_act_autre_mesure[]"></textarea>
                        </div>
                      </div>
                    </div>
        <div class="tab-pane fade" id="act-3" role="tabpanel">
                      <div class="form-group">
                        <h5>Fiche de registre de l’activité</h5>
                        <input type="text" class="form-control" value="Traitement fournisseurs" name="grpd_act_name[]">
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-4">
                          <label>Date de création</label>
                          <input type="date" class="form-control" name="grpd_act_date_creation[]" >
                        </div>
                        <div class="form-group col-md-4">
                          <label>Dernière MAJ</label>
                          <input type="date" class="form-control" name="grpd_act_data_derniere_maj[]">
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group">
                          <label>Nom du responsable conjoint du traitement <i>si ce traitement de donnée est partagée avec un autre organisme</i></label>
                          <input type="text" class="form-control" name="grpd_act_nom_responsable[]">
                        </div>
                      </div>
                      <div class="form-group">
                        <label>Nom du logiciel ou de l'application. <i>si pertinent</i></label>
                        <input type="text" class="form-control" name="grpd_act_nom_logiciel[]">
                      </div>
                      <div class="form-group">
                        <label><h6>Objectifs poursuivis</h6><i>Décrivez clairement l’objet du traitement de données personnelles et ses fonctionnalités.</i> <i data-toggle="tooltip" data-placement="top" title="pour une activité «formation des personnels»:suivi des demandes de formation et des périodes de formation effectuées, organisation des sessions et évaluation des connaissances."> Exemple </i></label>
                        <textarea class="form-control" name="grpd_act_objectif[]"></textarea>
                      </div>
                      <div class="form-group">
                        <label><h6>Catégories de personnes concernées</h6><i>Listez les différents types de personnes dont vous collectez ou utilisez les données.</i> <i data-toggle="tooltip" data-placement="top" title="salariés, usagers, clients, prospects, bénéficiaires, etc."> Exemple </i></label>
                        <div class="form-inline">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_personnes_concernees_1[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_personnes_concernees_2[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_personnes_concernees_3[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_personnes_concernees_4[]">
                        </div>
                      </div>
                      <div class="form-group">
                        <label><h6>Catégories de données collectées</h6><i>Listez les différentes données traitées</i></label>
                        <div class="alert alert-warning" role="alert">Remplissez seulement les catégories concernées</div>
                        <div class="form-group">
                          <label>Etat-civil, identité, données d'identification, images. <i data-toggle="tooltip" data-placement="top" title="nom, prénom, adresse, photographie, date et lieu de naissance, etc."> Exemple </i></label>
                          <textarea class="form-control"  name="grpd_act_categorie_donnees_collectees[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Vie personnelle. <i data-toggle="tooltip" data-placement="top" title="habitudes de vie, situation familiale, etc."> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_vie_personnelle[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Vie professionnelle. <i data-toggle="tooltip" data-placement="top" title="CV, situation professionnelles, scolarité, formation, distinctions, diplômes, etc."> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_vie_professionnelle[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Informations d’ordre économique et financier. <i data-toggle="tooltip" data-placement="top" title="revenus, situation financière, données bancaires, etc."> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_info_eco_finance[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Données de connexion. <i data-toggle="tooltip" data-placement="top" title="adresses Ip, logs, identifiants des terminaux, identifiants de connexion, informations d'horodatage, etc."> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_donnees_connexion[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Données de localisation. <i data-toggle="tooltip" data-placement="top" title="déplacements, données GPS, GSM, ..."> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_donnees_localisation[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Internet. <i data-toggle="tooltip" data-placement="top" title="cookies, traceurs, données de navigation, mesuresd’audience, ..."> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_internet[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Autres catégories de données. <i data-toggle="tooltip" data-placement="top" title="précisez"> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_autre_categories_donnees[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Des  données  sensibles  sont-elles  traitées ? <i>La  collecte  de  certaines  données,  particulièrement  sensibles,  est  strictement  encadrée  par  le  RGPD  et  requiert  une  vigilance  particulière.  Il  s’agit  des  données  révélant  l'origine  prétendument  raciale  ou  ethnique,  les  opinions  politiques,  les  convictions  religieuses  ou  philosophiques  ou  l'appartenance  syndicaledes  personnes,  des  données  génétiques  et  biométriques,  des  données  concernant  la  santé,  la  vie  sexuelle  ou  l’orientation  sexuelle  des  personnes,  des  données  relatives  aux  condamnations  pénales  ou  aux  infractions,  ainsi  que  du  numéro  d'identification  national  unique  (NIR  ou  numéro  de  sécurité  sociale).</i></label>
                          <div class="alert alert-warning" role="alert">Si  oui,  lesquelles</div>
                          <textarea class="form-control" name="grpd_act_donnees_sensibles[]"></textarea>
                        </div>
                      </div>
                      <div class="form-group">
                        <label><h6>Durées de conservation des catégories de données</h6><i>Combien de temps conservez-vous ces informations?</i> <i data-toggle="tooltip" data-placement="top" title="pour une activité «formation des personnels»:suivi des demandes de formation et des périodes de formation effectuées, organisation des sessions et évaluation des connaissances."> Exemple </i></label>
                        <div class="form-inline">
                          <input type="number" class="form-control mr-2" name="grpd_act_nombre_duree_conservation[]"><select class="form-control" name="grpd_act_type_duree_conservation[]"><option value="y">jours</option><option value="m">mois</option><option value="j">années</option></select>
                        </div>
                        <labe>Si  vous  ne  pouvez  pas  indiquer  une  durée  chiffrée,  précisez  les  critères  utilisés  pour  déterminer  le  délai  d’effacement.<i data-toggle="tooltip" data-placement="top" title="3 ans à compter de la fin de la relation contractuelle"> Exemple</i></labe>
                        <div class="alert alert-warning" role="alert">Si les catégories de données ne sont pas soumises aux mêmes durées de conservation, ces différentes durées doivent apparaître dans le registre.</div>
                        <textarea class="form-control" name="grpd_act_duree_conservation_specifique[]"></textarea>
                      </div>
                      <div class="form-group">
                        <label><h6>Catégories de destinataires des données</h6><i>Destinataires internes. </i> <i data-toggle="tooltip" data-placement="top" title="entité ou service, catégories de personneshabilitées, direction informatique, etc."> Exemple </i></label>
                        <div class="form-inline">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_destinataire_1[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_destinataire_2[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_destinataire_3[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_destinataire_4[]">
                        </div>
                        <label><i>Organismes externes. </i> <i data-toggle="tooltip" data-placement="top" title="filiales,  partenaires,  etc."> Exemple </i></label>
                        <div class="form-inline">
                          <input type="text" class="form-control mr-2" name="grpd_act_organisme_externe_1[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_organisme_externe_2[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_organisme_externe_3[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_organisme_externe_4[]">
                        </div>
                        <label><i>Sous-traitants. </i> <i data-toggle="tooltip" data-placement="top" title="hébergeurs, prestataires et maintenanceinformatiques, etc."> Exemple </i></label>
                        <div class="form-inline">
                          <input type="text" class="form-control mr-2" name="grpd_act_sous_traitant_1[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_sous_traitant_2[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_sous_traitant_3[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_sous_traitant_4[]">
                        </div>
                      </div>
                      <div class="form-group">
                        <label><h6>Transferts des données hors UE</h6><i>Des données personnelles sont-elles transmises hors de l’Union européenne?</i></label>
                        <div class="alert alert-warning" role="alert">Si oui, vers quel(s) pays ?</div>
                        <textarea class="form-control" name="grpd_act_transfer_donnees_hors_ue[]"></textarea>
                      </div>
                      <div class="form-group">
                        <label><h6>Mesures de sécurité</h6><i>Décrivez les mesures de sécurité organisationnelles et techniques prévues pour préserver la confidentialité des données.</i></label>
                        <div class="alert alert-danger" role="alert">Le niveau de sécurité doit être adapté aux risques soulevés par le traitement. Les exemples suivants constituent des garanties de base à prévoir et peuvent devoir être complétés.</div>
                        <div class="alert alert-warning" role="alert">Remplissez seulement les catégories concernées</div>
                        <div class="form-group">
                          <label>Contrôle d'accès des utilisateurs : <i>Décrivez les mesures</i></label>
                          <textarea class="form-control" name="grpd_act_controle_acces_utilisateurs[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Mesures de traçabilité : <i>précisez la nature des traces</i><i data-toggle="tooltip" data-placement="top" title="journalisation des accès des utilisateurs"> ( exemple ) </i>
                            <i>, les données enregistrées</i><i data-toggle="tooltip" data-placement="top" title=" identifiant, date et heure de connexion, etc."> ( exemple ) </i>
                            <i> et leur durée de conservation</i>
                          </label>
                          <textarea class="form-control" name="grpd_act_mesure_tracabilite[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Mesures de protection des logiciels (antivirus, mises à jour et correctifs de sécurité, tests, etc.) : <i>Décrivez les mesures</i></label>
                          <textarea class="form-control" name="grpd_act_mesure_protection_logiciel[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Sauvegarde des données : <i>Décrivez les modalités</i></label>
                          <textarea class="form-control" name="grpd_act_sauvegarde_donnees[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Chiffrement des données : <i>Décrivez les mesures. </i><i data-toggle="tooltip" data-placement="top" title="site accessible en https, utilisation de TLS, etc."> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_chiffrement_donnees[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Contrôle des sous-traitants : <i>Décrivez les modalités</i></label>
                          <textarea class="form-control" name="grpd_act_controle_sous_traitant[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Autres mesures:</label>
                          <textarea class="form-control" name="grpd_act_autre_mesure[]"></textarea>
                        </div>
                      </div>
                    </div>
        <div class="tab-pane fade" id="act-4" role="tabpanel" >
                      <div class="form-group">
                        <h5>Fiche de registre de l’activité</h5>
                        <input type="text" class="form-control" value="Traitement devis achat" name="grpd_act_name[]">
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-4">
                          <label>Date de création</label>
                          <input type="date" class="form-control" name="grpd_act_date_creation[]" >
                        </div>
                        <div class="form-group col-md-4">
                          <label>Dernière MAJ</label>
                          <input type="date" class="form-control" name="grpd_act_data_derniere_maj[]">
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group">
                          <label>Nom du responsable conjoint du traitement <i>si ce traitement de donnée est partagée avec un autre organisme</i></label>
                          <input type="text" class="form-control" name="grpd_act_nom_responsable[]">
                        </div>
                      </div>
                      <div class="form-group">
                        <label>Nom du logiciel ou de l'application. <i>si pertinent</i></label>
                        <input type="text" class="form-control" name="grpd_act_nom_logiciel[]">
                      </div>
                      <div class="form-group">
                        <label><h6>Objectifs poursuivis</h6><i>Décrivez clairement l’objet du traitement de données personnelles et ses fonctionnalités.</i> <i data-toggle="tooltip" data-placement="top" title="pour une activité «formation des personnels»:suivi des demandes de formation et des périodes de formation effectuées, organisation des sessions et évaluation des connaissances."> Exemple </i></label>
                        <textarea class="form-control" name="grpd_act_objectif[]"></textarea>
                      </div>
                      <div class="form-group">
                        <label><h6>Catégories de personnes concernées</h6><i>Listez les différents types de personnes dont vous collectez ou utilisez les données.</i> <i data-toggle="tooltip" data-placement="top" title="salariés, usagers, clients, prospects, bénéficiaires, etc."> Exemple </i></label>
                        <div class="form-inline">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_personnes_concernees_1[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_personnes_concernees_2[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_personnes_concernees_3[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_personnes_concernees_4[]">
                        </div>
                      </div>
                      <div class="form-group">
                        <label><h6>Catégories de données collectées</h6><i>Listez les différentes données traitées</i></label>
                        <div class="alert alert-warning" role="alert">Remplissez seulement les catégories concernées</div>
                        <div class="form-group">
                          <label>Etat-civil, identité, données d'identification, images. <i data-toggle="tooltip" data-placement="top" title="nom, prénom, adresse, photographie, date et lieu de naissance, etc."> Exemple </i></label>
                          <textarea class="form-control"  name="grpd_act_categorie_donnees_collectees[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Vie personnelle. <i data-toggle="tooltip" data-placement="top" title="habitudes de vie, situation familiale, etc."> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_vie_personnelle[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Vie professionnelle. <i data-toggle="tooltip" data-placement="top" title="CV, situation professionnelles, scolarité, formation, distinctions, diplômes, etc."> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_vie_professionnelle[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Informations d’ordre économique et financier. <i data-toggle="tooltip" data-placement="top" title="revenus, situation financière, données bancaires, etc."> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_info_eco_finance[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Données de connexion. <i data-toggle="tooltip" data-placement="top" title="adresses Ip, logs, identifiants des terminaux, identifiants de connexion, informations d'horodatage, etc."> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_donnees_connexion[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Données de localisation. <i data-toggle="tooltip" data-placement="top" title="déplacements, données GPS, GSM, ..."> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_donnees_localisation[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Internet. <i data-toggle="tooltip" data-placement="top" title="cookies, traceurs, données de navigation, mesuresd’audience, ..."> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_internet[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Autres catégories de données. <i data-toggle="tooltip" data-placement="top" title="précisez"> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_autre_categories_donnees[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Des  données  sensibles  sont-elles  traitées ? <i>La  collecte  de  certaines  données,  particulièrement  sensibles,  est  strictement  encadrée  par  le  RGPD  et  requiert  une  vigilance  particulière.  Il  s’agit  des  données  révélant  l'origine  prétendument  raciale  ou  ethnique,  les  opinions  politiques,  les  convictions  religieuses  ou  philosophiques  ou  l'appartenance  syndicaledes  personnes,  des  données  génétiques  et  biométriques,  des  données  concernant  la  santé,  la  vie  sexuelle  ou  l’orientation  sexuelle  des  personnes,  des  données  relatives  aux  condamnations  pénales  ou  aux  infractions,  ainsi  que  du  numéro  d'identification  national  unique  (NIR  ou  numéro  de  sécurité  sociale).</i></label>
                          <div class="alert alert-warning" role="alert">Si  oui,  lesquelles</div>
                          <textarea class="form-control" name="grpd_act_donnees_sensibles[]"></textarea>
                        </div>
                      </div>
                      <div class="form-group">
                        <label><h6>Durées de conservation des catégories de données</h6><i>Combien de temps conservez-vous ces informations?</i> <i data-toggle="tooltip" data-placement="top" title="pour une activité «formation des personnels»:suivi des demandes de formation et des périodes de formation effectuées, organisation des sessions et évaluation des connaissances."> Exemple </i></label>
                        <div class="form-inline">
                          <input type="number" class="form-control mr-2" name="grpd_act_nombre_duree_conservation[]"><select class="form-control" name="grpd_act_type_duree_conservation[]"><option value="y">jours</option><option value="m">mois</option><option value="j">années</option></select>
                        </div>
                        <labe>Si  vous  ne  pouvez  pas  indiquer  une  durée  chiffrée,  précisez  les  critères  utilisés  pour  déterminer  le  délai  d’effacement.<i data-toggle="tooltip" data-placement="top" title="3 ans à compter de la fin de la relation contractuelle"> Exemple</i></labe>
                        <div class="alert alert-warning" role="alert">Si les catégories de données ne sont pas soumises aux mêmes durées de conservation, ces différentes durées doivent apparaître dans le registre.</div>
                        <textarea class="form-control" name="grpd_act_duree_conservation_specifique[]"></textarea>
                      </div>
                      <div class="form-group">
                        <label><h6>Catégories de destinataires des données</h6><i>Destinataires internes. </i> <i data-toggle="tooltip" data-placement="top" title="entité ou service, catégories de personneshabilitées, direction informatique, etc."> Exemple </i></label>
                        <div class="form-inline">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_destinataire_1[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_destinataire_2[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_destinataire_3[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_destinataire_4[]">
                        </div>
                        <label><i>Organismes externes. </i> <i data-toggle="tooltip" data-placement="top" title="filiales,  partenaires,  etc."> Exemple </i></label>
                        <div class="form-inline">
                          <input type="text" class="form-control mr-2" name="grpd_act_organisme_externe_1[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_organisme_externe_2[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_organisme_externe_3[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_organisme_externe_4[]">
                        </div>
                        <label><i>Sous-traitants. </i> <i data-toggle="tooltip" data-placement="top" title="hébergeurs, prestataires et maintenanceinformatiques, etc."> Exemple </i></label>
                        <div class="form-inline">
                          <input type="text" class="form-control mr-2" name="grpd_act_sous_traitant_1[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_sous_traitant_2[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_sous_traitant_3[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_sous_traitant_4[]">
                        </div>
                      </div>
                      <div class="form-group">
                        <label><h6>Transferts des données hors UE</h6><i>Des données personnelles sont-elles transmises hors de l’Union européenne?</i></label>
                        <div class="alert alert-warning" role="alert">Si oui, vers quel(s) pays ?</div>
                        <textarea class="form-control" name="grpd_act_transfer_donnees_hors_ue[]"></textarea>
                      </div>
                      <div class="form-group">
                        <label><h6>Mesures de sécurité</h6><i>Décrivez les mesures de sécurité organisationnelles et techniques prévues pour préserver la confidentialité des données.</i></label>
                        <div class="alert alert-danger" role="alert">Le niveau de sécurité doit être adapté aux risques soulevés par le traitement. Les exemples suivants constituent des garanties de base à prévoir et peuvent devoir être complétés.</div>
                        <div class="alert alert-warning" role="alert">Remplissez seulement les catégories concernées</div>
                        <div class="form-group">
                          <label>Contrôle d'accès des utilisateurs : <i>Décrivez les mesures</i></label>
                          <textarea class="form-control" name="grpd_act_controle_acces_utilisateurs[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Mesures de traçabilité : <i>précisez la nature des traces</i><i data-toggle="tooltip" data-placement="top" title="journalisation des accès des utilisateurs"> ( exemple ) </i>
                            <i>, les données enregistrées</i><i data-toggle="tooltip" data-placement="top" title=" identifiant, date et heure de connexion, etc."> ( exemple ) </i>
                            <i> et leur durée de conservation</i>
                          </label>
                          <textarea class="form-control" name="grpd_act_mesure_tracabilite[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Mesures de protection des logiciels (antivirus, mises à jour et correctifs de sécurité, tests, etc.) : <i>Décrivez les mesures</i></label>
                          <textarea class="form-control" name="grpd_act_mesure_protection_logiciel[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Sauvegarde des données : <i>Décrivez les modalités</i></label>
                          <textarea class="form-control" name="grpd_act_sauvegarde_donnees[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Chiffrement des données : <i>Décrivez les mesures. </i><i data-toggle="tooltip" data-placement="top" title="site accessible en https, utilisation de TLS, etc."> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_chiffrement_donnees[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Contrôle des sous-traitants : <i>Décrivez les modalités</i></label>
                          <textarea class="form-control" name="grpd_act_controle_sous_traitant[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Autres mesures:</label>
                          <textarea class="form-control" name="grpd_act_autre_mesure[]"></textarea>
                        </div>
                      </div>
                    </div>
        <div class="tab-pane fade" id="act-5" role="tabpanel" >
                      <div class="form-group">
                        <h5>Fiche de registre de l’activité</h5>
                        <input type="text" class="form-control" value="Traitement facture achat" name="grpd_act_name[]">
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-4">
                          <label>Date de création</label>
                          <input type="date" class="form-control" name="grpd_act_date_creation[]" >
                        </div>
                        <div class="form-group col-md-4">
                          <label>Dernière MAJ</label>
                          <input type="date" class="form-control" name="grpd_act_data_derniere_maj[]">
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group">
                          <label>Nom du responsable conjoint du traitement <i>si ce traitement de donnée est partagée avec un autre organisme</i></label>
                          <input type="text" class="form-control" name="grpd_act_nom_responsable[]">
                        </div>
                      </div>
                      <div class="form-group">
                        <label>Nom du logiciel ou de l'application. <i>si pertinent</i></label>
                        <input type="text" class="form-control" name="grpd_act_nom_logiciel[]">
                      </div>
                      <div class="form-group">
                        <label><h6>Objectifs poursuivis</h6><i>Décrivez clairement l’objet du traitement de données personnelles et ses fonctionnalités.</i> <i data-toggle="tooltip" data-placement="top" title="pour une activité «formation des personnels»:suivi des demandes de formation et des périodes de formation effectuées, organisation des sessions et évaluation des connaissances."> Exemple </i></label>
                        <textarea class="form-control" name="grpd_act_objectif[]"></textarea>
                      </div>
                      <div class="form-group">
                        <label><h6>Catégories de personnes concernées</h6><i>Listez les différents types de personnes dont vous collectez ou utilisez les données.</i> <i data-toggle="tooltip" data-placement="top" title="salariés, usagers, clients, prospects, bénéficiaires, etc."> Exemple </i></label>
                        <div class="form-inline">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_personnes_concernees_1[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_personnes_concernees_2[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_personnes_concernees_3[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_personnes_concernees_4[]">
                        </div>
                      </div>
                      <div class="form-group">
                        <label><h6>Catégories de données collectées</h6><i>Listez les différentes données traitées</i></label>
                        <div class="alert alert-warning" role="alert">Remplissez seulement les catégories concernées</div>
                        <div class="form-group">
                          <label>Etat-civil, identité, données d'identification, images. <i data-toggle="tooltip" data-placement="top" title="nom, prénom, adresse, photographie, date et lieu de naissance, etc."> Exemple </i></label>
                          <textarea class="form-control"  name="grpd_act_categorie_donnees_collectees[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Vie personnelle. <i data-toggle="tooltip" data-placement="top" title="habitudes de vie, situation familiale, etc."> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_vie_personnelle[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Vie professionnelle. <i data-toggle="tooltip" data-placement="top" title="CV, situation professionnelles, scolarité, formation, distinctions, diplômes, etc."> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_vie_professionnelle[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Informations d’ordre économique et financier. <i data-toggle="tooltip" data-placement="top" title="revenus, situation financière, données bancaires, etc."> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_info_eco_finance[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Données de connexion. <i data-toggle="tooltip" data-placement="top" title="adresses Ip, logs, identifiants des terminaux, identifiants de connexion, informations d'horodatage, etc."> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_donnees_connexion[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Données de localisation. <i data-toggle="tooltip" data-placement="top" title="déplacements, données GPS, GSM, ..."> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_donnees_localisation[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Internet. <i data-toggle="tooltip" data-placement="top" title="cookies, traceurs, données de navigation, mesuresd’audience, ..."> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_internet[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Autres catégories de données. <i data-toggle="tooltip" data-placement="top" title="précisez"> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_autre_categories_donnees[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Des  données  sensibles  sont-elles  traitées ? <i>La  collecte  de  certaines  données,  particulièrement  sensibles,  est  strictement  encadrée  par  le  RGPD  et  requiert  une  vigilance  particulière.  Il  s’agit  des  données  révélant  l'origine  prétendument  raciale  ou  ethnique,  les  opinions  politiques,  les  convictions  religieuses  ou  philosophiques  ou  l'appartenance  syndicaledes  personnes,  des  données  génétiques  et  biométriques,  des  données  concernant  la  santé,  la  vie  sexuelle  ou  l’orientation  sexuelle  des  personnes,  des  données  relatives  aux  condamnations  pénales  ou  aux  infractions,  ainsi  que  du  numéro  d'identification  national  unique  (NIR  ou  numéro  de  sécurité  sociale).</i></label>
                          <div class="alert alert-warning" role="alert">Si  oui,  lesquelles</div>
                          <textarea class="form-control" name="grpd_act_donnees_sensibles[]"></textarea>
                        </div>
                      </div>
                      <div class="form-group">
                        <label><h6>Durées de conservation des catégories de données</h6><i>Combien de temps conservez-vous ces informations?</i> <i data-toggle="tooltip" data-placement="top" title="pour une activité «formation des personnels»:suivi des demandes de formation et des périodes de formation effectuées, organisation des sessions et évaluation des connaissances."> Exemple </i></label>
                        <div class="form-inline">
                          <input type="number" class="form-control mr-2" name="grpd_act_nombre_duree_conservation[]"><select class="form-control" name="grpd_act_type_duree_conservation[]"><option value="y">jours</option><option value="m">mois</option><option value="j">années</option></select>
                        </div>
                        <labe>Si  vous  ne  pouvez  pas  indiquer  une  durée  chiffrée,  précisez  les  critères  utilisés  pour  déterminer  le  délai  d’effacement.<i data-toggle="tooltip" data-placement="top" title="3 ans à compter de la fin de la relation contractuelle"> Exemple</i></labe>
                        <div class="alert alert-warning" role="alert">Si les catégories de données ne sont pas soumises aux mêmes durées de conservation, ces différentes durées doivent apparaître dans le registre.</div>
                        <textarea class="form-control" name="grpd_act_duree_conservation_specifique[]"></textarea>
                      </div>
                      <div class="form-group">
                        <label><h6>Catégories de destinataires des données</h6><i>Destinataires internes. </i> <i data-toggle="tooltip" data-placement="top" title="entité ou service, catégories de personneshabilitées, direction informatique, etc."> Exemple </i></label>
                        <div class="form-inline">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_destinataire_1[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_destinataire_2[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_destinataire_3[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_categorie_destinataire_4[]">
                        </div>
                        <label><i>Organismes externes. </i> <i data-toggle="tooltip" data-placement="top" title="filiales,  partenaires,  etc."> Exemple </i></label>
                        <div class="form-inline">
                          <input type="text" class="form-control mr-2" name="grpd_act_organisme_externe_1[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_organisme_externe_2[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_organisme_externe_3[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_organisme_externe_4[]">
                        </div>
                        <label><i>Sous-traitants. </i> <i data-toggle="tooltip" data-placement="top" title="hébergeurs, prestataires et maintenanceinformatiques, etc."> Exemple </i></label>
                        <div class="form-inline">
                          <input type="text" class="form-control mr-2" name="grpd_act_sous_traitant_1[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_sous_traitant_2[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_sous_traitant_3[]">
                          <input type="text" class="form-control mr-2" name="grpd_act_sous_traitant_4[]">
                        </div>
                      </div>
                      <div class="form-group">
                        <label><h6>Transferts des données hors UE</h6><i>Des données personnelles sont-elles transmises hors de l’Union européenne?</i></label>
                        <div class="alert alert-warning" role="alert">Si oui, vers quel(s) pays ?</div>
                        <textarea class="form-control" name="grpd_act_transfer_donnees_hors_ue[]"></textarea>
                      </div>
                      <div class="form-group">
                        <label><h6>Mesures de sécurité</h6><i>Décrivez les mesures de sécurité organisationnelles et techniques prévues pour préserver la confidentialité des données.</i></label>
                        <div class="alert alert-danger" role="alert">Le niveau de sécurité doit être adapté aux risques soulevés par le traitement. Les exemples suivants constituent des garanties de base à prévoir et peuvent devoir être complétés.</div>
                        <div class="alert alert-warning" role="alert">Remplissez seulement les catégories concernées</div>
                        <div class="form-group">
                          <label>Contrôle d'accès des utilisateurs : <i>Décrivez les mesures</i></label>
                          <textarea class="form-control" name="grpd_act_controle_acces_utilisateurs[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Mesures de traçabilité : <i>précisez la nature des traces</i><i data-toggle="tooltip" data-placement="top" title="journalisation des accès des utilisateurs"> ( exemple ) </i>
                            <i>, les données enregistrées</i><i data-toggle="tooltip" data-placement="top" title=" identifiant, date et heure de connexion, etc."> ( exemple ) </i>
                            <i> et leur durée de conservation</i>
                          </label>
                          <textarea class="form-control" name="grpd_act_mesure_tracabilite[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Mesures de protection des logiciels (antivirus, mises à jour et correctifs de sécurité, tests, etc.) : <i>Décrivez les mesures</i></label>
                          <textarea class="form-control" name="grpd_act_mesure_protection_logiciel[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Sauvegarde des données : <i>Décrivez les modalités</i></label>
                          <textarea class="form-control" name="grpd_act_sauvegarde_donnees[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Chiffrement des données : <i>Décrivez les mesures. </i><i data-toggle="tooltip" data-placement="top" title="site accessible en https, utilisation de TLS, etc."> Exemple </i></label>
                          <textarea class="form-control" name="grpd_act_chiffrement_donnees[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Contrôle des sous-traitants : <i>Décrivez les modalités</i></label>
                          <textarea class="form-control" name="grpd_act_controle_sous_traitant[]"></textarea>
                        </div>
                        <div class="form-group">
                          <label>Autres mesures:</label>
                          <textarea class="form-control" name="grpd_act_autre_mesure[]"></textarea>
                        </div>
                      </div>
                    </div>
    `
};

let ComponentPaysList = {
    props: {
        id: '',
        name: '',
        value: ''
    },
    template: `
    <div>
        <label :for="id">Pays</label>
        <select :value="value" :id="id" class="form-control" :name="name">
            <option value="Allemagne">Allemagne</option>
            <option value="Autriche">Autriche</option>
            <option value="Belgique">Belgique</option>
            <option value="Danemark">Danemark</option>
            <option value="Espagne">Espagne</option>
            <option value="Finlande">Finlande</option>
            <option value="France" selected>France</option>
            <option value="Grèce">Grèce</option>
            <option value="Hongrie">Hongrie</option>
            <option value="Irlande">Irlande</option>
            <option value="Islande">Islande</option>
            <option value="Italie">Italie</option>
            <option value="Lettonie">Lettonie</option>
            <option value="Liban">Liban</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Monaco">Monaco</option>
            <option value="Norvège">Norvège</option>
            <option value="Nouvelle-Zelande">Nouvelle-Zélande</option>
            <option value="Pays-Bas">Pays-Bas</option>
            <option value="Pologne">Pologne</option>
            <option value="Portugal">Portugal</option>
            <option value="Roumanie">Roumanie</option>
            <option value="Royaume-Uni">Royaume-Uni</option>
            <option value="Russie">Russie</option>
            <option value="Sued">Suède</option>
            <option value="Suisse">Suisse</option>
        </select>
    </div>
    `
};

let ComponentAddressItem = {
    props: {
        id: '',
        withRS: false,
        active: false,
        info: {
            first_name: ''
            , last_name: ''
            , address_1: ''
            , address_2: ''
            , cp: ''
            , town: ''
            , country: ''
            , email: ''
            , tel: ''
        }
    },
    computed: {
      myClass() {
          if (this.active) {
              return 'show active';
          }
          else {
              return '';
          }
      }
    },
    template: `
    <div :class="'tab-pane fade ' + myClass" :id="id" role="tabpanel" :aria-labelledby="id + '-tab'" >
        <div class="form-row">
          <div class="form-group col-md-3">
            <label :for="id+'-nom'">Nom</label>
            <input :value="info.last_name" type="text" class="form-control" :id="id+'-nom'" >
          </div>
          <div class="form-group col-md-3">
            <label :for="id+'-prenom'">Prénom</label>
            <input :value="info.first_name" type="text" class="form-control" :id="id+'-prenom'" >
          </div>
          <div class="form-group col-md-6" v-if="withRS">
            <label :for="id+'-rs'">Société <i>si externe</i></label>
            <input type="text" class="form-control" :id="id+'-rs'">
          </div>
        </div>
        <div class="form-group">
          <label :for="id+'-adr1'">Address</label>
          <input :value="info.address_1" type="text" class="form-control" :id="id+'-adr1'">
        </div>
        <div class="form-group">
          <label :for="id+'-adr2'">Address 2</label>
          <input :value="info.address_2" type="text" class="form-control" :id="id+'-adr2'">
        </div>
        <div class="form-row">
          <div class="form-group col-md-2">
            <label :for="id+'-cp'">CP</label>
            <input :value="info.cp" type="text" class="form-control" :id="id+'-cp'" >
          </div>
          <div class="form-group col-md-6">
            <label :for="id+'-ville'">Vile</label>
            <input :value="info.town" type="text" class="form-control" :id="id+'-ville'" >
          </div>
          <div class="form-group col-md-4">
            <component-pays-list id="'{{ id }}-pays'" :value="info.country" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label :for="id+'-email'">Email</label>
            <input :value="info.email" type="email" class="form-control" :id="id+'email'" >
          </div>
          <div class="form-group col-md-6">
            <label :for="id+'-tel'">Tel</label>
            <input :value="info.tel" type="text" class="form-control" :id="id+'-tel'">
          </div>
        </div>
    </div>
    `
};

Vue.component('component-activites-list', ComponentActivitesList);
Vue.component('component-activite-item', ComponentActiviteItem);
Vue.component('component-pays-list', ComponentPaysList);
Vue.component('component-address-item', ComponentAddressItem);


var vue = new Vue({
    el: '#app',
    data: {
        data: {
            societe : 'Societe test 1'
            , token: 'tokeczegfeg@fefg'
            , pdg: {
                first_name: 'pdg_first_name'
                , last_name: 'pdg_last_name'
                , address_1: 'pdg_address_1'
                , address_2: 'pdg_address_2'
                , cp: 'pdg_address_cp'
                , town: 'pdg_town'
                , country: 'France'
                , email: 'pdg_email'
                , tel: 'pdg_tel'
            }
            , dpo: {
                societe: 'dpo_societe'
                , first_name: 'dpo_first_name'
                , last_name: 'dpo_last_name'
                , address_1: 'dpo_address_1'
                , address_2: 'dpo_address_2'
                , cp: 'dpo_address_cp'
                , town: 'dpo_town'
                , country: 'France'
                , email: 'dpo_email'
                , tel: 'dpo_tel'
            }
            , activites: {

            }
        },
    },
});
