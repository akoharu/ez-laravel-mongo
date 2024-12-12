<?php

namespace App\Http\Middleware;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $user = $request->user();
        $activeFeatures = [];

        if ($user instanceof User) {
            $features = $user->features()->all();

            foreach ($features as $feature => $enabled) {
                if ($enabled) {
                    $activeFeatures[] = $feature;
                }
            }
        }

        return array_merge(parent::share($request), [
            'currentUser' => fn () => $user
                ? [
                    'id' => $user->id,
                    'username' => $user->username,
                    'email' => $user->email,
                    'features' => $activeFeatures,
                ]
                : null,

            'flash' => [
                'message' => fn () => $request->session()->get('message'),
            ],
        ]);
    }
}
