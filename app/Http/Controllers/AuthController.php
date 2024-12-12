<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class AuthController extends Controller
{
    public function showLogin()
    {
        return Inertia::render('billing/pages/Login');
    }

    public function showForgotPassword()
    {
        return Inertia::render('billing/pages/ForgotPassword');
    }

    public function showResetPassword($token)
    {
        return Inertia::render('billing/pages/ResetPassword', [
            'token' => $token,
        ]);
    }
}
