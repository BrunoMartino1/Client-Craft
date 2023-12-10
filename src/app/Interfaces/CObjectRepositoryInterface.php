<?php

namespace App\Interfaces;

use App\Models\CObject;

interface CObjectRepositoryInterface
{
    /**
     * @return Illuminate\Database\Eloquent\Collection<int, App\Models\CObject>
     */
    public function getCObjects();

    public function getCObjectByApiName(string $apiName): CObject;

    public function getCObjectWithValues(string $apiName): CObject;

    /**
     * @return array<string, App\Models\Field>
     */
    public function getCObjectFields(string $apiName);
}
