<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="base-url" content="{{ URL::to('/') }}">
		<meta name="csrf-token" content="{{ csrf_token() }}">
		<script>
			window.Laravel = <?php echo json_encode([
			    'csrfToken' => csrf_token()
			]); ?>
		</script>
        <link rel="apple-touch-icon" sizes="180x180" href="{{ URL::asset('assets/favicon/apple-touch-icon.png') }}">
        <link rel="icon" type="image/png" sizes="32x32" href="{{ URL::asset('assets/favicon/favicon-32x32.png') }}">
        <link rel="icon" type="image/png" sizes="16x16" href="{{ URL::asset('assets/favicon/favicon-16x16.png') }}">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="theme-color" content="#ffffff">
        <meta name="msapplication-config" content="{{ URL::asset('assets/favicon/browserconfig.xml') }}">
	</head>
	<body>
		@inertia
        @viteReactRefresh
        @vite('resources/js/app.tsx')
	</body>
</html>
