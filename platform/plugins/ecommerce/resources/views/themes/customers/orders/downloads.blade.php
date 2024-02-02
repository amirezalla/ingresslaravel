@extends(EcommerceHelper::viewPath('customers.master'))
@section('content')
    @php
        use Botble\Ecommerce\Models\Product;
        $user_eth = request()->user('customer')->eth_address;
        $products = Product::where('owner_eth_address', $user_eth);
        dd($products, $user_eth);
    @endphp
    <div class="row">
        @foreach ($products as $product)
            <div class="col-3">
                @include(Theme::getThemeNamespace() . '::views.ecommerce.includes.product-minted-item',
                    $product)
            </div>
        @endforeach

    </div>
@endsection
