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
     * Get the Fields for the CObject.
     */
    public function fields(): HasMany
    {
        return $this->hasMany(Field::class, 'c_object_id');
    }

    /**
     * BELONGS TO Relatioships.
     */
    public function cobject(): BelongsTo
    {
        return $this->belongsTo(CObjectType::class, 'c_object_type_id');
    }
}
