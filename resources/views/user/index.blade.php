@extends('layouts.app')

@section('users')


<table class="table">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">eMail</th>
            <th scope="col">Admin status</th>
        </tr>
    </thead>
    <tbody>
        @foreach($users as $user)
        <tr>
            <th scope="row">{{$user->id}}</th>
            <td>{{$user->name}}</td>
            <td>{{$user->email}}</td>
            <td>{{$user->is_admin}}</td>
        </tr>
        @endforeach
    </tbody>
</table>
@endsection