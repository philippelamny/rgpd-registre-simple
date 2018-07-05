<?php

namespace MyManagerAction;

use TrTool\ParseUrlReST\Src\Classes\AManager;

/**
 * Class PostAction
 * @package MyManagerAction
 */
class PostAction extends AManager
{
    public function deal() {
        // Generation d'un excel pour le rgpd
        $token = $this->_options['grpd_token'];
        if (!Token::isOK($token)) throw new \Exception("Invalide Token");

/*
    ["grpd_raison_sociale"]
    ["grpd_coord_responsable_nom"]
    ["grpd_coord_responsable_prenom"]
    ["grpd_coord_responsable_adr1"]
    ["grpd_coord_responsable_adr2"]
    ["grpd_coord_responsable_cp"]
    ["grpd_coord_responsable_ville"]
    ["grpd_coord_responsable_pays"]
    ["grpd_coord_responsable_email"]
    ["grpd_coord_responsable_tel"]
    ["grpd_coord_dpo_nom"]
    ["grpd_coord_dpo_prenom"]
    ["grpd_coord_dpo_raison_sociale"]
    ["grpd_coord_dpo_adr1"]
    ["grpd_coord_dpo_adr2"]
    ["grpd_coord_dpo_cp"]
    ["grpd_coord_dpo_ville"]
    ["grpd_coord_dpo_pays"]
    ["grpd_coord_dpo_email"]
    ["grpd_coord_dpo_tel"]
    ["grpd_act_name"]
    ["grpd_act_date_creation"]
    ["grpd_act_data_derniere_maj"]
    ["grpd_act_nom_responsable"]
    ["grpd_act_nom_logiciel"]
    ["grpd_act_objectif"]
    ["grpd_act_categorie_personnes_concernees_1"]
    ["grpd_act_categorie_personnes_concernees_2"]
    ["grpd_act_categorie_personnes_concernees_3"]
    ["grpd_act_categorie_personnes_concernees_4"]
    ["grpd_act_categorie_donnees_collectees"]
    ["grpd_act_vie_personnelle"]
    ["grpd_act_vie_professionnelle"]
    ["grpd_act_info_eco_finance"]
    ["grpd_act_donnees_connexion"]
    ["grpd_act_donnees_localisation"]
    ["grpd_act_internet"]
    ["grpd_act_autre_categories_donnees"]
    ["grpd_act_donnees_sensibles"]
    ["grpd_act_nombre_duree_conservation"]
    ["grpd_act_type_duree_conservation"]
    ["grpd_act_duree_conservation_specifique"]
    ["grpd_act_categorie_destinataire_1"]
    ["grpd_act_categorie_destinataire_2"]
    ["grpd_act_categorie_destinataire_3"]
    ["grpd_act_categorie_destinataire_4"]
    ["grpd_act_organisme_externe_1"]
    ["grpd_act_organisme_externe_2"]
    ["grpd_act_organisme_externe_3"]
    ["grpd_act_organisme_externe_4"]
    ["grpd_act_sous_traitant_1"]
    ["grpd_act_sous_traitant_2"]
    ["grpd_act_sous_traitant_3"]
    ["grpd_act_sous_traitant_4"]
    ["grpd_act_transfer_donnees_hors_ue"]
    ["grpd_act_controle_acces_utilisateurs"]
    ["grpd_act_mesure_tracabilite"]
    ["grpd_act_mesure_protection_logiciel"]
    ["grpd_act_sauvegarde_donnees"]
    ["grpd_act_chiffrement_donnees"]
    ["grpd_act_controle_sous_traitant"]
    ["grpd_act_autre_mesure"]

*/

    }
}