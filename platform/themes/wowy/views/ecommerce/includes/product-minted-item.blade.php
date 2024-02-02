@if ($product)
    <div class="product-cart-wrap mb-30">
        <div class="product-img-action-wrap">
            <div class="product-img product-img-zoom">
                <a href="{{ $product->url }}">
                    <img class="default-img"
                        src="{{ RvMedia::getImageUrl($product->image, 'product-thumb', false, RvMedia::getDefaultImage()) }}"
                        alt="{{ $product->name }}">
                    <img class="hover-img"
                        src="{{ RvMedia::getImageUrl($product->images[1] ?? $product->image, 'product-thumb', false, RvMedia::getDefaultImage()) }}"
                        alt="{{ $product->name }}">
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
            {{-- <div class="product-action-1 show" @if (!EcommerceHelper::isReviewEnabled()) style="bottom: 10px;" @endif>
                <a aria-label="{{ __('Add To Cart') }}" class="action-btn hover-up add-to-cart-button"
                    data-id="{{ $product->id }}" data-url="{{ route('public.cart.add-to-cart') }}" href="#"><i
                        class="far fa-shopping-bag"></i></a>
            </div> --}}
            {{-- @endif --}}
        </div>
    </div>
@endif
