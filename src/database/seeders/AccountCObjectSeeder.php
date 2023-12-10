<?php

namespace Database\Seeders;

use App\Models\CObject;
use App\Models\CObjectType;
use App\Models\Field;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AccountCObjectSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $accountCObjectType = new CObjectType();
        $accountCObjectType->apiName = 'Account';
        $accountCObjectType->save();

        $stringEnum = \App\Enums\DataTypes::STRING;

        // Create default fields for the Account CObject
        $this->createField($accountCObjectType->id, 'name', $stringEnum)->save();
        $this->createField($accountCObjectType->id, 'description', $stringEnum)->save();
        $this->createField($accountCObjectType->id, 'phone', $stringEnum)->save();
        $this->createField($accountCObjectType->id, 'mobile_phone', $stringEnum)->save();
        $this->createField($accountCObjectType->id, 'website', $stringEnum)->save();
        $this->createField($accountCObjectType->id, 'billing_address_street', $stringEnum)->save();
        $this->createField($accountCObjectType->id, 'billing_address_city', $stringEnum)->save();
        $this->createField($accountCObjectType->id, 'billing_address_state', $stringEnum)->save();
        $this->createField($accountCObjectType->id, 'billing_address_zip', $stringEnum)->save();
        $this->createField($accountCObjectType->id, 'billing_address_country', $stringEnum)->save();
        $this->createField($accountCObjectType->id, 'shipping_address_street', $stringEnum)->save();
        $this->createField($accountCObjectType->id, 'shipping_address_city', $stringEnum)->save();
        $this->createField($accountCObjectType->id, 'shipping_address_state', $stringEnum)->save();
        $this->createField($accountCObjectType->id, 'shipping_address_zip', $stringEnum)->save();
        $this->createField($accountCObjectType->id, 'shipping_address_country', $stringEnum)->save();
        $this->createField($accountCObjectType->id, 'industry', $stringEnum)->save();
        $this->createField($accountCObjectType->id, 'annual_revenue', $stringEnum)->save();
        $this->createField($accountCObjectType->id, 'employees', $stringEnum)->save();
    }

    private function createField(int $cObjectId, string $fieldName, \App\Enums\DataTypes $dataType): Field
    {
        $field = new Field();
        $field->c_object_type_id = $cObjectId;
        $field->apiName = $fieldName;
        $field->data_type = $dataType;

        return $field;
    }
}
