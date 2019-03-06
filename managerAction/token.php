<?php

namespace MyManagerAction;

/**
 * Class Token
 * @package MyManagerAction
 */
class Token
{

    const __TOKEN_ALLOW = [];

    /**
     * Savoir si c'est bon ou pas
     * @param $token
     * @return bool
     */
    public static function isOK($token) {

        if (empty(__TOKEN_ALLOW)) return true;

        return in_array($token, self::__TOKEN_ALLOW);
    }

}