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

        $title = "registre_rgpd_" . preg_replace( '/[^a-z0-9]+/', '-', strtolower( $this->_options["grpd_raison_sociale"] ));

        $objPHPExcel = new \PHPExcel();

        // Manage the title / Subject
        $objPHPExcel->getProperties()->setCreator("Philippe Lam")
            ->setLastModifiedBy("Philippe Lam")
            ->setTitle("registre_rgpd_" + preg_replace( '/[^a-z0-9]+/', '-', strtolower( $this->_options["grpd_raison_sociale"] )))
            ->setSubject("Registres d'activités");

        // Feuille 1: Information Sur la société
        $objWorkSheet = $objPHPExcel->getActiveSheet();
        $objWorkSheet->setTitle("Informations Generales");

        // Pour chaque activité, creer une nouvelle feuille
        $nbActivites = 1;
        $arActivites = array();
        foreach ($this->_options["grpd_act_name"] as $name) {
            $newActivite = $objPHPExcel->createSheet();
            $newActivite->setTitle("Activité " . $nbActivites);

            $arActivites[$nbActivites - 1] = $newActivite;
            $nbActivites++;
        }

        $pColumnTitle = 0;
        $pColumnValue = 1;
        $pRow = 1; // Principal
        $pActRow = 1; // Activite
        foreach ($this->_options as $key => $value) {
            if (!preg_match('/^grpd_act_/', $key)) {
                $arTitle = explode('_', $key);
                array_shift($arTitle);
                $objWorkSheet->setCellValueByColumnAndRow($pColumnTitle, $pRow, implode(" ", $arTitle));
                $objWorkSheet->setCellValueByColumnAndRow($pColumnValue, $pRow, $value);
                $pRow++;
            }
            else {
                $arTitle = explode('_', $key);
                array_shift($arTitle);
                array_shift($arTitle);
                $nbActivites = 0;
                foreach ($value as $sValue) {
                    $arActivites[$nbActivites]->setCellValueByColumnAndRow($pColumnTitle, $pActRow, implode(" ", $arTitle));
                    $arActivites[$nbActivites]->setCellValueByColumnAndRow($pColumnValue, $pActRow, $sValue);
                    $nbActivites++;
                }
                $pActRow++;
            }
        }

        // Download the file
        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        header('Content-Disposition', "attachment; filename={$title}");
        header('Connection', 'close');

        $objWriter = \PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
        $objWriter->save('php://output');




    }
}