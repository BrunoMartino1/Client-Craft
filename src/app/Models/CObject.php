<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * App\Models\CObject
 *
 * @property int $id
 * @property string $apiName
 * @property int $c_object_type_id
 */
class CObject extends Model
{
    use HasFactory;

    /**
     * BELONGS TO Relatioships.
     */
    public function cobject(): BelongsTo
    {
        return $this->belongsTo(CObjectType::class, 'c_object_type_id');
    }

    /**
     * Get the CObjectType for the CObject.
     */
    public function cObjectType(): BelongsTo
    {
        return $this->belongsTo(CObjectType::class, 'c_object_type_id');
    }

    /**
     * Get the Values for the CObject.
     */
    public function values(): HasMany
    {
        return $this->hasMany(Value::class, 'c_object_id');
    }

    public function fields()
    {
        return $this->morphMany(Field::class, 'c_object_type_id');
    }
}
