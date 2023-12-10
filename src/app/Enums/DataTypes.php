<?php

namespace App\Enums;

enum DataTypes: string
{
    case STRING = 'string';
    case INTEGER = 'integer';

    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }
}
