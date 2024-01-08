<?php

namespace App\Models;

use App\Enums\DataTypes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Value
 *
 * @property int $id
 * @property int $field_id
 * @property string $string
 * @property int $integer
 *
 * @method public (string | int) getValue(App\Enum\DataTypes $dataType) this method receives the field data type and return the matching value. E.G getValue(DataType::STRING) will return what is currently on the $this->string field
 */
class Value extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'apiName', 'c_object_id', 'field_id', 'string', 'integer',
    ];

    /**
     * Get the field associated with the value.
     */
    public function field()
    {
        return $this->belongsTo(Field::class, 'field_id');
    }

    public function getValue(DataTypes $dataType): string|int
    {
        return match ($dataType) {
            DataTypes::STRING => $this->string,
            DataTypes::INTEGER => $this->integer,
        };
    }
}
