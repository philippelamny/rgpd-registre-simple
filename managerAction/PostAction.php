<?php

namespace MyManagerAction;

use TrTool\ParseUrlReST\Src\Classes\AManager;

/**
 * Class PostAction
 * @package MyManagerAction
 */
class PostAction extends AManager
{
    private function dealInfoGenerale(&$objWorkSheet) {
        $row = 2;
        $header = array(
            // Description
            array('title' => "Ce document vise à recenser les traitements de données personnelles mis en œuvre dans votre organismeen tant que responsable de traitement.Centralisé et régulièrement mis à jour, il vous permet de répondre à l’obligation de tenir un registre prévue parle RGPD", 'row' => $row++)
            //,array($row++,$row++)
            // SOCIETE
            ,array('title' => 'Raison Sociale', 'value' => $this->_options['societe'], 'row' => $row++)
            //,array($row++,$row++)
            //COORDONNEE RESPONSABLE SOCIETE
            ,array('title' => "Coordonnées du responsable de l’organisme responsable de traitement ou son représentant si le responsable est situé en dehors de l’UE", 'row' => $row)
            ,array('title' => 'Nom', 'value' => $this->_options['pdg']['last_name'], 'row' => $row++)
            ,array('title' => 'Prénom', 'value' => $this->_options['pdg']['first_name'], 'row' => $row++)
            ,array('title' => 'Adresse 1', 'value' => $this->_options['pdg']['address_1'], 'row' => $row++)
            ,array('title' => 'Adresse 2', 'value' => $this->_options['pdg']['address_2'], 'row' => $row++)
            ,array('title' => 'cp', 'value' => $this->_options['pdg']['cp'], 'row' => $row)
            ,array('title' => 'ville', 'value' => $this->_options['pdg']['town'], 'row' => $row)
            ,array('title' => 'pays', 'value' => $this->_options['pdg']['country'], 'row' => $row++)
            ,array('title' => 'email', 'value' => $this->_options['pdg']['email'],'row' => $row++)
            ,array('title' => 'tel', 'value' => $this->_options['pdg']['tel'], 'row' => $row++)
            ,array($row++)
            // COORDONNE DPO
            ,array('title' => 'Coordonnées du délégué à la protection des données si vous avez désigné un DPO', 'row' => $row++)
            ,array('title' => 'Nom', 'value' => $this->_options['dpo']['last_name'], 'row' => $row++)
            ,array('title' => 'Prénom', 'value' => $this->_options['dpo']['first_name'], 'row' => $row++)
            ,array('title' => 'Raison Sociale Société (si externe)', 'value' => $this->_options['dpo']['societe'], 'row' => $row++)
            ,array('title' => 'Adresse 1', 'value' => $this->_options['dpo']['address_1'], 'row' => $row++)
            ,array('title' => 'Adresse 2', 'value' => $this->_options['dpo']['address_2'], 'row' => $row++)
            ,array('title' => 'cp', 'value' => $this->_options['dpo']['cp'], 'row' => $row)
            ,array('title' => 'ville', 'value' => $this->_options['dpo']['town'], 'row' => $row)
            ,array('title' => 'pays', 'value' => $this->_options['dpo']['country'], 'row' => $row++)
            ,array('title' => 'email', 'value' => $this->_options['dpo']['email'],'row' => $row++)
            ,array('title' => 'tel', 'value' => $this->_options['dpo']['tel'], 'row' => $row++)
            ,array($row++, $row++, $row++)
            // LISTE DES TRAITEMENTS
            ,array('title' => 'Liste des traitements', 'row' => $row++)
            // HEADER 1
            ,array('title' => 'Identification du traitement', 'col' => 0, 'row' => $row)
            ,array('title' => 'Acteur (1)',  'col' => 4, 'row' => $row)
            ,array('title' => 'Finalité du traitement (2)', 'col' => 5, 'row' => $row)
            ,array('title' => 'Transferts hors UE ?',  'col' => 6, 'row' => $row)
            ,array('title' => 'Données sensibles ?',  'col' => 7, 'row' => $row++)
            ,array('title' => 'Liste des traitements', 'row' => $row++)
            // HEADER TITLE
            ,array('title' => 'Nom / sigle',  'row' => $row)
            ,array('title' => 'N° / REF', 'row' => $row)
            ,array('title' => 'Date de créaction', 'row' => $row)
            ,array('title' => 'Dernière mise à jour', 'row' => $row)
            ,array('title' => 'Responsable du traitement (3)', 'row' => $row)
            ,array('title' => 'Finalité principale',  'row' => $row)
            ,array('title' => 'Oui / non', 'row' => $row)
            ,array('title' => 'Oui / non', 'row' => $row++)

        );

        $nbActivites = 1;
        foreach ($this->_options["activites"] as $key => $activiteObject) {
            $activite = $activiteObject['info'];

            $header[] = array( 'value' => $activite['nom'], 'row' => $row);
            $header[] = array('value' => str_pad($nbActivites,8, 'act-0000', STR_PAD_LEFT), 'row' => $row);
            if (empty($activite['created_at'])) {
                $header[] = array( 'value' => (new \DateTime())->format('Y-m-d'), 'row' => $row);
            }
            else
            {
                $header[] = array( 'value' => $activite['created_at'], 'row' => $row);
            }
            if (empty($activite['updated_at'])) {
                $header[] = array( 'value' => (new \DateTime())->format('Y-m-d'), 'row' => $row);
            }
            else
            {
                $header[] = array( 'value' => $activite['updated_at'], 'row' => $row);
            }

            $header[] = array( 'value' => $activite['nom_responsable'], 'row' => $row);
            $header[] = array('value' => $activite['objectif'], 'row' => $row);
            $header[] = array( 'value' => $activite['transfer_donnees_hors_ue'] ? 'Oui' : 'Non', 'row' => $row);
            $header[] = array( 'value' => $activite['donnees_sensibles'] ? 'Oui' : 'Non' , 'row' => $row++);
            $nbActivites++;
        }

        $row += 2;

        $header[] =  array('title' => '(1) Responsable du traitement : la personne physique ou morale, l\'autorité publique, le service ou un autre organisme qui, seul ou conjointement avec d\'autres, détermine les finalités et les moyens du traitement', 'row' => $row++);
        $header[] =  array('title' => '(2) Finalité du traitement : Objectif principal d’une application informatique de données personnelles. Exemples de finalité : gestion des recrutements, gestion des clients, enquête de satisfaction, surveillance des locaux, etc.', 'row' => $row++);
        $header[] =  array('title' => '(3) A compléter Lorsque deux responsables du traitement ou plus déterminent conjointement les finalités et les moyens du traitement', 'row' => $row++);

        self::writeInWS($objWorkSheet, $header);
    }

