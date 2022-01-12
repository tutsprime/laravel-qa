<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes(['verify' => true]);
Route::view('/{any}', 'spa')->where('any', '.*');
Route::get('/', 'QuestionsController@index');


Route::middleware('verified')->group(function() {
    Route::get('/home', 'HomeController@index')->name('home');
    
    Route::resource('questions', 'QuestionsController')->except('show', 'index');
    // Route::post('/questions/{question}/answers', 'AnswersController@store')->name('answers.store');
    Route::resource('questions.answers', 'AnswersController')->except(['create', 'show', 'index']);
    Route::post('/answers/{answer}/accept', 'AcceptAnswerController')->name('answers.accept');
    
    Route::post('/questions/{question}/favorites', 'FavoritesController@store')->name('questions.favorite');
    Route::delete('/questions/{question}/favorites', 'FavoritesController@destroy')->name('questions.unfavorite');
    
    Route::post('/questions/{question}/vote', 'VoteQuestionController');
    Route::post('/answers/{answer}/vote', 'VoteAnswerController');
});

Route::get('/questions/{question}/answers', 'AnswersController@index')->name('questions.answers.index');
Route::get('/questions/{slug}', 'QuestionsController@show')->name('questions.show');
Route::get('/questions', 'QuestionsController@index')->name('questions.index');