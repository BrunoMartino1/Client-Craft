<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * App\Models\CObjectType
 *
 * @property int $id
 * @property string $apiName
 * @property int $label_id
 */
class CObjectType extends Model
{
    use HasFactory;

    /**
     * Get the comments for the blog post.
     */
    public function comments(): HasMany
    {
        return $this->hasMany(CObject::class);
    }
}
