<?php

namespace App\Repositories;

use App\Interfaces\CObjectRepositoryInterface;
use App\Models\CObject;

class CObjectRepository implements CObjectRepositoryInterface
{
    /**
     * @return Illuminate\Database\Eloquent\Collection<int, App\Models\CObject>
     */
    public function getCObjects()
    {
        return CObject::all();
    }

    public function getCObjectByApiName(string $apiName): CObject
    {
        return CObject::where('apiName', '=', $apiName)->first();
    }

    public function getCObjectWithValues(string $apiName): CObject
    {
        $CObject = $this->getCObjectByApiName($apiName);

        // Eager load the fields and their values
        $CObject->load(['fields' => function ($query) {
            $query->with('value');
        }]);

        return $CObject;
    }

    /**
     * @return array<string, App\Models\Field>
     */
    public function getCObjectFields(string $apiName)
    {
        $CObject = $this->getCObjectByApiName($apiName);

        return $CObject->fields()->get();
    }
}
