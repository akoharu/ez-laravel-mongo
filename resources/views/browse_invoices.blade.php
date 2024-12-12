<!DOCTYPE html>
<html>
<head>
   <title>Browse Invoices</title>
</head>
<body>
<h2>Invoices</h2>

@forelse ($invoices as $invoice)
  <ul>
    <li>Code: {{ $invoice->code }}</li>
    <li>Number: {{ $invoice->number }}</li>
    <li>Date: {{ $invoice->date }}</li>
    <li>Customer: {{ $invoice->customer }}</li>
    <li>Company: {{ $invoice->company }}</li>
  </ul>
@empty
    <p>No results</p>
@endforelse

<hr>
<div class="pagination">
  {{ $invoices->links() }}
</div>

</body>
</html>