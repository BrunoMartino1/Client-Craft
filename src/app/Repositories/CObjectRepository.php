<?php

namespace App\Repositories;

use App\Enums\DataTypes;
use App\Models\CObject;
use App\Models\CObjectType;
use App\Models\Field;
use Illuminate\Support\Facades\DB;

class CObjectRepository
{
    private $cObjectTypeApiName;

    private $fields = [];

    private $values = [];

    /**
     * @return Illuminate\Database\Eloquent\Collection<int, App\Models\CObject>
     */
    public function getCObjects()
    {
        return CObject::all();
    }

    public function getCObjectByApiName(string $apiName): CObjectType
    {
        return CObjectType::where('apiName', '=', $apiName)->first();
    }

    public function getCObjectTypeWithValues(string $apiName): CObjectType
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

    public function createType(string $cObjectTypeApiName): self
    {
        $this->cObjectTypeApiName = $cObjectTypeApiName;

        return $this;
    }

    public function addField(string $fieldName, DataTypes $dataType): self
    {
        $this->fields[] = [
            'fieldName' => $fieldName,
            'dataType' => $dataType,
        ];

        return $this;
    }

    public function addValue(string $fieldName, $value): self
    {
        $this->values[$fieldName] = $value;

        return $this;
    }

    public function save(): CObject|CObjectType
    {
        // If values are present, create CObject with values
        if (! empty($this->values)) {
            return $this->createCObjectWithValues();
        }

        // If no values, create only CObjectType and fields
        return $this->createCObjectType();
    }

    private function createCObjectType(): CObjectType
    {
        $cObjectType = CObjectType::firstOrCreate(['apiName' => $this->cObjectTypeApiName]);

        // Create fields for CObjectType
        foreach ($this->fields as $field) {
            $this->createField($cObjectType->id, $field['fieldName'], $field['dataType']);
        }

        return $cObjectType;
    }

    public function createCObject(string $cObjectTypeApiName): self
    {
        $this->cObjectTypeApiName = $cObjectTypeApiName;

        return $this;
    }

    private function createCObjectWithValues(): CObject
    {
        $cObjectType = CObjectType::firstOrCreate(['apiName' => $this->cObjectTypeApiName]);

        // Create CObject
        $cObject = $cObjectType->cObjects()->create();

        // Add values to CObject
        foreach ($this->values as $fieldName => $value) {
            $this->addValueToCObject($cObject, $fieldName, $value);
        }
        dd($cObject->values());

        return $cObject;
    }

    private function createField(int $cObjectTypeId, string $fieldName, DataTypes $dataType): Field
    {
        return Field::create([
            'c_object_type_id' => $cObjectTypeId,
            'apiName' => $fieldName,
            'data_type' => $dataType,
        ]);
    }

    private function addValueToCObject(CObject $cObject, string $fieldName, $value): void
    {
        $field = Field::where('apiName', $fieldName)
            ->where('c_object_type_id', $cObject->c_object_type_id)
            ->firstOrFail();

        $cObject->values()->create([
            'field_id' => $field->id,
            'string' => $field->data_type === DataTypes::STRING ? $value : null,
            'integer' => $field->data_type === DataTypes::INTEGER ? $value : null,
        ]);
    }

    public function getAllCObjectsWithTypeAndValues(string $cObjectTypeApiName)
    {
        $results = DB::table('c_object_types')
            ->where('c_object_types.apiName', '=', 'Contact')
            ->join('c_objects', 'c_objects.c_object_type_id', '=', 'c_object_types.id')
            ->join('fields', 'fields.c_object_type_id', '=', 'c_object_types.id')
            ->leftJoin('values', function ($join) {
                $join->on('values.c_object_id', '=', 'c_objects.id');
                $join->on('values.field_id', '=', 'fields.id');
            })
            ->select(
                'c_object_types.apiName AS apiName',
                'c_objects.id AS c_object_id',
                DB::raw('json_arrayagg(JSON_OBJECT("apiName", fields.apiName, "data_type", fields.data_type, "value", JSON_OBJECT("string", values.string, "integer", values.integer))) AS fields')
            )
            ->groupBy('c_object_types.id', 'c_objects.id')
            ->get();

        foreach ($results as $result) {
            $result->fields = json_decode($result->fields);
        }

        return $results;
    }
}
