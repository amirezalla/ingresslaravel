@extends(EcommerceHelper::viewPath('customers.master'))
@section('content')
    @php
        use Botble\Ecommerce\Models\Product;
        $user_eth = request()->user('customer')->eth_address;
        $products = Product::where('owner_eth_address', $user_eth)->paginate($perPage);
    @endphp
    <div class="row">
        @forelse ($products as $product)
            <div class="col-4">
                @include(Theme::getThemeNamespace() . '::views.ecommerce.includes.product-minted-item',
                    $product)
            </div>
        @empty
            <div>{{ __('No Minted NFTs found') }}</div>
        @endforelse

    </div>
    <div class="pagination-wrapper">
        {{ $products->links() }}
    </div>
@endsection
