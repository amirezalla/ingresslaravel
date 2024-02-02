@extends(EcommerceHelper::viewPath('customers.master'))
@section('content')
    @php
        use Botble\Ecommerce\Models\Product;
        $user_eth = request()->user('customer')->eth_address;
        $perPage = 3;
        $products = Product::where('owner_eth_address', $user_eth)
            ->orderBy('created_at', 'desc')
            ->paginate($perPage);
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
    <div class="pagination-area">
        {{ $products->links() }}
    </div>

    <script>
        const listNftButton = document.querySelector('.ListNft');

        listNftButton.addEventListener('click', function() {
            Swal.fire({
                title: 'List NFT',
                html: `
                        <input type="number" id="min-bid" class="swal2-input" placeholder="Amount of Min Bid" style="font-size: medium;display: block;width: 100%;">
                        <input type="number" id="buy-now-price" class="swal2-input" placeholder="Buy Now Price" style="font-size: medium;display: block;width: 100%;">
                        <select id="auction-end" class="swal2-input" style="margin-top: 0px;">
                            <option value="12">12 Hours</option>
                            <option value="24">24 Hours</option>
                            <option value="72">3 Days</option>
                        </select>
                    `,
                focusConfirm: false,
                preConfirm: () => {
                    const dataId = this.getAttribute('data-id');
                    const minBid = document.getElementById('min-bid').value;
                    const buyNowPrice = document.getElementById('buy-now-price').value;
                    const auctionEnd = document.getElementById('auction-end').value;
                    console.log('Min Bid:', minBid, 'Buy Now Price:', buyNowPrice, 'Auction End:',
                        auctionEnd);
                },
                confirmButtonText: 'List NFT',
                showCancelButton: true,
                cancelButtonText: 'Cancel',
            });
        });
    </script>
@endsection
