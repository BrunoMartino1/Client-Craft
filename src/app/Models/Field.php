<?php

namespace App\Models;

use App\Enums\DataTypes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\Field
 *
 * @property int $id
 * @property int $c_object_id
 * @property string $apiName
 * @property DataTypes $data_type
 */
class Field extends Model
{
    use HasFactory;

    /**
     * The model's default values for attributes.
     *
     * @var array
     */
    protected $attributes = [
        'custom' => false,
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'data_type' => DataTypes::class,
    ];

    /**
     * HAS ONE Relationships.
     */
    public function label()
    {
        return $this->hasOne(Label::class, 'field_id');
    }

    public function value()
    {
        return $this->hasOne(Value::class, 'field_id');
    }

    /**
     * BELONGS TO Relatioships.
     */
    public function cobject(): BelongsTo
    {
        return $this->belongsTo(CObjectType::class, 'c_object_type_id');
    }
}
