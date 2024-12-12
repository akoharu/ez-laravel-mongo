<?php

namespace App\Models;

use MongoDB\Laravel\Auth\User as Authenticatable;

class User extends Authenticatable
{
    protected $table = 'users-permissions_user';

    protected $fillable = ['email', 'password', 'username', 'firstName', 'lastName', 'role'];

    protected $hidden = ['password'];
}
