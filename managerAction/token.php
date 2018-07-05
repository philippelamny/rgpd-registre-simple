<?php

namespace MyManagerAction;

/**
 * Class Token
 * @package MyManagerAction
 */
class Token
{

    const __TOKEN_ALLOW = array('trung');

    /**
     * Savoir si c'est bon ou pas
     * @param $token
     * @return bool
     */
    public static function isOK($token) {

        return in_array($token, self::__TOKEN_ALLOW);
    }

}