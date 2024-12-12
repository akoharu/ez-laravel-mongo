<?php

namespace App\Http\Controllers;

use App\Models\Invoice;

class InvoiceController extends Controller
{
    /**
     * Display the specified resource.
     */
    public function show()
    {
        return view('browse_invoices', [
            'invoices' => Invoice::paginate(5),
        ]);
    }
}
