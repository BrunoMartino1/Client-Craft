<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

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
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'apiName',
    ];

    /**
     * Get the Fields for the CObjectType.
     */
    public function fields(): HasMany
    {
        return $this->hasMany(Field::class, 'c_object_type_id');
    }

    /**
     * Get the comments for the blog post.
     */
    public function cObject(): HasOne
    {
        return $this->hasOne(CObject::class);
    }
}
