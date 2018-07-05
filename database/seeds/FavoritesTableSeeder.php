<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Question;

class FavoritesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('favorites')->delete();

        $users = User::pluck('id')->all();
        $numberOfUsers = count($users);

        foreach (Question::all() as $question)
        {
            for ($i = 0; $i < rand(0, $numberOfUsers); $i++)
            {
                $user = $users[$i];

                $question->favorites()->attach($user);
            }
        }
    }
}
