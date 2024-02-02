@if ($product)
    <div class="product-cart-wrap mb-30">
        <div class="product-img-action-wrap">
            <div class="product-img product-img-zoom">
                <a href="{{ $product->url }}">
                    @php
                        // Original file path
                        $originalFilePath = $product->images[0];

                        // Insert '-150x150' before the '.jpg' extension
                        $pathInfo = pathinfo($originalFilePath);

                        // Reconstruct the file path with the additional '-150x150' before the file extension
                        $modifiedFilePath = $pathInfo['dirname'] . '/' . $pathInfo['filename'] . '-150x150.' . $pathInfo['extension'];
                        $modifiedFilePath = str_replace('.jpg', '-150x150.jpg', $originalFilePath);

                    @endphp
                    <img class="default-img" src="/storage/{{ $modifiedFilePath }}" alt="{{ $product->name }}">
                    <img class="hover-img" src="/storage/{{ $modifiedFilePath }}" alt="{{ $product->name }}">
                </a>
            </div>

            <div class="product-badges product-badges-position product-badges-mrg">
                @if ($product->status == 'pending')
                    <span
                        style="background-color: #ff792e; font-size: 11px; color:">{{ __('Waiting for approval') }}</span>
                @elseif ($product->status == 'draft')
                    <span style="background-color: #e12c2c; font-size: 11px;">{{ __('Not Approved') }}</span>
                @else
                    <span style="background-color: #3fa34d; font-size: 11px;">{{ __('Approved') }}</span>
                @endif

            </div>
        </div>
        <div class="product-content-wrap">
            <h2 class="text-truncate"><a href="{{ $product->url }}"
                    title="{{ $product->name }}">{{ $product->name }}</a></h2>


            {{-- @if (EcommerceHelper::isCartEnabled()) --}}
            <div class="nft-action" @if (!EcommerceHelper::isReviewEnabled()) style="bottom: 10px;" @endif>
                @if ($product->status == 'published')
                    <button class="ListNft btn_ingress" data-id="{{ $product->nft_id }}" style="font-size: x-small">
                        <i class="fas fa-plus"></i> List the NFT
                    </button>
                @else
                    <button class="btn btn-secondary ListNft" style="font-size: x-small" disabled>
                        <i class="fas fa-ban"></i> List the NFT
                    </button>
                @endif

            </div>
            {{-- @endif --}}
        </div>
    </div>
@endif
