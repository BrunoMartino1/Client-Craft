<?php

namespace App\Models;

use App\Enums\DataTypes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

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
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'c_object_type_id', 'apiName',
    ];

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

    public function values()
    {
        return $this->hasMany(Value::class, 'field_id');
    }

    public function cObject()
    {
        return $this->hasManyThrough(CObject::class, CObjectType::class, 'c_object_type_id', 'c_object');
    }

    /**
     * Get the Value for the Field associated with the current CObject.
     */
    public function value(): HasOne
    {
        return $this->hasOne(Value::class, 'field_id')->where('c_object_id', '=', $this->c_object_id);
    }

    /**
     * Get the CObjectType for the Field.
     */
    public function cObjectType(): BelongsTo
    {
        return $this->belongsTo(CObjectType::class, 'c_object_type_id');
    }
}
