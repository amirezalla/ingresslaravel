@extends(EcommerceHelper::viewPath('customers.master'))
@section('content')
    @php
        use Botble\Ecommerce\Models\Product;
        $user_eth = request()->user('customer')->eth_address;
        $products = Product::where('owner_eth_address', $user_eth);
        $products = Product::where('owner_eth_address', $user_eth)
            ->get()
            ->toArray();
    @endphp
    <div class="row">
        <div class="col-3">

            @include(Theme::getThemeNamespace() . '::views.ecommerce.includes.product-minted-item',
                $products)
        </div>
    </div>
@endsection