    /**
     * @param \PHPExcel_Worksheet $objWorkSheet
     * @param $header
     */
    static public function writeInWS(&$objWorkSheet, $header) {
        $current_row = 1;
        $default_col = 0;
        $col = 0;
        foreach ($header as $item) {

            if (!key_exists('title', $item) && !key_exists('value', $item)) continue;

            if ($item['row'] != $current_row) {
                $current_row = $item['row'] ;
                $col = $default_col;
            }
            if (key_exists('col', $item)) {
                $col = $item['col'];
            }

            if (key_exists('title', $item)) {
                $objWorkSheet->setCellValueByColumnAndRow($col++, $item['row'], $item['title']);
            }
            if (key_exists('value', $item)) {
                $objWorkSheet->setCellValueByColumnAndRow($col++, $item['row'], $item['value']);
            }
        }
    }

    public function deal() {
        // Generation d'un excel pour le rgpd
        $token = $this->_options['grpd_token'];
        if (!Token::isOK($token)) throw new \Exception("Invalide Token");

        $slugTitle = $this->_options["societe"] ? preg_replace( '/[^a-z0-9]+/', '-', strtolower( $this->_options["societe"] )): '';
        $title = "registre_rgpd_" . $slugTitle;

        $objPHPExcel = new \PHPExcel();

        // Manage the title / Subject
        $objPHPExcel->getProperties()->setCreator("Philippe Lam")
            ->setLastModifiedBy("Philippe Lam")
            ->setTitle("Liste des traitements " . $slugTitle)
            ->setSubject("Registres d'activités");

        // Feuille 1: Information Sur la société
        $objWorkSheet = $objPHPExcel->getActiveSheet();
        $objWorkSheet->setTitle("Liste des traitements");


        $this->dealInfoGenerale($objWorkSheet);

        // Pour chaque activité, creer une nouvelle feuille
        $nbActivites = 0;
        $nbTotal = count($this->_options["activites"]);
        while(++$nbActivites <= $nbTotal)
        {
            $newActivite = $objPHPExcel->createSheet();
            $newActivite->setTitle("Activité ref " . str_pad($nbActivites,8, 'act-0000', STR_PAD_LEFT));
            $arActivites[$nbActivites - 1] = $newActivite;
        }

        $pColumnTitle = 0;
        $pColumnValue = 1;

        foreach ($this->_options['activites'] as $index => $activite)
        {
            $pActRow = 1; // Activite
            foreach ($activite['info'] as $key => $value)
            {
                $title = ucfirst(str_replace('_', ' ', $key));
                $arActivites[$index]->setCellValueByColumnAndRow($pColumnTitle, $pActRow, $title);

                if (is_array($value)) {
                    foreach ($value as $col => $sValue) {
                        $arActivites[$index]->setCellValueByColumnAndRow($pColumnValue + $col, $pActRow, $sValue);
                    }
                }
                else {
                    $arActivites[$index]->setCellValueByColumnAndRow($pColumnValue, $pActRow, $value);
                }
                $pActRow++;
            }
        }

        // Download the file
        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        header("Content-Disposition:attachment; filename=registre-rgpd.xlsx");
        header('Connection:close');

        $objWriter = \PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
        $objWriter->save('php://output');

    }

}