@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                    <div class="alert alert-success" role="alert">
                        {{ session('status') }}
                    </div>
                    @endif
                    {{ __('You are logged in!') }}
                    <div>
                        <div>{{__('Name:')}} {{Auth::user()->name}}</div>
                        <div>{{__('eMail:')}} {{Auth::user()->email}}</div>
                        @if(Auth::user()->is_admin == true)
                        <div>{{__('User status:')}} {{__('Admin')}}</div>
                        <a href="{{route('users')}}"> {{ __('-> Отобразить список всех пользователей <-') }} </a>
                        @else
                        <div>{{__('User status:')}} {{__('User')}}</div>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection