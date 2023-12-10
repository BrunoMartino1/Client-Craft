<?php

use App\Models\CObjectType;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('c_objects', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(CObjectType::class);
            $table->timestamps();
        });

        // Call Account CObject seeder
        Artisan::call('db:seed', [
            '--class' => 'AccountCObjectSeeder',
            '--force' => true, // <--- add this line to work in production (because we will need to run this on production eventually)
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('c_objects');
    }
};
