@extends('layouts.app')

@section('content')
    <question-page :question="{{ $question }}"></question-page>
@endsection
