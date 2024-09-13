<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //composer dump-autoload

        //php artisan db:seed --class=EmployeeSeeder

        DB::table('employee')->insert([
            [
                'name' => 'John Doe',
                'email' => 'johndoe@example.com',
                'Salary' => 50000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Jane Smith',
                'email' => 'janesmith@example.com',
                'Salary' => 60000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Mike Johnson',
                'email' => 'mikejohnson@example.com',
                'Salary' => 55000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => '1 Johnson',
                'email' => 'mikejohnson@example.com',
                'Salary' => 55000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Mi33333ke Johnson',
                'email' => 'mikejohnson@example.com',
                'Salary' => 55000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
